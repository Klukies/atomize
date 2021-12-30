import { MDXProviderComponents } from '@mdx-js/react';

import Heading, { HeadingChildren } from './Heading';

const components: MDXProviderComponents = {
  h1: ({ children }: HeadingChildren) => <Heading Tag="h1">{children}</Heading>,
  h2: ({ children }: HeadingChildren) => <Heading Tag="h2">{children}</Heading>,
  h3: ({ children }: HeadingChildren) => <Heading Tag="h3">{children}</Heading>,
  h4: ({ children }: HeadingChildren) => <Heading Tag="h4">{children}</Heading>,
  h5: ({ children }: HeadingChildren) => <Heading Tag="h5">{children}</Heading>,
  h6: ({ children }: HeadingChildren) => <Heading Tag="h6">{children}</Heading>,
};

export default components;
