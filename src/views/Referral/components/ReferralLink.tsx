import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Input, Heading, Button, Card, CardBody, CardFooter, Link, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import rot13 from '../../../utils/encode'

const StyleInput = styled(Input)`
    margin-top: 10px;
`

const ReferralLink = () => {
    const { account } = useWeb3React()
    const [toasts, setToasts] = useState([]);

    const handleClick = (description = "") => {
        const now = Date.now();
        const randomToast = {
        id: `id-${now}`,
        title: `Copied`,
        description,
        type: "success",
        };

        setToasts((prevToasts) => [randomToast, ...prevToasts]);
    };

    const handleRemove = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
    };

    
const StyledLink = styled(Link)`
cursor: pointer;
`

const StyledFooter = styled(CardFooter)`

min-height: 100px;
`

const StyledButton = styled(Button)`
color: ${(props) => props.theme.colors.primary};
background-color: transparent;
border: 2px solid ${(props) => props.theme.colors.primary};
border-radius: 16px;
font-size: 16px;
font-weight: 600;
height: 32px;
padding: 0px 16px;
opacity: 1;

&:hover {
    background-color: transparent !important;
    opacity: 0.8;
}

&:focus {
    box-shadow: none;
}
`

const Container = styled.div`
display: flex;
justify-content: space-between;
`

    return (
        <div>
            {/* <Heading size="md">Your Referral Link</Heading>
            <StyleInput type="text" scale="md" value={`https://app.lambofinance.farm/?ref=${rot13(account)}`} readOnly />
            <CopyToClipboard text={`https://app.lambofinance.farm/?ref=${rot13(account)}`} onCopy={()=> {handleClick()}}>
                <Button variant="primary" mt="8px">Copy</Button>
            </CopyToClipboard>
             */}

                <CardBody>
                    <Container>
                         <Heading size="md">Your Referral Link</Heading>
                         {/* <CopyToClipboard text={`https://polycherry.com/?ref=${rot13(account)}`} onCopy={()=> {handleClick()}}> */}
                         <CopyToClipboard text={`https://babylovelyswap.finance/?ref=${rot13(account)}`} onCopy={()=> {handleClick()}}>
                            <Button variant="primary" mt="8px">Copy</Button>
                        </CopyToClipboard>
                    </Container>
                </CardBody>
                <StyledFooter >
                    {/* <StyledLink style={{"margin":"auto"}}>{`https://polycherry.com/?ref=${rot13(account)}`}</StyledLink> */}
                    <StyledLink style={{"margin":"auto"}}>{`https://babylovelyswap.finance/?ref=${rot13(account)}`}</StyledLink>
                </StyledFooter>
            {/* <ToastContainer toasts={toasts} onRemove={handleRemove} /> */}
        </div>
    )

}

export default ReferralLink

