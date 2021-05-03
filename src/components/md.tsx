import { CheckIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Center,
  Heading,
  Link,
  ListIcon,
  ListItem,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

import { ReactComponentType } from "../@types/global";

export const H2: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <Center>
    <Heading
      position="relative"
      textAlign="center"
      _after={{
        content: "''",
        position: "absolute",
        height: "2px",
        width: "40%",
        bottom: 0.4,
        left: "50%",
        transform: "translateX(-50%)",
        transition: "0.2s ease",
        background: "whiteAlpha.400",
        backgroundImage: "linear-gradient(to right, #f024b9 19%, #A827CF 100%)",
      }}
      _selection={{
        bg: "transparent",
        color: "#f024b9",
      }}
      my="4"
      as="h2"
      fontSize={["24px", "3xl", "3xl", "3xl"]}
    >
      {children}
    </Heading>
  </Center>
);

export const LI: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <ListItem fontSize="xl" listStyleType="none">
    <ListIcon as={CheckIcon} color="green.300" />
    {children}
  </ListItem>
);

export const Paragraph: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <Text fontSize="xl" lineHeight="tall" my="4">
    {children}
  </Text>
);

export const ExternalLink: ReactComponentType<{
  children: JSX.Element;
  href: string;
}> = ({ href, children }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  return (
    <Link
      href={href}
      isExternal={!isInternalLink}
      color="codeTitleColorDark"
      textDecor="none"
      boxShadow="0 0 0 0 inset"
      transition="box-shadow .25s ease-in-out"
      _hover={{ textDecor: "none", boxShadow: "0 -2px 0 0 inset" }}
      display="inline-flex"
      alignItems="center"
    >
      {children}
      {!isInternalLink && <ExternalLinkIcon ml="1" />}
    </Link>
  );
};

export const CustomImage: ReactComponentType<{
  children: JSX.Element;
  src: string;
  alt: string;
}> = ({ src, alt }) => (
  <Flex align="center" direction="column">
    <Image height="auto" w="auto" src={src} alt={alt} />
    <Text fontSize="xs" color="whiteAlpha.700">
      {alt}
    </Text>
  </Flex>
);
