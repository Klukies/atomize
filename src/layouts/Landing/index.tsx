import { ReactNode } from 'react';

import Header from '../../components/molecules/Header';

type Props = {
  children?: ReactNode;
};

const Landing = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};

export default Landing;
