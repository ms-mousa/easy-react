import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  IconButton,
  useColorMode,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      marginX="auto"
      sx={{ backdropFilter: "blur(3px)" }}
      position="absolute"
      w="100vw"
    >
      <Box
        p="2"
        borderBottom="3px solid"
        borderColor="purple.500"
        maxWidth="900px"
        w="100%"
      >
        <Flex minH="6vh" justify="space-between" alignItems="center">
          <Flex alignSelf="flex-end" direction="column">
            <Link href="/">
              <Heading cursor="pointer">Easy React</Heading>
            </Link>
            <Text ml="3" mt="-1" fontSize="sm">
              By: Mahmoud Mousa
            </Text>
          </Flex>
          <Stack
            display={["none", "none", "flex", "flex"]}
            isInline
            alignItems="center"
            spacing="3"
          >
            <Link href="/about-me">
              <Text variant="navBarLink">About Me</Text>
            </Link>
            <Button
              onClick={() =>
                window.open(
                  "https://learn.easyreact.com/courses/Intermediate-react-login",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              colorScheme="purple"
              variant="outline"
            >
              Courses
            </Button>
            <IconButton
              aria-label="Dark mode toggle"
              onClick={() => {
                toggleColorMode();
              }}
              colorScheme="purple"
              variant="outline"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            />
          </Stack>
          <IconButton
            display={["inline-flex", "inline-flex", "none", "none"]}
            aria-label="Mobile drawer icon"
            variant="outline"
            colorScheme="purple"
            icon={<HamburgerIcon />}
          />
        </Flex>
      </Box>
    </Center>
  );
};
