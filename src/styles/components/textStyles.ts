const bgColorMap = { dark: "gray.200", light: "black" };

export const textStyles = {
  // Styles for the base style
  baseStyle: {
    _selection: {
      bg: "codeGreen",
      color: "blue.800",
    },
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    navBarLink: ({ colorMode }: { colorMode: "dark" | "light" }): any => ({
      color: bgColorMap[colorMode],
      fontSize: "lg",
      cursor: "pointer",
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};
