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
  // I discarded the use of light mode
  colors: {
    black: "#16161D",
    codeTitleColorDark: "rgb(130, 170, 255)",
    codeTitleColorLight: "rgb(153, 76, 195)",
    codeBgDark: "#011627",
    codeBgLight: "#fbfbfb",
    inlineCodeColor: "rgb(247, 140, 108)",
  },
  styles: {
    global: (props) => ({
      ...(props.colorMode === "dark" ? nightOwlDarkTheme : nightOwlLightTheme),
      "html, body": {
        overflowX: "hidden",
        color: mode("black", "white")(props),
        background: mode("gray.100", "gray.800")(props),
      },
      ".remark-code-title": {
        color: mode("codeTitleColorLight", "codeTitleColorDark")(props),
        fontFamily: 'Fira code, Monaco, "Andale Mono"',
        textAlign: "center",
        bg: mode("codeBgLight", "codeBgDark")(props),
        mb: "-2",
        borderBottom: "1px solid",
        borderTopRadius: "md",
      },
      // add styles for inline code
      "p code, li code": {
        "&:before,  &:after": {
          content: '"`"',
        },
        p: "1px",
        bg: "whiteAlpha.200",
        rounded: "sm",
        color: "inlineCodeColor",
      },
      // Styles for line highlighting
      ".mdx-marker": {
        borderLeft: "4px solid",
        borderColor: "blue.200",
        bg: "blue.800",
        ml: "-4",
        pl: "4",
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
