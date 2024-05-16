import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls/farms'
import { useMasterchef } from './useContract'

export const useAllHarvests = (farmPids: number[]) => {
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvestFarm(masterChefContract, pid)]
    }, [])

    return Promise.all(harvestPromises)
  }, [farmPids, masterChefContract])

  return { onReward: handleHarvest }
}