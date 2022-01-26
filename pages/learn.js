import {
    Box,
    Code,
    Container,
    // Box,
    Divider,
    Heading,
    SimpleGrid,
    Text
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import React, { useState, useEffect } from 'react'
import { LearnGridItem } from '../components/grid-item'

const Learn = () => {
    const [quantumWord, setQuantumWord] = useState('')
    const [quantumDefinition, setQuantumDefinition] = useState('')

    useEffect(() => {
        fetch('https://quantumwords.herokuapp.com/api/v1/word/random')
        .then(res => res.json())
        .then((data) => {
            if(data.status == 'success') {
                setQuantumWord(data.data.word)
                setQuantumDefinition(data.data.definition)
            }
        })
    }, [])

    return (
        <Layout>
            <Container maxW='container.md'>
                <Section>
                    <Box borderWidth='1px' borderRadius='lg'>
                        <Box align='center'>
                        <Heading as={Code} size='lg' fontSize={40}>
                            {quantumWord}
                        </Heading>
                        </Box>
                        <Box p='5'>
                            <Text lineHeight='1'>
                                {quantumDefinition}
                            </Text>
                        </Box>
                    </Box>
                </Section>
                <Divider my={10} />
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