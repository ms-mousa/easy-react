export const getOgURL = (title: string, image: string, fontSize = "100px") =>
  `https://easy-react-og.vercel.app/${title.replace(
    / /g,
    "%20"
  )}.png?theme=light&md=1&fontSize=${fontSize}&images=${image}`;
