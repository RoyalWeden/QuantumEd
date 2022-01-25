import {
    Button,
    Flex,
    Spacer,
    Link
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const LessonNav = ({ leftHref, rightHref, leftText, rightText }) => (
    <Flex>
        <Button
            leftIcon={<ChevronLeftIcon />}
            colorScheme="blackAlpha"
            size="lg"
            height='55px'
            variant="outline"
            fontSize={35}
        >
            <Link href={leftHref}>
                {leftText}
            </Link>
        </Button>
        <Spacer />
        <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="blackAlpha"
            size="lg"
            height='55px'
            variant="outline"
            fontSize={35}
        >
            <Link href={rightHref}>
                {rightText}
            </Link>
        </Button>
    </Flex>
)