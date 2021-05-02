import { Divider, Heading, Stack, Text, Badge } from "@chakra-ui/react";
import { IFrontMatter, ReactComponentType } from "../@types/global";
import { NewsletterSignup } from "./NewsletterSignup";

export const ArticleHeader: ReactComponentType<{
  frontMatter: IFrontMatter;
}> = ({ frontMatter }) => (
  <Stack align="center" w="100%">
    <NewsletterSignup />
    <Heading
      backgroundImage="linear-gradient(to right, #F024B9 19%, #A827CF 100%)"
      backgroundClip="text"
      as="h1"
      textAlign="center"
    >
      {frontMatter.title}
    </Heading>
    <Text>Published on: {frontMatter.publishedAt}</Text>
    <Stack isInline>
      {frontMatter.tags &&
        frontMatter.tags.map((tag) => (
          <Badge key={tag} colorScheme="purple">
            {tag}
          </Badge>
        ))}
    </Stack>
    <Divider />
  </Stack>
);
