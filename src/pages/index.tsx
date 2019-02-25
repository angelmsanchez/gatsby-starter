import * as React from 'react';

import Layout from '../components/Layout';
import Index from '../components/Index';
import intlMessagesEN from './../i18n/en.json';

export default function IndexDefault() {
  return (
    <Layout language={'en'} messages={intlMessagesEN}>
        <Index language={'en'} />
    </Layout>
  );
}

