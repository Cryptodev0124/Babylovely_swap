import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTotalValue } from 'state/farms/hooks'
// import { useGetStats } from 'hooks/api'
import { useTranslation } from 'contexts/Localization'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  min-height: 255px;
  box-shadow: 0px 0px 1px 3px rgb(127 30 36 / 80%) inset;
`

const CustomCardBody = styled(CardBody)`
  min-height:255px;
`;

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const tvl = useTotalValue()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CustomCardBody>
        <Heading size="lg" mb="24px" color="#b95244">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {tvl ? (
          <>
            <Text bold fontSize="54px" mb="20px">${tvl.toFixed(2)}</Text>
            <Text bold color="textSubtle">{t('Across all Farms and Pools')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CustomCardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
