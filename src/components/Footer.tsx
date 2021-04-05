import { useColorMode, useToken, Box, Flex } from "@chakra-ui/react";

export const Footer = () => {
  const { colorMode } = useColorMode();

  const [purple300, purple500, purple800, purple600] = useToken("colors", [
    "purple.300",
    "purple.400",
    "purple.800",
    "purple.600",
  ]);

  const bgImage = {
    light: `linear-gradient(to top, ${purple800}10, ${purple600}), url('/img/patterns/repeated-square.png')`,
    dark: `linear-gradient(to top, ${purple300}10, ${purple500}), url('/img/patterns/square-dark.png')`,
  };
  return (
    <Flex
      direction="column"
      w="100vw"
      minH="4vh"
      bgImage={bgImage[colorMode]}
      mt="auto"
      justify="center"
      align="center"
      fontSize="xs"
    >
      <Box w="100%" mt="-2" sx={{ backdropFilter: "blur(2px)" }} h="20px" />
      <Box fontFamily="Merriweather">Copyrights Easy React - Mahmoud Mousa</Box>
      <Box fontFamily="Merriweather">
        Made in Sydney with{" "}
        <span aria-label="Coffee Emoji" role="img">
          ☕️
        </span>
      </Box>
    </Flex>
  );
};
