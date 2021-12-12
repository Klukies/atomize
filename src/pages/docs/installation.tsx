import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Documentation from '../../layouts/Documentation';

const Installation = () => <Documentation></Documentation>;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale!, ['index'])) },
});

export default Installation;
