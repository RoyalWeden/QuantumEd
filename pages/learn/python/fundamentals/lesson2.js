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
    let codeItem1 = "# Let's write this statement in a few ways\nstr1 = 'Lorem ipsum dolor sit amet, consectetur "
                    + "adipiscing elit. Praesent semper ac justo vitae viverra.'\nprint(str1)\n\n" +
                    "print()\n\n" + "# To separate these sentences on separate lines you can use three quotations\n" +
                    "str2 = '''Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent semper ac justo vitae viverra.'''" +
                    "\nprint(str2)\n\nprint()\n\n# You can also use \\n, an escape sequence, to create a new line\n" +
                    "str3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nPraesent semper ac justo vitae viverra.'" +
                    "\nprint(str3)\n\nprint()\n\n# To combine strings, you can use a plus sign\nstr4 = 'Lorem ipsum dolor sit amet, " +
                    "consectetur adipiscing elit.' + ' Praesent semper ac justo vitae viverra'\nprint(str4)"

    let codeItem2 = ""
    return (
        <Layout>
            <Container maxW='container.lg'>
                <Heading as='h1' fontSize={60}>
                    Data Types
                </Heading>
                <Section>
                    <P>
                        Variables can be set to many different types of data besides just numbers and strings. Some of the most common
                        data types are <Code>str</Code>, stands for string, <Code>int</Code>, stands for integer, <Code>float</Code>,
                        stands for a number with a floating point, <Code>list</Code>, <Code>tuple</Code>, <Code>range</Code>, <Code>dict</Code>,
                        stands for dictionary, and <Code>bool</Code>, which stands for boolean.
                    </P>
                </Section>
                <Divider my={10} />
                <Section>
                    <Heading as='h2' fontSize={35}>
                        Type: str
                    </Heading>
                    <P>
                        Strings contain text. They will print exactly what you type. However, here are a few tricks you can use
                        to type them in different ways depending on your use for them.
                    </P>
                    <DynamicCodeItem input={codeItem1} inputHeight='500px' ruiHeight='250px' />
                </Section>
                <Section>
                    <Heading as='h2' fontSize={35}>
                        Type: int and float
                    </Heading>
                    <P>
                        Integers are numbers without decimals that can range from -2147483648 to 2147483647. Floats have a 
                        greater range from 1.8 x 10<sup>-308</sup> to 1.8 x 10<sup>308</sup>. Since Python dynamically changes variable
                        types, it&apos;s not necessary to specify which you are using.
                    </P>
                    <DynamicCodeItem input={codeItem2} inputHeight='250px' ruiHeight='100px' />
                </Section>
                <LessonNav
                    leftHref='/learn/python/fundamentals/lesson1'
                    leftText='Variables'
                    // rightHref='/learn/python/fundamentals/lesson3'
                    // rightText='Next Lesson'
                />
            </Container>
        </Layout>
    )
}

export default PythonFundL1