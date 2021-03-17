import { Heading } from "@chakra-ui/react";
import { ReactComponentType } from "../@types/global";

export const H1: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => <Heading as="h1">{children}</Heading>;
