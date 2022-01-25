import {
    Container,
    Heading,
} from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicCodeItem = dynamic(
    () => import('../../../components/code-item'),
    { ssr: false }
)

const PythonPlayground = () => {
    return (
        <Layout>
            <Container maxW='container.lg'>
                <Heading as='h1' fontSize={30}>
                    Python Playground
                </Heading>
                <DynamicCodeItem
                    inputHeight='360px'
                    ruiHeight='200px'
                />
            </Container>
        </Layout>
    )
}

export default PythonPlayground