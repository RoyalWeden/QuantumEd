import {
    Container,
    Box,
    Link,
    Divider,
    Heading,
    SimpleGrid,
    Button 
} from '@chakra-ui/react'
import P from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { PostGridItem } from '../components/grid-item'

import thumbMultiQubitCircuits from '../public/images/content/posts/multi-qubitcircuits.png'
import thumbTwoApplicationsOfQuantumComputing from '../public/images/content/posts/twoapplicationsofquantumcomputing.jpeg'
import thumbQuantumReversibilityAndPhase from '../public/images/content/posts/quantumreversibilityandphase.jpg'
import thumbEavesdroppingQuantumKeyDistribution from '../public/images/content/posts/eavesdroppingquantumkeydistribution.jpeg'
import thumbQuantumKeyDistributionForCybersecurity from '../public/images/content/posts/quantumkeydistributionforcybersecurity.jpeg'
import thumbQubitsInQuantumComputers from '../public/images/content/posts/qubitsinquantumcomputers.jpeg'
import thumbMathematicsForQuantumMeasurement from '../public/images/content/posts/mathematicsforquantummeasurement.jpeg'
import thumbMathematicsForQuantumGates from '../public/images/content/posts/mathematicsforquantumgates.jpeg'
import thumbMathematicsForQubits from '../public/images/content/posts/mathematicsforqubits.jpeg'
import thumbMeasuringQubitsAndTheZGate from '../public/images/content/posts/measuringqubitsandthezgate.jpg'
import thumbRepresentingStatesForQuantumComputing from '../public/images/content/posts/representingstatesforquantumcomputing.jpg'
import thumbWhatAreQuantumObjects from '../public/images/content/posts/whatarequantumobjects.jpeg'
import thumbWhatMakesUpTheQuantumWorld from '../public/images/content/posts/whatmakesupthequantumworld.jpg'
import thumbQuantumAndClassicalStacks from '../public/images/content/posts/quantumandclassicalstacks.jpeg'

