import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BLOVELY',
    lpAddresses: {
      97: '',
      56: '0xacC6D4bB383948E1a4e1DF35272E6936c3a4A201',
    },
    isTokenOnly: true,
    token: tokens.blovely,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'BLOVELY-BNB',
    lpAddresses: {
      97: '',
      56: '0xC680DCC0b7c588DfD2bdE19f543E37Dfd276ae31',
    },
    token: tokens.blovely,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BLOVELY-BUSD',
    lpAddresses: {
      97: '',
      56: '0xacC6D4bB383948E1a4e1DF35272E6936c3a4A201',
    },
    token: tokens.blovely,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BLOVELY-USDT',
    lpAddresses: {
      97: '',
      56: '0x5B8d590b63Cb5f0Cac7e1D4936bCd4e6526F54F8',
    },
    token: tokens.blovely,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
