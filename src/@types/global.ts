// I hated having to write down the return type on every component
// extracted it away
export type ReactComponentType<T> = (props: T) => JSX.Element;

export interface IPost {
  slug: string | null;
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  tags: string[];
}

export interface IFrontMatter {
  wordCount: number;
  readingTime: { text: string; minutes: number; time: number; words: number };
  slug: string | null;
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  tags: string[];
}
