// import NextLink from 'next/link'
import Image from 'next/image'
import {
    Box,
    Text,
    LinkBox,
    Link,
    LinkOverlay
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ResourceGridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <Link href={href} isExternal>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2} fontSize={30}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={20}>{children}</Text>
            </LinkBox>
        </Link>
    </Box>
)

export const PostGridItem = ({ children, href, date, timeRead, title, thumbnail }) => (
    <Box w="100%" align="center">
        <Text fontSize={12} color="gray.700">
            {date}
        </Text>
        <Link href={href} isExternal>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <Text fontSize={9} color="gray.500">
                    {timeRead}
                </Text>
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2} fontSize={30}>
                        {title}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Link>
        <Text fontSize={20} textAlign="justify">{children}</Text>
    </Box>
)

export const BadgeGridItem = ({ children, href, thumbnail, title }) => (
    <Box w="100%" align="center">
        <Link href={href} isExternal>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <Text fontSize={20}>{children}</Text>
            </LinkBox>
        </Link>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
            .grid-itme-thumbnail { 
                border-radius: 12px;
            }
        `}
    />
)