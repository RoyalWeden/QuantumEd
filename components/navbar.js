import NextLink from 'next/link'
import Logo from './logo'
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
    Spacer,
    Icon
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
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                
                <Spacer />
                
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
                    <Spacer />
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <Spacer />
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <Spacer />
                    <a href="https://github.com/RoyalWeden/QuantumEd" target="_blank">
                        <Button variant="ghost" colorScheme="#abdbe3" leftIcon={<Icon as={IoLogoGithub} />}>
                            Source
                        </Button>
                    </a>
                    <Spacer />
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
                                <MenuItem as={Link} href="https://github.com/RoyalWeden/QuantumEd" target="_blank">
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