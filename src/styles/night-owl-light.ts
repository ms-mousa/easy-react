export const nightOwlLightTheme = {
  'code[class*="language-"],\npre[class*="language-"]': {
    rounded: "lg",
    color: "#403f53",
    fontFamily: 'Fira code, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: 1.5,
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: 4,
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]::-moz-selection,\npre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection,\ncode[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "#fbfbfb",
  },
  'pre[class*="language-"]::selection,\npre[class*="language-"] ::selection,\ncode[class*="language-"]::selection,\ncode[class*="language-"] ::selection': {
    textShadow: "none",
    background: "#fbfbfb",
  },
  "@media print": {
    'code[class*="language-"],\n  pre[class*="language-"]': {
      textShadow: "none",
    },
  },
  'pre[class*="language-"]': {
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
  },
  ':not(pre) > code[class*="language-"],\npre[class*="language-"]': {
    color: "white",
    background: "#fbfbfb",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: "0.1em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
  },
  ".token.comment,\n.token.prolog,\n.token.cdata": {
    color: "rgb(152, 159, 177)",
    fontStyle: "italic",
  },
  ".token.punctuation": { color: "rgb(153, 76, 195)" },
  ".namespace": { color: "rgb(12, 150, 155)" },
  ".token.deleted": { color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic" },
  ".token.symbol,\n.token.operator,\n.token.keyword,\n.token.property": {
    color: "rgb(12, 150, 155)",
  },
  ".token.tag": { color: "rgb(153, 76, 195)" },
  ".token.boolean": { color: "rgb(188, 84, 84)" },
  ".token.number": { color: "rgb(170, 9, 130)" },
  ".token.constant,\n.token.builtin,\n.token.string,\n.token.url,\n.token.entity,\n.language-css .token.string,\n.style .token.string,\n.token.char": {
    color: "rgb(72, 118, 214)",
  },
  ".token.selector,\n.token.function,\n.token.doctype": {
    color: "rgb(153, 76, 195)",
    fontStyle: "italic",
  },
  ".token.attr-name,\n.token.inserted": {
    color: "rgb(72, 118, 214)",
    fontStyle: "italic",
  },
  ".token.class-name,\n.token.atrule,\n.token.attr-value": {
    color: "rgb(17, 17, 17)",
  },
  ".token.regex,\n.token.important,\n.token.variable": {
    color: "rgb(201, 103, 101)",
  },
  ".token.important,\n.token.bold": { fontWeight: "bold" },
  ".token.italic": { fontStyle: "italic" },
  // add styles for inline code
  "p code": {
    "&:before,  &:after": {
      content: '"`"',
    },
    p: 1,
    bg: "blackAlpha.200",
    rounded: "sm",
    color: "gray.800",
  },
  // styles for file title:
  ".remark-code-title": {
    p: "2",
    bg: "#fbfbfb",
    borderBottom: "1px solid",
    borderColor: "gray.300",
    mb: "-2",
    roundedTop: "md",
  },
  // Styles for line highlighting
  ".mdx-marker": {
    borderLeft: "4px solid",
    borderColor: "blue.500",
    bg: "blue.100",
    ml: "-4",
    pl: "4",
  },
};
