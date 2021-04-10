import { Heading, Center } from "@chakra-ui/react";
import { IFrontMatter, ReactComponentType } from "../@types/global";

export const ArticleHeader: ReactComponentType<{
  frontMatter: IFrontMatter;
}> = ({ frontMatter }) => (
  <Center w="100%">
    <Heading
      mx="auto"
      backgroundImage="linear-gradient(to right, #F024B9 19%, #A827CF 100%)"
      backgroundClip="text"
      as="h1"
    >
      {frontMatter.title}
    </Heading>
  </Center>
);
