import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Documentation = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Documentation;
