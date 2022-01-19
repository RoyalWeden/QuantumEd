import { 
  Heading,
  Link,
  Container,
  Divider,
  Button,
  Box
} from '@chakra-ui/react'
import P from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'

const Home = () => {
  return (
    <Container>
      <Section>
        <Heading as="h2" variant="section-title">
          TOP RESOURCES
        </Heading>
        
      </Section>

      <Divider mt={5} mb={5} />

      <Section delay={0.3}>
        <P>
          In contrast to our computers today use "bits" that can be
          represented as a 0 or 1. However, quantum computers store
          and process information with "quantum bits", or "qubits",
          that can be represented as a 0, 1, or both at the same time.
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