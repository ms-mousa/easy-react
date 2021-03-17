import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Badge,
  Stack,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { ReactComponentType } from "../@types/global";
import { Layout } from "../components/Layout";
import { getAllFilesFrontMatter } from "../lib/mdx";

const IndexPage: ReactComponentType<{
  posts: Array<{
    slug: string | null;
    title: string;
    publishedAt: string;
    summary: string;
    image: string;
    tags: string[];
  }>;
}> = ({ posts }) => {
  const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.200");

  return (
    <Layout>
      <Box>
        <Center>
          <Box mb="5">
            <Heading>Hey, I&apos;m Mahmoud Mousa</Heading>
            <Text>
              I run Easy React. I&apos;m here to make your time learning React
              easier
            </Text>
          </Box>
        </Center>
        {posts.map((p) => (
          <Flex
            overflow="hidden"
            border="1px solid"
            borderColor={borderColor}
            rounded="md"
            boxShadow="sm"
          >
            <Image maxH="150px" src={p.image} />
            <Box py="1" ml="2">
              <Stack
                isInline
                divider={<Text mx="1"> • </Text>}
                alignItems="center"
              >
                <Heading textDecor="underline" fontSize="xl">
                  {p.title}
                </Heading>
                {p.tags.map((tag) => (
                  <Badge key={tag} colorScheme="purple">
                    {tag}
                  </Badge>
                ))}
              </Stack>
              <Text>{p.summary}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
