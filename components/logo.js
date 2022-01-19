import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 34px;
    display: inline-flex;
    align-items: center;
    height: 20px;
    line-height: 20px;
    padding: 10px;
    font-family: Dongle;

    &:hover img {
        transfrom: rotate(20deg);
    }
`

const Logo = () => {
    const logoImg = `/images/favicon/favicon.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logoImg} width={20} height={20} alt="QuantumEd Logo" />
                    <Text
                        color='grey.900'
                        fontWeight="bold"
                        fontFamily='Dongle'
                        ml={3}
                        mt={2}
                    >
                        QuantumEd
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo