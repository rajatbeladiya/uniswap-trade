import React, { Component } from 'react';
import { ChainId, Token, Pair, WETH, TokenAmount, Fetcher, Route, Trade, TradeType, Percent } from '@uniswap/sdk';

import web3 from '../web3/web3';
import {
  Tokens, factoryABI, factory, kovan, tokenABI, IUniswapV2Router02ABI,
  IUniswapV2Router02Address, getERCContractInstance, uniswapV2FactoryABI,
  uniswapV2FactoryAddress, DAI_WETH_ABI,
} from './Tokens';


const token0Address = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa';
const token1Address = '0xd0a1e359811322d97991e03f863a0c30c2cf029c';

class UniswapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token1: 'DAI',
      token2: 'WETH',
      token1Balance: 0,
      token2Balance: 0,
      totalLiquidity: 0,
      PooledToken0: 0,
      PooledToken1: 0,
    };
  }

  async componentDidMount() {
    const [account] = await web3.eth.getAccounts();
    const tokenContractA = new web3.eth.Contract(tokenABI, token0Address);
    const tokenContractB = new web3.eth.Contract(tokenABI, token1Address);
    console.log('tokenContractA======', tokenContractA);
    const DAIBalance = this.fromWeiToEth(await tokenContractA.methods.balanceOf(account).call());
    const WETHBalance = this.fromWeiToEth(await tokenContractB.methods.balanceOf(account).call());
    this.setState({
      token1Balance: DAIBalance,
      token2Balance: WETHBalance,
    });
    const uniswapV2FactoryContract = new web3.eth.Contract(uniswapV2FactoryABI, uniswapV2FactoryAddress);
    console.log('uniswapV2FactoryContract======', uniswapV2FactoryContract);
    const pairAddress = await uniswapV2FactoryContract.methods.getPair(token0Address, token1Address).call();
    console.log('pairAddress=====', pairAddress);
    const DAIWETHContract = new web3.eth.Contract(DAI_WETH_ABI, pairAddress);
    console.log('DAIWETHContract=======', DAIWETHContract);
    const totalLiquidity = this.fromWeiToEth(await DAIWETHContract.methods.balanceOf(account).call());
    this.setState({ totalLiquidity });
  }

  fromWeiToEth = (wei) => {
    return web3.utils.fromWei(wei, 'ether');
  }

  onSwapClick = async () => {
    console.log('onSwapClick=====');
    const [account] = await web3.eth.getAccounts();
    console.log('account====', account);
    const factoryContract = new web3.eth.Contract(factoryABI, kovan);
    const exchangeAddressA = await factoryContract.methods.getExchange(token0Address).call(); // DAI - kovan
    const exchangeAddressB = await factoryContract.methods.getExchange(token1Address).call(); // WETH - kovan
    const tokenAddress = await factoryContract.methods.getToken(exchangeAddressA).call();
    const tokenAddressB = await factoryContract.methods.getToken(exchangeAddressB).call();
    const tokenContractA = new web3.eth.Contract(tokenABI, tokenAddress);
    const tokenContractB = new web3.eth.Contract(tokenABI, tokenAddressB);

    // TokenA (ERC20) to ETH conversion
    const inputAmountA = "200000000000000000000"
    console.log('inputAmountA DAI======', inputAmountA);
    const inputReserveA = await tokenContractA.methods.balanceOf(exchangeAddressA).call()
    const outputReserveA = await web3.eth.getBalance(exchangeAddressA)

    const numeratorA = inputAmountA * outputReserveA * 997
    const denominatorA = inputReserveA * 1000 + inputAmountA * 997
    const outputAmountA = numeratorA / denominatorA
    console.log('outputAmountA eth=====', outputAmountA);

    // ETH to TokenB conversion
    const inputAmountB = outputAmountA
    const inputReserveB = await web3.eth.getBalance(exchangeAddressB)
    const outputReserveB = await tokenContractB.methods.balanceOf(exchangeAddressB).call()

    const numeratorB = inputAmountB * outputReserveB * 997
    const denominatorB = inputReserveB * 1000 + inputAmountB * 997
    const outputAmountB = numeratorB / denominatorB
    console.log('outputAmountB weth=====', outputAmountB);

    const DAI = new Token(ChainId.KOVAN, token0Address, 18)

    // note that you may want/need to handle this async code differently,
    // for example if top-level await is not an option
    const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])
    console.log('pair=====', pair);
    const route = new Route([pair], WETH[DAI.chainId])

    const amountIn = '1000000000000000000' // 1 WETH

    const trade = new Trade(route, new TokenAmount(WETH[DAI.chainId], amountIn), TradeType.EXACT_INPUT)

    const IUniswapV2Router02Contract = new web3.eth.Contract(IUniswapV2Router02ABI, IUniswapV2Router02Address);
    console.log('IUniswapV2Router02Contract======', IUniswapV2Router02Contract);
    const erc20ContractInstance2 = await getERCContractInstance(web3);
    // const approve = await erc20ContractInstance2.methods.approve(IUniswapV2Router02Address, "1000000000000000000000000000").send({ from: account });
    // console.log('approve====', approve);
    const allowance = await erc20ContractInstance2.methods.allowance(account, IUniswapV2Router02Address).call();
    console.log('allowance======', allowance);

    const transactionHash = await IUniswapV2Router02Contract.methods.swapExactTokensForTokens(
      "10000000",
      "0",
      [token0Address, token1Address],
      account,
      1605336306
    ).send({ from: account });
    console.log('transactionHash=======', transactionHash);

    console.log('trade=====', trade);

    

  }

  onAddLiquidityClick = async () => {
    const [account] = await web3.eth.getAccounts();
    const IUniswapV2Router02Contract = new web3.eth.Contract(IUniswapV2Router02ABI, IUniswapV2Router02Address);
    const addLiquidityTransactionHash = await IUniswapV2Router02Contract.methods.addLiquidity(
      token0Address,
      token1Address,
      '100000000000000000',
      '1070700000000000',
      '10000000000000000',
      '100000000000000',
      account,
      '1704470183',
    ).send({ from: account });
    console.log('addLiquidityTransactionHash======', addLiquidityTransactionHash);
  }

  onRemoveLiquidityClick = async () => {
    const [account] = await web3.eth.getAccounts();
    const IUniswapV2Router02Contract = new web3.eth.Contract(IUniswapV2Router02ABI, IUniswapV2Router02Address);
    // const erc20ContractInstance2 = await getERCContractInstance(web3);
    // const approve = await erc20ContractInstance2.methods.approve(IUniswapV2Router02Address, "1000000000000000000000000000").send({ from: account });
    // console.log('approve====', approve);
    const removeLiquidityTransactionHash = await IUniswapV2Router02Contract.methods.removeLiquidity(
      token0Address,
      token1Address,
      '10000000000000000',
      '0',
      '0',
      account,
      '1704470183',
    ).send({ from: account });
    console.log('removeLiquidityTransactionHash======', removeLiquidityTransactionHash);
  }
  
  render() {
    return (
      <div>
        <h2>Uniswap Swapping</h2>
        <div>
          <div>DAI - WETH</div>
          <div>DAI to WETH </div>
          <button onClick={() => this.onSwapClick()} >Swap</button>
          <br />
          <br />
          <div>DAI Balance: {this.state.token1Balance}</div>
          <div>WETH Balance: {this.state.token2Balance}</div>
          <br />
          <br />
          <button onClick={() => this.onAddLiquidityClick()}>Add Liquidity</button>
          <button onClick={() => this.onRemoveLiquidityClick()} style={{ marginLeft: "20px" }}>Remove Liquidity</button>
          <br />
          <br />
          <div>DAI - ETH Liquidity</div>
          <div>Your pool tokens: {this.state.totalLiquidity}</div>
          <div>Pooled DAI: {this.state.PooledToken0}</div>
          <div>Pooled ETH: {this.state.PooledToken1}</div>
        </div>
      </div>
    );
  }
}
// 0.212033945639275426

export default UniswapContainer;
