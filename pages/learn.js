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
import React from 'react'
import { LearnGridItem } from '../components/grid-item'

const Learn = () => {
    return (
        <Layout>
            <Container maxW='container.md'>
                <Section>
                    <Heading>
                        Python Fundamentals
                    </Heading>
                    <SimpleGrid columns={[1, 3, 4]} spacing='20px'>
                        <LearnGridItem
                            href='/learn/python/fundamentals/lesson1'
                            title='1. Variables'
                        >
                            Learn how to assign variables.
                        </LearnGridItem>
                        <LearnGridItem
                            href='/learn/python/fundamentals/lesson2'
                            title='2. Data Types'
                        >
                            Learn different types of Python data types.
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