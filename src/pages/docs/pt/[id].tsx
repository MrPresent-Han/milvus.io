import { GetStaticProps } from 'next';
import { LanguageEnum } from '@/components/language-selector';
import { DocDetailPage } from '@/components/localization/DocDetail';
import { createDocDetailProps } from '@/components/localization/CreateDocDetailProps';

export default DocDetailPage;

export const getStaticPaths = () => {
  const { getPageStaticPaths } = createDocDetailProps(LanguageEnum.PORTUGUESE);
  return getPageStaticPaths();
};

export const getStaticProps: GetStaticProps = async context => {
  const { getPageStaticProps } = createDocDetailProps(LanguageEnum.PORTUGUESE);
  return getPageStaticProps(context);
};
