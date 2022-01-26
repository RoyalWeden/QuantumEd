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
import React, { useEffect } from 'react'
import { LearnGridItem } from '../components/grid-item'

const Learn = () => {
    useEffect(() => {
        if (typeof window === 'object') { // Makes sure that 'document' can be used
            const quantumWord = document.getElementById('quantum-word')
            const quantumDefinition = document.getElementById('quantum-definition')
            fetch('https://quantumwords.herokuapp.com/api/v1/word/random')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if(data.status == 'success') {
                    quantumWord.innerText = data.data.word
                    quantumDefinition.innerText = data.data.definition
                }
            })
        }
    }, [])

    return (
        <Layout>
            <Container maxW='container.md'>
                <Section id='quantum-word-section'>
                    <Box borderWidth='1px' borderRadius='lg'>
                        <Box align='center'>
                        <Heading as={Code} size='lg' fontSize={40} id='quantum-word'>
                        </Heading>
                        </Box>
                        <Box p='5'>
                            <Text lineHeight='1' id='quantum-definition'>
                            </Text>
                        </Box>
                    </Box>
                </Section>
                <Divider my={10} />
                <Section>
                    <Heading>
                        Python Fundamentals
                    </Heading>
                    <SimpleGrid columns={[1, 2, 4]} spacing='20px'>
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
                    <SimpleGrid columns={2}>
                        <LearnGridItem
                                href='/learn/python/playground'
                                title='Python Playground'
                                height='150px'
                            >
                                Create, test, and run Python scripts in a virtual code editor.
                        </LearnGridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Learn