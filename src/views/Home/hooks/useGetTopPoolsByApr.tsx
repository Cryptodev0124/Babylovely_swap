import { useState, useEffect } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import { useFarms, usePriceCakeBusd } from 'state/farms/hooks'
import { useAppDispatch } from 'state'
import { fetchFarmsPublicDataAsync, nonArchivedFarms } from 'state/farms'
import { getFarmApr } from 'utils/apr'
import BigNumber from 'bignumber.js'
import { orderBy } from 'lodash'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { Farm } from 'state/types'

enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  FETCHING = 'fetching',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useGetTopPoolsByApr = (isIntersecting: boolean) => {
  const dispatch = useAppDispatch()
  const { data: farms } = useFarms()
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.NOT_FETCHED)
  const [topPools, setTopPools] = useState<FarmWithStakedValue[]>([null, null, null, null, null])
  const cakePriceBusd = usePriceCakeBusd()

  useEffect(() => {
    const fetchFarmData = async () => {
      setFetchStatus(FetchStatus.FETCHING)
      const activePools = nonArchivedFarms.filter((farm) => (farm.multiplier !== '0X' && farm.isTokenOnly === true))
      try {
        await dispatch(fetchFarmsPublicDataAsync(activePools.map((farm) => farm.pid)))
        setFetchStatus(FetchStatus.SUCCESS)
      } catch (e) {
        console.error(e)
        setFetchStatus(FetchStatus.FAILED)
      }
    }

    if (isIntersecting && fetchStatus === FetchStatus.NOT_FETCHED) {
      fetchFarmData()
    }
  }, [dispatch, setFetchStatus, fetchStatus, topPools, isIntersecting])

  useEffect(() => {
    const getTopPoolsByApr = (farmsState: Farm[]) => {
      const farmsWithPrices = farmsState.filter((farm) => farm.lpTotalInQuoteToken && farm.quoteToken.busdPrice  && farm.isTokenOnly === true)
      const farmsWithApr: FarmWithStakedValue[] = farmsWithPrices.map((farm) => {
        const totalLiquidity = farm.isTokenOnly ? new BigNumber(farm.lpTotalInQuoteToken).times(farm.token.busdPrice) : new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
        const { cakeRewardsApr, lpRewardsApr } = getFarmApr(
          new BigNumber(farm.poolWeight),
          cakePriceBusd,
          totalLiquidity,
          farm.lpAddresses[ChainId.MAINNET],
          new BigNumber(farm.blovelyPerBlock),
        )
      
        return { ...farm, apr: cakeRewardsApr, lpRewardsApr }
      })

      const sortedByApr = orderBy(farmsWithApr, (farm) => farm.apr, 'desc')
      setTopPools(sortedByApr.slice(0, 5))
    }

    if (fetchStatus === FetchStatus.SUCCESS && !topPools[0]) {
      getTopPoolsByApr(farms)
    }
  }, [setTopPools, farms, fetchStatus, cakePriceBusd, topPools])

  return { topPools }
}

export default useGetTopPoolsByApr
