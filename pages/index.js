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
import { ResourceGridItem, BadgeGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbQuest from '../public/images/content/topresources/BillQUEST.png'
import thumbNqi from '../public/images/content/topresources/NQIsite.png'
import thumbQ12 from '../public/images/content/topresources/Q12Edu.png'
import thumbQiskitText from '../public/images/content/topresources/QiskitTextbook.png'
import thumbQxQ from '../public/images/content/topresources/QubitByQubit.png'

import thumbOSTP from '../public/images/content/agencies/OSTP.png'
import thumbOMB from '../public/images/content/agencies/OMB.png'
import thumbUSAF from '../public/images/content/agencies/USAF.png'
import thumbUSA from '../public/images/content/agencies/USA.png'
import thumbDARPA from '../public/images/content/agencies/DARPA.png'
import thumbDOD from '../public/images/content/agencies/DOD.png'
import thumbDOE from '../public/images/content/agencies/DOE.png'
import thumbFBI from '../public/images/content/agencies/FBI.png'
import thumbDHS from '../public/images/content/agencies/DHS.png'
import thumbDOS from '../public/images/content/agencies/DOS.png'
import thumbIARPA from '../public/images/content/agencies/IARPA.png'
import thumbNASA from '../public/images/content/agencies/NASA.png'
import thumbNSA from '../public/images/content/agencies/NSA.png'
import thumbNSF from '../public/images/content/agencies/NSF.png'
import thumbNIST from '../public/images/content/agencies/NIST.png'
import thumbUSN from '../public/images/content/agencies/USN.png'
import thumbDNI from '../public/images/content/agencies/DNI.png'
import thumbUSDA from '../public/images/content/agencies/USDA.png'
import thumbUSGS from '../public/images/content/agencies/USGS.png'
import thumbUSPTO from '../public/images/content/agencies/USPTO.png'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Section>
          <Heading as="h1" variant="section-title">
            TOP RESOURCES
          </Heading>
          <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={8} spacingY={10} alignItems="center">
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
            <ResourceGridItem
              title="National Q-12 Education Partnership"
              thumbnail={thumbQ12}
              href="https://www.q12education.org/"
            />
            <ResourceGridItem
              title="Qiskit Textbook Introduction"
              thumbnail={thumbQiskitText}
              href="https://qiskit.org/textbook-beta/course/introduction-course"
            />
            <ResourceGridItem
              title="The Coding School's Qubit by Qubit Initiative"
              thumbnail={thumbQxQ}
              href="https://www.qubitbyqubit.org/"
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

        <Section delay={0.6}>
          <Heading as="h2" variant="section-title">
            HOW YOU CAN HELP
          </Heading>
          <P>
            Reach out to any of the below government organizations to continue
            the United States&apos; development and innovation for quantum
            information science and technology.
          </P>
          <P>
            As the Quantum User Expansion for Science and Technology (QUEST) Program
            Bill has yet to been passed into law, feel free to contact government
            officials to help this move forward.
          </P>
          <SimpleGrid columns={{sm: 2, md: 4, lg: 6}} gap={4} spacingY={5} alignItems="center">
            <BadgeGridItem
              thumbnail={thumbOSTP}
              href="https://www.whitehouse.gov/ostp/"
              title="OSTP"
            />
            <BadgeGridItem
              thumbnail={thumbOMB}
              href="https://www.whitehouse.gov/omb/"
              title="OMB"
            />
            <BadgeGridItem
              thumbnail={thumbUSAF}
              href="https://www.af.mil/"
              title="USAF"
            />
            <BadgeGridItem
              thumbnail={thumbUSA}
              href="https://www.army.mil/"
              title="USA"
            />
            <BadgeGridItem
              thumbnail={thumbDARPA}
              href="https://www.darpa.mil/"
              title="DARPA"
            />
            <BadgeGridItem
              thumbnail={thumbDOD}
              href="https://www.defense.gov/"
              title="DOD"
            />
            <BadgeGridItem
              thumbnail={thumbDOE}
              href="https://www.energy.gov/"
              title="DOE"
            />
            <BadgeGridItem
              thumbnail={thumbFBI}
              href="https://www.fbi.gov/"
              title="FBI"
            />
            <BadgeGridItem
              thumbnail={thumbDHS}
              href="https://www.dhs.gov/"
              title="DHS"
            />
            <BadgeGridItem
              thumbnail={thumbDOS}
              href="https://www.state.gov/"
              title="DOS"
            />
            <BadgeGridItem
              thumbnail={thumbIARPA}
              href="https://www.iarpa.gov/"
              alt="IARPA"
            />
            <BadgeGridItem
              thumbnail={thumbNASA}
              href="https://www.nasa.gov/"
              title="NASA"
            />
            <BadgeGridItem
              thumbnail={thumbNSA}
              href="https://www.nsa.gov/"
              title="NSA"
            />
            <BadgeGridItem
              thumbnail={thumbNSF}
              href="https://nsf.gov/"
              title="NSF"
            />
            <BadgeGridItem
              thumbnail={thumbNIST}
              href="https://www.nist.gov/"
              title="NIST"
            />
            <BadgeGridItem
              thumbnail={thumbUSN}
              href="https://www.navy.mil/"
              title="USN"
            />
            <BadgeGridItem
              thumbnail={thumbDNI}
              href="https://www.dni.gov/"
              title="DNI"
            />
            <BadgeGridItem
              thumbnail={thumbUSDA}
              href="https://www.usda.gov/"
              title="USDA"
            />
            <BadgeGridItem
              thumbnail={thumbUSGS}
              href="https://www.usgs.gov/"
              title="USGS"
            />
            <BadgeGridItem
              thumbnail={thumbUSPTO}
              href="https://www.uspto.gov/"
              title="USPTO"
            />
          </SimpleGrid>
        </Section>
        
      </Container>
    </Layout>
  )
}

export default Home