import { extendTheme, ThemeConfig } from "@chakra-ui/react"


const config: ThemeConfig ={
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    colors: {
        gray: {
            50: '#ffe3ff',
            100: '#ffb3f1',
            200: '#fe81e6',
            300: '#fc4fda',
            400: '#fa20cf',
            500: '#e10ab6',
            600: '#b0038e',
            700: '#7e0065',
            800: '#4d003e',
        }
    }
});

export default theme;