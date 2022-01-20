import Link from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>

            <Divider my={10} />

            <Box my={10} align="center">
                <Link href="/" passHref>
                    <Button
                        colorScheme="blackAlpha"
                        rightIcon={<ChevronRightIcon />}
                        variant="outline"
                        fontSize={25}
                    >
                        Return Home
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default NotFound