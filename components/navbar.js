import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    IconButton,
    Button,
    Icon,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? '#abdbe3' : undefined}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg='#ffffff40'
            css={{ backdropFilter: 'blur(5px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.lg.md"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tigher'}>

                    </Heading>
                </Flex>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/learn" path={path}>
                        Learn
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="https://github.com/RoyalWeden/QuantumEd" path={path}>
                        <Button variant="ghost" colorScheme="#abdbe3" leftIcon={<Icon as={IoLogoGithub} />}>
                            Source
                        </Button>
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href="/learn" passHref>
                                    <MenuItem as={Link}>Learn</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                                <NextLink href="/about" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <MenuItem as={Link} href="https://github.com/RoyalWeden/QuantumEd">
                                    <Button variant="ghost" colorScheme="#abdbe3" leftIcon={<Icon as={IoLogoGithub} />}>
                                        Source
                                    </Button>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar