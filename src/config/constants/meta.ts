import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BabyLovely',
  description:
    'The most popular AMM on BSC by user count! Earn BLOVELY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://babylovelyswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BabyLovelySwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BabyLovelySwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BabyLovelySwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BabyLovelySwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BabyLovelySwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BabyLovelySwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('BabyLovelySwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BabyLovelySwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BabyLovelySwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('BabyLovelySwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('BabyLovelySwap')}`,
      }
    default:
      return null
  }
}
