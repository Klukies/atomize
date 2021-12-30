import LinkIcon from '@assets/icons/link.svg';
import Link from 'next/link';

import styles from './heading.module.scss';

export type HeadingChildren = { children: Props['children'] };
type HTMLHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
  Tag: HTMLHeadingTag;
  children: string;
};

const toSlug = (label: string) => label.toLowerCase().replace(/[\s.]/g, '-').replace(/[.:]/g, '');

const Heading = ({ Tag, children }: Props) => {
  const slug = toSlug(children);

  return (
    <Tag id={slug} className={styles.heading}>
      <Link href={`#${slug}`}>
        <a>
          {children}
          <LinkIcon width="1rem" height="1rem" viewBox="0 0 20 20" />
        </a>
      </Link>
    </Tag>
  );
};

export default Heading;
