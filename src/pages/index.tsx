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
  useToken,
  useColorMode,
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
  const { colorMode } = useColorMode();

  const [purple300, purple500, purple800, purple600] = useToken("colors", [
    "purple.300",
    "purple.400",
    "purple.800",
    "purple.600",
  ]);

  const bgImage = {
    light: `linear-gradient(to bottom, ${purple800}10, ${purple600}), url('/img/patterns/repeated-square.png')`,
    dark: `linear-gradient(to bottom, ${purple300}10, ${purple500}), url('/img/patterns/square-dark.png')`,
  };

  return (
    <Layout>
      <Box>
        <Center
          bgImage={bgImage[colorMode]}
          h="25vh"
          maxH="300px"
          overflow="hidden"
        >
          <Image src="/img/react-logo.png" maxW="180px" mb="-100px" />
        </Center>
        <Box
          mb="5"
          mt="-10"
          textAlign="center"
          sx={{ backdropFilter: "blur(3px)" }}
        >
          <Heading fontSize="5xl" textDecor="underline">
            Easy React
          </Heading>
          <Text>We got your back</Text>
        </Box>
        <Stack mx="auto" maxW="900px" px="3">
          <Text fontSize="2xl">Latest Posts</Text>
          {posts.map((p) => (
            <Flex
              overflow="hidden"
              border="1px solid"
              borderColor={borderColor}
              rounded="md"
              boxShadow="sm"
              key={p.slug}
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
        </Stack>
      </Box>
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
