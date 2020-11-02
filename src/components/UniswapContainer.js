import React, { Component } from 'react';
import { ChainId, Token, Pair, WETH, TokenAmount, Fetcher, Route, Trade, TradeType, Percent } from '@uniswap/sdk';

import { Tokens, factoryABI, factory } from './Tokens';

class UniswapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token1: 'DAI',
      token2: 'WETH',
    };
  }

  getPair = async (DAI) => {
    const pairAddress = Pair.getAddress(DAI, WETH[DAI.chainId]);
    console.log('pairAddress=====', pairAddress);
    const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])
    // const reserves = [/* use pairAddress to fetch reserves here */];
    // const [reserve0, reserve1] = reserves;

    // const tokens = [DAI, WETH.chainId];
    // const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]];

    // const pair = new Pair(new TokenAmount(token0, reserve0), new TokenAmount(token1, reserve1));
    return pair;
  }
  
  onSwapClick = async () => {
    console.log('onSwapClick=====');
    const chainId = ChainId.MAINNET;
    const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // must be checksummed
    const decimals = 18;
    const DAI = new Token(chainId, tokenAddress, decimals);
    const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])
    // const pair = await this.getPair(DAI);
    console.log('pair======', pair);
    const route = new Route([pair], WETH[DAI.chainId]);

    const amountIn = '1000000000000000000';

    const trade = new Trade(route, new TokenAmount(WETH[DAI.chainId], amountIn), TradeType.EXACT_INPUT);
    const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%
    
    const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw // needs to be converted to e.g. hex
    const path = [WETH[DAI.chainId].address, DAI.address]
    const to = '0x55E73A69B2315A6e7192af118705079Eb1dB2184' // should be a checksummed recipient address
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
    const value = trade.inputAmount.raw // // needs to be converted to e.g. hex
    console.log('value======', value);

    // console.log('route.midPrice.toSignificant(6)===', route.midPrice.toSignificant(6)); // 201.306
    // console.log('route.midPrice.invert().toSignificant(6)====', route.midPrice.invert().toSignificant(6)); // 0.00496756
  }
  
  render() {
    return (
      <div>
        <h2>Uniswap Swapping</h2>
        <div>
          <div>DAI - WETH</div>
          <div>100$ DAI to WETH </div>
          <button onClick={() => this.onSwapClick()} >Swap</button>
        </div>
      </div>
    );
  }
}

export default UniswapContainer;
