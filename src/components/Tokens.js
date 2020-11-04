export const Tokens = [
  {
    chainId: 1,
    token_address: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
    decimals: 18,
    symbol: 'DAI',
  }
]

// mainnet
export const factory = '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'

// testnets
export const ropsten = '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351'
export const rinkeby = '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36'
export const kovan = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30'
export const görli = '0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA'

export const factoryABI = [
  {
    name: 'NewExchange',
    inputs: [
      { type: 'address', name: 'token', indexed: true },
      { type: 'address', name: 'exchange', indexed: true }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'initializeFactory',
    outputs: [],
    inputs: [{ type: 'address', name: 'template' }],
    constant: false,
    payable: false,
    type: 'function',
    gas: 35725
  },
  {
    name: 'createExchange',
    outputs: [{ type: 'address', name: 'out' }],
    inputs: [{ type: 'address', name: 'token' }],
    constant: false,
    payable: false,
    type: 'function',
    gas: 187911
  },
  {
    name: 'getExchange',
    outputs: [{ type: 'address', name: 'out' }],
    inputs: [{ type: 'address', name: 'token' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 715
  },
  {
    name: 'getToken',
    outputs: [{ type: 'address', name: 'out' }],
    inputs: [{ type: 'address', name: 'exchange' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 745
  },
  {
    name: 'getTokenWithId',
    outputs: [{ type: 'address', name: 'out' }],
    inputs: [{ type: 'uint256', name: 'token_id' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 736
  },
  {
    name: 'exchangeTemplate',
    outputs: [{ type: 'address', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 633
  },
  {
    name: 'tokenCount',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 663
  }
]

export const exchangeABI = [
  {
    name: 'TokenPurchase',
    inputs: [
      { type: 'address', name: 'buyer', indexed: true },
      { type: 'uint256', name: 'eth_sold', indexed: true },
      { type: 'uint256', name: 'tokens_bought', indexed: true }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'EthPurchase',
    inputs: [
      { type: 'address', name: 'buyer', indexed: true },
      { type: 'uint256', name: 'tokens_sold', indexed: true },
      { type: 'uint256', name: 'eth_bought', indexed: true }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'AddLiquidity',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256', name: 'eth_amount', indexed: true },
      { type: 'uint256', name: 'token_amount', indexed: true }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'RemoveLiquidity',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256', name: 'eth_amount', indexed: true },
      { type: 'uint256', name: 'token_amount', indexed: true }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'Transfer',
    inputs: [
      { type: 'address', name: '_from', indexed: true },
      { type: 'address', name: '_to', indexed: true },
      { type: 'uint256', name: '_value', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'Approval',
    inputs: [
      { type: 'address', name: '_owner', indexed: true },
      { type: 'address', name: '_spender', indexed: true },
      { type: 'uint256', name: '_value', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'setup',
    outputs: [],
    inputs: [{ type: 'address', name: 'token_addr' }],
    constant: false,
    payable: false,
    type: 'function',
    gas: 175875
  },
  {
    name: 'addLiquidity',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'min_liquidity' },
      { type: 'uint256', name: 'max_tokens' },
      { type: 'uint256', name: 'deadline' }
    ],
    constant: false,
    payable: true,
    type: 'function',
    gas: 82605
  },
  {
    name: 'removeLiquidity',
    outputs: [
      { type: 'uint256', name: 'out' },
      { type: 'uint256', name: 'out' }
    ],
    inputs: [
      { type: 'uint256', name: 'amount' },
      { type: 'uint256', name: 'min_eth' },
      { type: 'uint256', name: 'min_tokens' },
      { type: 'uint256', name: 'deadline' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 116814
  },
  { name: '__default__', outputs: [], inputs: [], constant: false, payable: true, type: 'function' },
  {
    name: 'ethToTokenSwapInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'min_tokens' },
      { type: 'uint256', name: 'deadline' }
    ],
    constant: false,
    payable: true,
    type: 'function',
    gas: 12757
  },
  {
    name: 'ethToTokenTransferInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'min_tokens' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' }
    ],
    constant: false,
    payable: true,
    type: 'function',
    gas: 12965
  },
  {
    name: 'ethToTokenSwapOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_bought' },
      { type: 'uint256', name: 'deadline' }
    ],
    constant: false,
    payable: true,
    type: 'function',
    gas: 50455
  },
  {
    name: 'ethToTokenTransferOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_bought' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' }
    ],
    constant: false,
    payable: true,
    type: 'function',
    gas: 50663
  },
  {
    name: 'tokenToEthSwapInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_sold' },
      { type: 'uint256', name: 'min_eth' },
      { type: 'uint256', name: 'deadline' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 47503
  },
  {
    name: 'tokenToEthTransferInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_sold' },
      { type: 'uint256', name: 'min_eth' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 47712
  },
  {
    name: 'tokenToEthSwapOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'eth_bought' },
      { type: 'uint256', name: 'max_tokens' },
      { type: 'uint256', name: 'deadline' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 50175
  },
  {
    name: 'tokenToEthTransferOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'eth_bought' },
      { type: 'uint256', name: 'max_tokens' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 50384
  },
  {
    name: 'tokenToTokenSwapInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_sold' },
      { type: 'uint256', name: 'min_tokens_bought' },
      { type: 'uint256', name: 'min_eth_bought' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'token_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 51007
  },
  {
    name: 'tokenToTokenTransferInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_sold' },
      { type: 'uint256', name: 'min_tokens_bought' },
      { type: 'uint256', name: 'min_eth_bought' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' },
      { type: 'address', name: 'token_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 51098
  },
  {
    name: 'tokenToTokenSwapOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_bought' },
      { type: 'uint256', name: 'max_tokens_sold' },
      { type: 'uint256', name: 'max_eth_sold' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'token_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 54928
  },
  {
    name: 'tokenToTokenTransferOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_bought' },
      { type: 'uint256', name: 'max_tokens_sold' },
      { type: 'uint256', name: 'max_eth_sold' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' },
      { type: 'address', name: 'token_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 55019
  },
  {
    name: 'tokenToExchangeSwapInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_sold' },
      { type: 'uint256', name: 'min_tokens_bought' },
      { type: 'uint256', name: 'min_eth_bought' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'exchange_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 49342
  },
  {
    name: 'tokenToExchangeTransferInput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_sold' },
      { type: 'uint256', name: 'min_tokens_bought' },
      { type: 'uint256', name: 'min_eth_bought' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' },
      { type: 'address', name: 'exchange_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 49532
  },
  {
    name: 'tokenToExchangeSwapOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_bought' },
      { type: 'uint256', name: 'max_tokens_sold' },
      { type: 'uint256', name: 'max_eth_sold' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'exchange_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 53233
  },
  {
    name: 'tokenToExchangeTransferOutput',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'uint256', name: 'tokens_bought' },
      { type: 'uint256', name: 'max_tokens_sold' },
      { type: 'uint256', name: 'max_eth_sold' },
      { type: 'uint256', name: 'deadline' },
      { type: 'address', name: 'recipient' },
      { type: 'address', name: 'exchange_addr' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 53423
  },
  {
    name: 'getEthToTokenInputPrice',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [{ type: 'uint256', name: 'eth_sold' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 5542
  },
  {
    name: 'getEthToTokenOutputPrice',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [{ type: 'uint256', name: 'tokens_bought' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 6872
  },
  {
    name: 'getTokenToEthInputPrice',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [{ type: 'uint256', name: 'tokens_sold' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 5637
  },
  {
    name: 'getTokenToEthOutputPrice',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [{ type: 'uint256', name: 'eth_bought' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 6897
  },
  {
    name: 'tokenAddress',
    outputs: [{ type: 'address', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1413
  },
  {
    name: 'factoryAddress',
    outputs: [{ type: 'address', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1443
  },
  {
    name: 'balanceOf',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [{ type: 'address', name: '_owner' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1645
  },
  {
    name: 'transfer',
    outputs: [{ type: 'bool', name: 'out' }],
    inputs: [
      { type: 'address', name: '_to' },
      { type: 'uint256', name: '_value' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 75034
  },
  {
    name: 'transferFrom',
    outputs: [{ type: 'bool', name: 'out' }],
    inputs: [
      { type: 'address', name: '_from' },
      { type: 'address', name: '_to' },
      { type: 'uint256', name: '_value' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 110907
  },
  {
    name: 'approve',
    outputs: [{ type: 'bool', name: 'out' }],
    inputs: [
      { type: 'address', name: '_spender' },
      { type: 'uint256', name: '_value' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 38769
  },
  {
    name: 'allowance',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'address', name: '_owner' },
      { type: 'address', name: '_spender' }
    ],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1925
  },
  {
    name: 'name',
    outputs: [{ type: 'bytes32', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1623
  },
  {
    name: 'symbol',
    outputs: [{ type: 'bytes32', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1653
  },
  {
    name: 'decimals',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1683
  },
  {
    name: 'totalSupply',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1713
  }
]

export const tokenABI = [
  {
    name: 'Transfer',
    inputs: [
      { type: 'address', name: '_from', indexed: true },
      { type: 'address', name: '_to', indexed: true },
      { type: 'uint256', name: '_value', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'Approval',
    inputs: [
      { type: 'address', name: '_owner', indexed: true },
      { type: 'address', name: '_spender', indexed: true },
      { type: 'uint256', name: '_value', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: '__init__',
    outputs: [],
    inputs: [
      { type: 'bytes32', name: '_name' },
      { type: 'bytes32', name: '_symbol' },
      { type: 'uint256', name: '_decimals' },
      { type: 'uint256', name: '_supply' }
    ],
    constant: false,
    payable: false,
    type: 'constructor'
  },
  { name: 'deposit', outputs: [], inputs: [], constant: false, payable: true, type: 'function', gas: 74279 },
  {
    name: 'withdraw',
    outputs: [{ type: 'bool', name: 'out' }],
    inputs: [{ type: 'uint256', name: '_value' }],
    constant: false,
    payable: false,
    type: 'function',
    gas: 108706
  },
  {
    name: 'totalSupply',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 543
  },
  {
    name: 'balanceOf',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [{ type: 'address', name: '_owner' }],
    constant: true,
    payable: false,
    type: 'function',
    gas: 745
  },
  {
    name: 'transfer',
    outputs: [{ type: 'bool', name: 'out' }],
    inputs: [
      { type: 'address', name: '_to' },
      { type: 'uint256', name: '_value' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 74698
  },
  {
    name: 'transferFrom',
    outputs: [{ type: 'bool', name: 'out' }],
    inputs: [
      { type: 'address', name: '_from' },
      { type: 'address', name: '_to' },
      { type: 'uint256', name: '_value' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 110600
  },
  {
    name: 'approve',
    outputs: [{ type: 'bool', name: 'out' }],
    inputs: [
      { type: 'address', name: '_spender' },
      { type: 'uint256', name: '_value' }
    ],
    constant: false,
    payable: false,
    type: 'function',
    gas: 37888
  },
  {
    name: 'allowance',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [
      { type: 'address', name: '_owner' },
      { type: 'address', name: '_spender' }
    ],
    constant: true,
    payable: false,
    type: 'function',
    gas: 1025
  },
  {
    name: 'name',
    outputs: [{ type: 'bytes32', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 723
  },
  {
    name: 'symbol',
    outputs: [{ type: 'bytes32', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 753
  },
  {
    name: 'decimals',
    outputs: [{ type: 'uint256', name: 'out' }],
    inputs: [],
    constant: true,
    payable: false,
    type: 'function',
    gas: 783
  }
]

export const IUniswapV2Router02ABI = [
    {
      "inputs": [],
      "name": "WETH",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountADesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBDesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenDesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "addLiquidityETH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
        }
      ],
      "name": "getAmountIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
        }
      ],
      "name": "getAmountOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        }
      ],
      "name": "getAmountsIn",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        }
      ],
      "name": "getAmountsOut",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveB",
          "type": "uint256"
        }
      ],
      "name": "quote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidityETH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityETHWithPermit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityWithPermit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapETHForExactTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactETHForTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForETH",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapTokensForExactETH",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapTokensForExactTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

export const IUniswapV2Router02Address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

export const uniswapV2FactoryABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token0",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "pair",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "PairCreated",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allPairs",
    "outputs": [
      {
        "internalType": "address",
        "name": "pair",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "allPairsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
      }
    ],
    "name": "createPair",
    "outputs": [
      {
        "internalType": "address",
        "name": "pair",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "feeTo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "feeToSetter",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
      }
    ],
    "name": "getPair",
    "outputs": [
      {
        "internalType": "address",
        "name": "pair",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "setFeeTo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "setFeeToSetter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const uniswapV2FactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

export const DAI_WETH_ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

export function getERCContractInstance(web3) {
  let abi;
  abi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]';
  const address = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa';
  const jsonAbi = JSON.parse(abi);
  // alert(address);
  const contract = new web3.eth.Contract(jsonAbi, address);
  return contract;
}