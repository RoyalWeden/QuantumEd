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
    Text,
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
            bg='#E8e8e8'
            css={{ backdropFilter: 'blur(5px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={5}
                maxW="container.lg.md"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5} mt={{base: 4, md: 4}}>
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
                >
                    <LinkItem href="/learn" path={path}>
                        LEARN
                    </LinkItem>
                    <Spacer />
                    <LinkItem href="/posts" path={path}>
                        POSTS
                    </LinkItem>
                    <Spacer />
                    <LinkItem href="/about" path={path}>
                        ABOUT
                    </LinkItem>
                    <Spacer />
                    <a href="https://github.com/RoyalWeden/QuantumEd" target="_blank">
                        <Button variant="ghost" colorScheme="#abdbe3" leftIcon={<Icon width={6} height={6} as={IoLogoGithub} />}>
                            <Text mt={1} fontSize={20}>
                                SOURCE
                            </Text>
                        </Button>
                    </a>
                    <Spacer />
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} mt={1} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon width={10} height={10} />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>HOME</MenuItem>
                                </NextLink>
                                <NextLink href="/learn" passHref>
                                    <MenuItem as={Link}>LEARN</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>POSTS</MenuItem>
                                </NextLink>
                                <NextLink href="/about" passHref>
                                    <MenuItem as={Link}>ABOUT</MenuItem>
                                </NextLink>
                                <MenuItem as={Link} href="https://github.com/RoyalWeden/QuantumEd" target="_blank">
                                    <Button variant="ghost" colorScheme="#abdbe3" leftIcon={<Icon width={6} height={6} as={IoLogoGithub} />}>
                                        <Text mt={1} fontSize={20}>
                                            SOURCE
                                        </Text>
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