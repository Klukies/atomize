import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Paragraph;
