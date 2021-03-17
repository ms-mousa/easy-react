export const nightOwlDarkTheme = {
  'code[class*="language-"],\npre[class*="language-"]': {
    rounded: "lg",
    color: "#d6deeb",
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
    background: "rgba(29, 59, 83, 0.99)",
  },
  'pre[class*="language-"]::selection,\npre[class*="language-"] ::selection,\ncode[class*="language-"]::selection,\ncode[class*="language-"] ::selection': {
    textShadow: "none",
    background: "rgba(29, 59, 83, 0.99)",
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
    background: "#011627",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: "0.1em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
  },
  ".token.comment,\n.token.prolog,\n.token.cdata": {
    color: "rgb(99, 119, 119)",
    fontStyle: "italic",
  },
  ".token.punctuation": { color: "rgb(199, 146, 234)" },
  ".namespace": { color: "rgb(178, 204, 214)" },
  ".token.deleted": { color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic" },
  ".token.symbol,\n.token.property": { color: "rgb(128, 203, 196)" },
  ".token.tag,\n.token.operator,\n.token.keyword": {
    color: "rgb(127, 219, 202)",
  },
  ".token.boolean": { color: "rgb(255, 88, 116)" },
  ".token.number": { color: "rgb(247, 140, 108)" },
  ".token.constant,\n.token.function,\n.token.builtin,\n.token.char": {
    color: "rgb(130, 170, 255)",
  },
  ".token.selector,\n.token.doctype": {
    color: "rgb(199, 146, 234)",
    fontStyle: "italic",
  },
  ".token.attr-name,\n.token.inserted": {
    color: "rgb(173, 219, 103)",
    fontStyle: "italic",
  },
  ".token.string,\n.token.url,\n.token.entity,\n.language-css .token.string,\n.style .token.string": {
    color: "rgb(173, 219, 103)",
  },
  ".token.class-name,\n.token.atrule,\n.token.attr-value": {
    color: "rgb(255, 203, 139)",
  },
  ".token.regex,\n.token.important,\n.token.variable": {
    color: "rgb(214, 222, 235)",
  },
  ".token.important,\n.token.bold": { fontWeight: "bold" },
  ".token.italic": { fontStyle: "italic" },
  // add styles for inline code
  "p code": {
    "&:before,  &:after": {
      content: '"`"',
    },
    p: 1,
    bg: "whiteAlpha.200",
    rounded: "sm",
    color: "gray.200",
  },
  // Styles for line highlighting
  ".mdx-marker": {
    borderLeft: "4px solid",
    borderColor: "blue.200",
    bg: "blue.800",
    ml: "-4",
    pl: "4",
  },
};
