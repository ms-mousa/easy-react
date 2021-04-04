import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
// eslint-disable-next-line import/no-unresolved
import { MdxRemote } from "next-mdx-remote/types";
import { ReactComponentType } from "../../@types/global";
import { MDXComponents } from "../../components";
import { Layout } from "../../components/Layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";

const ArticlePage: ReactComponentType<{
  mdxSource: MdxRemote.Source;
  frontMatter: {
    wordCount: number;
    readingTime: { text: string; minutes: number; time: number; words: number };
    slug: string | null;
    title: string;
    publishedAt: string;
    summary: string;
    image: string;
  };
}> = (props) => {
  const { mdxSource } = props;
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Layout>
      <Box mt="150px" alignSelf="center" w="900px">
        {content}
      </Box>
    </Layout>
  );
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params!.slug as string);
  return { props: post };
};
