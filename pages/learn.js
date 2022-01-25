import {
    Container,
    // Box,
    Divider,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react'
import P from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import dynamic from 'next/dynamic'
import React from 'react'
import { LearnGridItem } from '../components/grid-item'

const DynamicCodeItem = dynamic(
    () => import('../components/code-item'),
    { ssr: false }
)

const Learn = () => {
    return (
        <Layout>
            <Container maxW='container.md'>
                <Section>
                    <Heading>
                        Python Fundamentals
                    </Heading>
                    <SimpleGrid columns={[1, 3, 4]}>
                        <LearnGridItem
                            href='/learn/python/fundamentals/lesson1'
                            title='Variables'
                        >
                            Learn the basics of variables.
                        </LearnGridItem>
                    </SimpleGrid>
                    <Divider my={10} />
                    <SimpleGrid columns={3}>
                        <LearnGridItem
                                href='/learn/python/playground'
                                title='Python Playground'
                            >
                                Test Python scripts and run code.
                        </LearnGridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Learn