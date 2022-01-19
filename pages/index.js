import { 
  Heading,
  Link,
  Container,
  Divider,
  Button,
  Box,
  SimpleGrid
} from '@chakra-ui/react'
import P from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { ResourceGridItem } from '../components/grid-item'

import thumbQuest from '../public/images/content/topresources/BillQUEST.png'
import thumbNqi from '../public/images/content/topresources/NQIsite.png'

const Home = () => {
  return (
    <Container>
      <Section>
        <Heading as="h2" variant="section-title">
          TOP RESOURCES
        </Heading>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={8}>
          <ResourceGridItem
            title="Quantum User Expansion for Science and Technology Program Bill"
            thumbnail={thumbQuest}
            href="https://www.congress.gov/bill/116th-congress/house-bill/8303"
          />
          <ResourceGridItem
            title="National Quantum Initiative Program"
            thumbnail={thumbNqi}
            href="https://www.quantum.gov/"
          />
        </SimpleGrid>
      </Section>

      <Divider mt={5} mb={5} />

      <Section delay={0.3}>
        <P>
          In contrast to our computers today that use &quot;bits&quot;,
          represented as a 0&apos;s or 1&apos;s, quantum computers store
          and process information with &quot;quantum bits&quot;, or
          &quot;qubits&quot;, that can be represented as a 0&apos;s,
          1&apos;s, or both at the same time.
        </P>
        <P>
          This not only brings the possibility of exponential speedups
          in computing, but also could allow seemingly unsolvable
          computing problems be solved with the power of quantum
          computers.
        </P>
        <Box align="center" my={5}>
          <Link href="/learn">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="blackAlpha"
              size="lg"
              variant="outline"
              fontSize={25}
            >
              Start Learning
            </Button>
          </Link>
        </Box>
      </Section>

      <Divider mt={5} mb={5} />
      
    </Container>
  )
}

export default Home