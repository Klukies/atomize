import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMemo } from 'react';

import { Frontmatter, getDoc, getDocs } from '../../utils/mdx';

type Props = {
  frontmatter: Frontmatter;
  code: string;
};

const Doc = ({ frontmatter, code }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const docs = getDocs();

  return {
    paths: docs.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { slug: string }> = async (context) => {
  const { frontmatter, code } = await getDoc(context.params!.slug);

  return { props: { frontmatter, code } };
};

export default Doc;
