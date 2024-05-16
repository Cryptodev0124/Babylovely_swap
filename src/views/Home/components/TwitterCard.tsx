import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { useTranslation } from 'contexts/Localization'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 428px;
  box-shadow: 0px 0px 1px 3px rgb(127 30 36 / 80%) inset;
`

const CustomCardBody = styled(CardBody)`
  margin-top:10px;
  min-height:300px;
`;

const TwitterCard = () => {
  const {t} = useTranslation()

  return (
    <StyledTwitterCard>
      <CustomCardBody>
        <Heading size="xl" mb="24px">
          {t('Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'Baby_Lovely_Inu'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter",
          }}
        />
      </CustomCardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
