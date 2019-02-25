import * as React from 'react';

import intlMessagesEN from './../i18n/en.json';
import Page2 from '../components/Page2';
import Layout from '../components/Layout';

export default function Page2En () {
  return (
    <Layout language={'en'} messages={intlMessagesEN}>
      <Page2 language={'en'} />
    </Layout>
  );
}
