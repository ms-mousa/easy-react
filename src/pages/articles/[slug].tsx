import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
// eslint-disable-next-line import/no-unresolved
import { MdxRemote } from "next-mdx-remote/types";
import { IFrontMatter, ReactComponentType } from "../../@types/global";
import { MDXComponents } from "../../components";
import { ArticleHeader } from "../../components/ArticleHeader";
import { Layout } from "../../components/Layout";
import { getFileBySlug, getFiles } from "../../lib/mdx";

const ArticlePage: ReactComponentType<{
  mdxSource: MdxRemote.Source;
  frontMatter: IFrontMatter;
}> = (props) => {
  const { mdxSource, frontMatter } = props;
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.summary}
      ogImag="https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/763/988af53b-5d7e-435a-98eb-dd4aff5299d2.png"
    >
      <>
        <Box
          mt="120px"
          mb="10"
          alignSelf="center"
          maxW="1200px"
          w={["100%", "100%", "1200px", "1200px"]}
          px="4"
        >
          <ArticleHeader frontMatter={frontMatter} />
          {content}
        </Box>
      </>
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
