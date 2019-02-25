import * as React from 'react';

import intlMessagesES from './../i18n/es.json';
import Page2 from '../components/Page2';
import Layout from '../components/Layout';

export default function Page2Es() {
  return (
    <Layout language={'es'} messages={intlMessagesES}>
      <Page2 language={'es'} />
    </Layout>
  );
}
