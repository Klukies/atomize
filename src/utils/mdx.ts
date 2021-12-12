import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';

const ROOT_PATH = process.cwd();
const DOCS_PATH = path.join(ROOT_PATH, 'docs');

export type Frontmatter = {
  title: string;
  description: string;
  slug: string;
};

export const getDocs = () => {
  const docsPaths = glob.sync(`${DOCS_PATH}/*.mdx`);

  return docsPaths.map((docsPath) => {
    const source = fs.readFileSync(path.join(docsPath), 'utf-8');
    const { data } = matter(source);

    return { ...data, slug: path.basename(docsPath).replace('.mdx', '') } as Frontmatter;
  });
};

export const getDoc = async (slug: string) => {
  const source = fs.readFileSync(path.join(DOCS_PATH, `${slug}.mdx`), 'utf-8');
  const { frontmatter, code } = await bundleMDX({
    source,
    xdmOptions: (options) => {
      // TODO:
      // options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];
      // options.rehypePlugins = [
      //   ...(options.rehypePlugins ?? []),
      //   rehypeMetaAttribute,
      //   rehypeHighlightCode,
      // ];

      return options;
    },
  });

  return {
    frontmatter: { ...frontmatter, slug } as Frontmatter,
    code,
  };
};
