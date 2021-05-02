import { UnorderedList } from "@chakra-ui/react";
import { H2, Paragraph, ExternalLink, LI, CustomImage } from "./md";
import { NewsletterSignup } from "./NewsletterSignup";

export const MDXComponents = {
  h2: H2,
  ul: UnorderedList,
  li: LI,
  p: Paragraph,
  a: ExternalLink,
  img: CustomImage,
  NewsletterSignup,
};
