import {
    Button,
    Flex,
    Spacer,
    Link,
    Divider
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const LessonNav = ({ leftHref, rightHref, leftText, rightText }) => {
    let leftNavButton;
    let rightNavButton;

    if(leftHref && leftText) {
        leftNavButton = (
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
        )
    }

    if(rightHref && rightText) {
        rightNavButton = (
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
        )
    }

    return (
        <>
            <Divider mt={10} mb={25} />
            <Flex>
                {leftNavButton}
                <Spacer />
                {rightNavButton}
            </Flex>
        </>
    )
}