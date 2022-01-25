import {
    Heading,
    Link,
    Container,
    Divider,
    // Box
} from '@chakra-ui/react'
import P from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const About = () => {
    return (
        <Layout title="About">
            <Container maxW='container.md'>
                <Section delay={0.1}>
                    <Heading as="h1" fontSize={60} align="center" mb={40}>
                        About QuantumEd
                    </Heading>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h2" fontSize={40} mb={5} variant="section-title">
                        A Brief Background
                    </Heading>
                    <P>
                        Quantum computing is getting closer and closer to fruition. The <Link href="https://www.quantum.gov/" textDecoration="underline" isExternal>
                        National Quantum Initiative Act</Link>, passed in 2018, has so far been able to provide suggestions to reach greater innovations
                        and developments in quantum information science and technology in the United States. Through this act, the United States
                        was able to stay on a level playing field with adversarial nations, including China, Germany, Canada, India, France, Russia, Japan,
                        and others.
                    </P>
                    <P>
                        However, today, it seems that China may have surpassed the United States in this technology. Not only does this put the
                        United States in a game of catch-up, but also, this manifests a national security threat. Quantum computing has the potential
                        to be used in warfighting technology. This may include, but not limited to, quantum radar that can threaten U.S. stealth
                        technology, submarine detection that can counter US nuclear-powered attack submarines, and impenetrable military
                        telecommunications that will leave the U.S. unable to maintain its present level of surveilance.
                    </P>
                    <P>
                        Several years ago the{" "}
                        <Link href="https://www.congress.gov/bill/117th-congress/house-bill/1837/text" textDecoration="underline" isExternal>Quantum User
                        Expansion for Science and Technology (QUEST) Act</Link> was introduced, however, it was never passed by Congress. This QUEST Act
                        would have brought $340 million over the course of five years to quantum R&D. Without this necessary investment, the U.S. will be
                        unable to stay ahead in the quantum race.
                    </P>
                </Section>
                <Divider my={30} />
                <Section delay={0.6}>
                    <Heading as="h2" fontSize={40} mb={5} variant="section-title">
                        QuantumEd&apos;s Goal
                    </Heading>
                    <P>
                        QuantumEd is to help support the passing of acts in quantum computing, including the QUEST Act. To gain a lead in quantum
                        it is necessary to enhance quantum computing research, educate the future quantum workforce, and speed up the
                        advancement of the core technology in the government and the private sector.
                    </P>
                    <P>
                        Furthmore, educating the future quantum workforce starts with students in middle and high school. This can be achieved by
                        introducing quantum computing courses relating to the mathematics, physics, or computer science aspect to students
                        in the public schooling system or through outside sources.
                    </P>
                </Section>
            </Container>
        </Layout>
    )
}

export default About