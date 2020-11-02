export const Tokens = [
  {
    chainId: 1,
    token_address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
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