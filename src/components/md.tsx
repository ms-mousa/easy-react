import { CheckIcon } from "@chakra-ui/icons";
import {
  Center,
  Heading,
  Link,
  ListIcon,
  ListItem,
  Text,
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
        backgroundImage: "linear-gradient(to right, #F024B9 19%, #A827CF 100%)",
      }}
      mb="4"
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
  <ListItem>
    <ListIcon as={CheckIcon} />
    {children}
  </ListItem>
);

export const Paragraph: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <Text fontSize="md" lineHeight="tall" my="4">
    {children}
  </Text>
);

export const ExternalLink: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <Link
    backgroundClip="text"
    backgroundImag="linear-gradient(to right, #F024B9 19%, #A827CF 100%)"
    href={children.props?.href}
    color="pink"
  >
    {children}
  </Link>
);