const Posts = () => {
    return (
        <Layout>
            <Container>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={6} spacingY={30} align="center">
                    <PostGridItem
                        title="Multi-Qubit Circuits"
                        date="Jan. 17, 2022"
                        timeRead="2 minute read"
                        href="https://medium.com/@michael.kougang/multi-qubit-circuits-e24c971cb76b"
                        thumbnail={thumbMultiQubitCircuits}
                    >
                        After learning about single-qubit gates and states, it will be much easier to learn about multi-qubit counterparts. One of the main types of multi-qubit gates are controlled gates. These differ from single-qubit gates because th...
                    </PostGridItem>
                    <PostGridItem
                        title="Two Applications of Quantum Computing"
                        date="Jan. 11, 2022"
                        timeRead="2 minute read"
                        href="https://medium.com/@michael.kougang/two-applications-of-quantum-computing-d21a8d4898a1"
                        thumbnail={thumbTwoApplicationsOfQuantumComputing}
                    >
                        As researchers are discovering new applications for quantum computing, currently we know of several useful applications. One of those is search and optimization. In this application, quantum computing can be used where...
                    </PostGridItem>
                    <PostGridItem
                        title="Quantum Reversibility and Phase"
                        date="Dec. 16, 2021"
                        timeRead="3 minute read"
                        href="https://medium.com/@michael.kougang/quantum-reversibility-and-phase-a9a0da144c94"
                        thumbnail={thumbQuantumReversibilityAndPhase}
                    >
                        Compared to classical computing, reversibility and phase are unique to quantum computing. Reversibility...
                    </PostGridItem>
                    <PostGridItem
                        title="Eavesdropping Quantum Key Distribution"
                        date="Dec. 16, 2021"
                        timeRead="3 minute read"
                        href="https://medium.com/system-weakness/eavesdropping-quantum-key-distribution-ce82f8468e17"
                        thumbnail={thumbEavesdroppingQuantumKeyDistribution}
                    >
                        The goal of Quantum Key Distribution (QKD) is to ensure you are having secure and private communication with the recipient. The benefit of QKD is that this can be detected and verified. Adding Eve — The “Eve”sdropper...
                    </PostGridItem>
                    <PostGridItem
                        title="Quantum Key Distribution for Cybersecurity"
                        date="Dec. 8, 2021"
                        timeRead="4 minute read"
                        href="https://medium.com/@michael.kougang/quantum-key-distribution-for-cybersecurity-19b8da07fc23"
                        thumbnail={thumbQuantumKeyDistributionForCybersecurity}
                    >
                        If you’ve been in the cyberspace for a while, you may have heard that instant messaging services, like iMessages, WhatsApp, Telegram, and Facebook Messenger, have something called end-to-end encryption. This...
                    </PostGridItem>
                    <PostGridItem
                        title="Qubits in Quantum Computers"
                        date="Dec. 1, 2021"
                        timeRead="2 minute read"
                        href="https://medium.com/@michael.kougang/qubits-in-quantum-computers-25d210f445f6"
                        thumbnail={thumbQubitsInQuantumComputers}
                    >
                        We keep saying that quantum computers will provide us with an exponential speedup for computing and increase storage space compared to traditional/classical systems we use today. How can we visualize this...
                    </PostGridItem>
                    <PostGridItem
                        title="Mathematics for Quantum Measurement"
                        date="Nov. 18, 2021"
                        timeRead="2 minute read"
                        href="https://medium.com/@michael.kougang/mathematics-for-quantum-measurement-49ce703d521f"
                        thumbnail={thumbMathematicsForQuantumMeasurement}
                    >
                        In any quantum circuit, the final step is to measure the qubits. As presented before, there are two critical properties of quantum measurements. By observing/measuring a quantum state, we can change it. The outcome of...
                    </PostGridItem>
                    <PostGridItem
                        title="Mathematics for Quantum Gates"
                        date="Nov. 10, 2021"
                        timeRead="3 minute read"
                        href="https://medium.com/@michael.kougang/mathematics-for-quantum-gates-5c460b2b075f"
                        thumbnail={thumbMathematicsForQuantumGates}
                    >
                        Once you realize that linear algebra is just a sprinkle of algebra with matrices and vectors, it’s not that scary. Back to the Quantum Stack, the next level up from qubits is quantum gates. These allow you to manipulat...
                    </PostGridItem>
                    <PostGridItem
                        title="Mathematics for Qubits"
                        date="Oct. 31, 2021"
                        timeRead=""
                        href="https://medium.com/@michael.kougang/mathematics-for-qubits-f77d3b34c82a"
                        thumbnail={thumbMathematicsForQubits}
                    >
                        When many people hear the word “math,” they think it is some formidable and intimidating task. Don’t worry, to understand quantum computing, you don’t need to have taken the most advanced calculus course in school...
                    </PostGridItem>
                    <PostGridItem
                        title="Measuring Qubits and the Z Gate"
                        date="Oct. 27, 2021"
                        timeRead="2 minute read"
                        href="https://medium.com/@michael.kougang/measuring-qubits-and-the-z-gate-85e25b58d6e"
                        thumbnail={thumbMeasuringQubitsAndTheZGate}
                    >
                        As introduced earlier, the X and H gates are very important in quantum computing because they allow us to flip qubits and put them into equal superposition. However, the Z gate is just as important. Z Gate As the gat...
                    </PostGridItem>
                    <PostGridItem
                        title="Representing States for Quantum Computing"
                        date="Oct. 20, 2021"
                        timeRead="4 minute read"
                        href="https://medium.com/@michael.kougang/representing-states-for-quantum-computing-79d116fc0823"
                        thumbnail={thumbRepresentingStatesForQuantumComputing}
                    >
                        In the previous two articles, I talked about Quantum Mechanics. Let’s review two of the properties with an example: finding the exit of a maze. Through superposition, we can use qubits to examine all possibilities at...
                    </PostGridItem>
                    <PostGridItem
                        title="What are Quantum Objects?"
                        date="Oct. 12, 2021"
                        timeRead="4 minute read"
                        href="https://medium.com/@michael.kougang/what-are-quantum-objects-c0f6f27e18b2"
                        thumbnail={thumbWhatAreQuantumObjects}
                    >
                        To answer the title, it is important to understand the behaviors of objects in the classical world. The two possible objects are waves and particles, through which we can explain classical physics. So should we use the rul...
                    </PostGridItem>
                    <PostGridItem
                        title="What Makes Up The Quantum World"
                        date="Oct. 5, 2021"
                        timeRead="5 minute read"
                        href="https://medium.com/@michael.kougang/what-makes-up-the-quantum-world-ef66fefd68f2"
                        thumbnail={thumbWhatMakesUpTheQuantumWorld}
                    >
                        Quantum Mechanics To give a simple definition, quantum mechanics is the study of motion and interaction of really small objects. Now, by really small objects, this doesn’t mean a golf ball or a speck of dust, this means object...
                    </PostGridItem>
                    <PostGridItem
                        title="Quantum and Classical Stacks"
                        date="Sep. 26, 2021"
                        timeRead="3 minute read"
                        href="https://medium.com/@michael.kougang/quantum-and-classical-stacks-a98f7008813a"
                        thumbnail={thumbQuantumAndClassicalStacks}
                    >
                        The Stacks Both in classical and quantum computers, they have their own stack that they work on. There are many general similarities, but when it comes down to how they work on the lowest level, they are very different...
                    </PostGridItem>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Posts