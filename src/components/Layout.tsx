import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { ReactComponentType } from "../@types/global";
import { getOgURL } from "../lib/helpers";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout: ReactComponentType<Record<string, any>> = ({
  children,
  ...customMeta
}) => {
  const router = useRouter();
  const meta = {
    title: "Easy React – We got your back!",
    description: `Easy React - tutorials, courses and more. Start your learning journey today!`,
    ogImage: "https://leerob.io/static/images/banner.png",
    type: "website",
    date: "14-12-2021",
    ...customMeta,
  };

  return (
    <Flex minH="100vh" direction="column">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.easyreact.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.easyreact.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mahmoud Mousa" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content={getOgURL(meta.title, meta.ogImage)}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@im_msmo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogImage} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
};
