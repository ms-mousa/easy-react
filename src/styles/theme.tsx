import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
import { nightOwlDarkTheme } from "./night-owl";
import { nightOwlLightTheme } from "./night-owl-light";
import { textStyles as Text } from "./components/textStyles";

const fonts = {
  mono: `'Menlo', monospace`,
  heading: "Merriweather, sans-serif",
  body: "Noto Sans, sans-serif",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  styles: {
    global: (props) => ({
      ...(props.colorMode === "dark"
        ? { nightOwlDarkTheme }
        : { nightOwlLightTheme }),
      "html, body": {
        color: mode("black", "white")(props),
        background: mode("gray.100", "gray.800")(props),
      },
    }),
  },
  components: {
    Text,
  },
  fonts,
  breakpoints,
});

export default theme;
