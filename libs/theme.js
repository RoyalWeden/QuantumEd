import { extendTheme } from '@chakra-ui/react'

const styles = {
    global: props => ({
        body: {
            fontFamily: 'Dongle',
            fontSize: 25,
            bg: '#ffffff'
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                fontFamily: 'Dongle',
                fontSize: 55,
                textDecoration: 'underline',
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: '#3d7aed',
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Dongle'",
}

const colors = {
    glassTeal: '#88ccca'
}

const theme = extendTheme({
    styles,
    components,
    fonts,
    colors
})

export default theme