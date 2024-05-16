import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: t('Games (soon)'),
    icon: 'PredictionsIcon',
    href: '/casino',
  },
  // {
  //   label: t('Lottery (soon)'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: t('NFT (soon)'),
    icon: 'NftIcon',
    href: '/igo',
  },
  {
    label: t('Join'),
    icon: 'TeamBattleIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/Baby_Lovely_Inu',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/Baby_Lovely_Inu',
      },
    ]
  },
  
  {
    label: t('Charts'),
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0xC680DCC0b7c588DfD2bdE19f543E37Dfd276ae31',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x04Df8C91FCcFd703cD15047bF6C1cE76D335C6cE',
      },
    ]
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Audit',
        href: 'https://www.babylovelyinu.com/Security-Audit.pdf',
      },
      {
        label: 'Doc',
        href: 'https://www.babylovelyinu.com/Whitepapers.pdf',
      },
      {
        label: 'Github',
        href: 'https://github.com/BabyLovelyInu',
      },
    ]
  },
  // {
  //   label: t('Join Our Farm'),
  //   icon: 'IfoIcon',
  //   href: '/bets',
  // },
]

export default config
