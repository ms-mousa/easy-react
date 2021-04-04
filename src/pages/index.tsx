import {
  Box,
  Heading,
  Text,
  Image,
  Center,
  useToken,
  useColorMode,
  Grid,
} from "@chakra-ui/react";
import { IPost, ReactComponentType } from "../@types/global";
import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";
import { getAllFilesFrontMatter } from "../lib/mdx";

const IndexPage: ReactComponentType<{
  posts: IPost[];
}> = ({ posts }) => {
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
          sx={{ backdropFilter: "blur(2px)" }}
        >
          <Heading fontSize="5xl" textDecor="underline">
            Easy React
          </Heading>
          <Text>We got your back</Text>
        </Box>
        <Box mx="auto" maxW="900px" px="3">
          <Text fontSize="2xl">Latest articles</Text>
          <Grid
            p="3"
            m="0 auto"
            gridGap="5"
            maxW="1040px"
            w="100%"
            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          >
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
