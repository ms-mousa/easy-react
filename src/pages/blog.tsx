import { Box } from "@chakra-ui/react";
import { ReactComponentType } from "../@types/global";
import { Layout } from "../components/Layout";
import { getAllFilesFrontMatter } from "../lib/mdx";

const BlogPage: ReactComponentType<{
  posts: Array<{
    slug: string | null;
    title: string;
    publishedAt: string;
    summary: string;
    image: string;
  }>;
}> = () => (
  <Layout>
    <Box>Hello, blog</Box>
  </Layout>
);

export default BlogPage;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
