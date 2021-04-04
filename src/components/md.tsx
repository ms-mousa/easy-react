import { Heading } from "@chakra-ui/react";
import { ReactComponentType } from "../@types/global";

export const H1: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <Heading
    mx="auto"
    backgroundImage="linear-gradient(to right, #F024B9 19%, #A827CF 100%)"
    backgroundClip="text"
    as="h1"
  >
    {children}
  </Heading>
);
