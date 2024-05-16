import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useDeployerBalance } from 'hooks/useTokenBalance'
import { usePriceCakeBusd, useFarmFromPid } from 'state/farms/hooks'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  // margin-left: auto;
  // margin-right: auto;
  min-height: 255px;
  box-shadow: 0px 0px 1px 3px rgb(127 30 36 / 80%) inset;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()), 9)
  const deployerBalance = getBalanceNumber(useDeployerBalance(getCakeAddress()), 9)
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply, 9) - burnedBalance - deployerBalance : 0
  const blovelyPriceBusd = usePriceCakeBusd()
  const mcap = blovelyPriceBusd.times(cakeSupply)

  // const fetchFarm = async () => {
  //   const [totalAllocPoint, blovelyPerBlock] = await multicall(masterchefABI, [
  //         {
  //           address: getMasterChefAddress(),
  //           name: 'totalAllocPoint',
  //         },
  //         {
  //           address: getMasterChefAddress(),
  //           name: 'blovelyPerBlock',
  //         },
  //       ])  
  // } 
  const farm = useFarmFromPid(0)

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="20px" color="#b95244">
          {t('Baby Lovely Stats')}
        </Heading>
        <Row>
          <Text bold color="#fe4350" fontSize="16px">{t('Total Supply')}</Text>
          {getBalanceNumber(totalSupply, 9) && <CardValue color="#e23816 "  fontSize="16px" value={getBalanceNumber(totalSupply, 9)} />}
        </Row>
        <Row>
          <Text bold color="#fe4350" fontSize="16px">{t('Total Burned')}</Text>
          <CardValue color="#e23816 "  fontSize="16px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text bold color="#fe4350" fontSize="16px">{t('Circulating Supply')}</Text>
          {cakeSupply && <CardValue color="#e23816 " fontSize="16px" decimals={0} value={cakeSupply} />}
        </Row>
        <Row>
          <Text bold color="#fe4350" fontSize="16px">{t('Market Cap')}</Text>
          <CardValue color="#e23816 "  fontSize="16px" decimals={6} value={mcap.toNumber()} />
        </Row>
        <Row>
          <Text bold color="#fe4350" fontSize="16px">{t('Rewards BLOVELY/block')}</Text>
          <CardValue color="#e23816 "  fontSize="16px" decimals={2} value={Number(farm.blovelyPerBlock)} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
