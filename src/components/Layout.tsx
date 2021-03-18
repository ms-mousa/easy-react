import { Stack } from "@chakra-ui/react";
import { ReactComponentType } from "../@types/global";
import { NavBar } from "./NavBar";

export const Layout: ReactComponentType<{ children: JSX.Element }> = ({
  children,
}) => (
  <Stack spacing="0" marginX="auto">
    <NavBar />
    {children}
  </Stack>
);
