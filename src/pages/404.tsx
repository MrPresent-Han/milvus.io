import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/commonLayout';
import Head from 'next/head';
import styles from '@/styles/404.module.less';

const NotFoundPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <main>
        <Head>
          <title>404: Not Found</title>
          <meta name="description" content="" />
        </Head>

        <div className={styles.notFoundContainer}>
          <div className={styles.notFountCenterWrapper}>
            <div className={styles.notFoundTitlebar}>
              <h1 className={styles.notFoundTitle}>{t('v3trans.404.title')}</h1>
            </div>

            <p className={styles.notFoundContent}>{t('v3trans.404.desc1')}</p>
            <p className={styles.notFoundContent}>{t('v3trans.404.desc2')}</p>
            <Link
              href={'/'}
              className={styles.notFoundButton}
              children={
                <>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>{t('v3trans.404.gobtn')}</span>
                </>
              }
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default NotFoundPage;
