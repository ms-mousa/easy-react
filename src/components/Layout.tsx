import { Flex } from "@chakra-ui/react";
import { ReactComponentType } from "../@types/global";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <Flex minH="100vh" direction="column">
    <NavBar />
    {children}
    <Footer />
  </Flex>
);
