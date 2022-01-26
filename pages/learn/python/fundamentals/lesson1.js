import {
    Container,
    Divider,
    Heading,
    Code
} from '@chakra-ui/react'
import P from '../../../../components/paragraph'
import Section from '../../../../components/section'
import Layout from '../../../../components/layouts/article'
import dynamic from 'next/dynamic'
import React from 'react'
import { LessonNav } from '../../../../components/lesson-nav'

const DynamicCodeItem = dynamic(
    () => import('../../../../components/code-item'),
    { ssr: false }
)

const PythonFundL1 = () => {
    let codeItem1 = "var1 = 15\nvar2 = 'This is a variable.'\nprint(var1)\nprint(var2)"
    let codeItem2 = "# This is a comment that gets ignored when running code\n# Write notes or 'comments' in these for yourself and/or others"
                    + "\n\n# Write your variables\n\n\n# Print your variables\n"
    return (
        <Layout>
            <Container maxW='container.lg'>
                <Heading as='h1' fontSize={60}>
                    Variables
                </Heading>
                <Section>
                    <P>
                        Variables are for storing information through assignment. To create one, simply give your variable a name
                        and set it equal to a value (i.e. a string, number, dictionary, etc.). See and run the below example.
                    </P>
                    <DynamicCodeItem input={codeItem1} />
                    <P mt='5rem'>
                        The first statement <Code>var1 = 15</Code> creates a variable called <Code>var1</Code> and assigns it the
                        value of <Code>15</Code>, an integer. Then on line 3, <Code>var1</Code> is displayed through
                        a <Code>print</Code> statement.
                    </P>
                    <P>
                        The second statement <Code>var2 = &apos;This is a variable.&apos;</Code> creates a variable
                        called <Code>var2</Code> and assigns it the value of <Code>&apos;This is a variable.&apos;</Code>, a string.
                        Then on line 4, <Code>var2</Code> is displayed through
                        a <Code>print</Code> statement.
                    </P>
                </Section>
                <Divider my={20} />
                <Section>
                    <P>
                        Variables are essentially the buildings blocks of computer programming in any languange. They can be use to help with
                        computations or store information for a database
                    </P>
                    <P>
                        Now, try creating your own variables and then print them in the below code block.
                    </P>
                    <DynamicCodeItem input={codeItem2} />
                </Section>
                <LessonNav
                    leftHref='/learn'
                    leftText='Back to Learn'
                    rightHref='/learn/python/fundamentals/lesson2'
                    rightText='Data Types'
                />
            </Container>
        </Layout>
    )
}

export default PythonFundL1