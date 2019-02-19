import * as React from 'react';

import intlMessagesEN from './../i18n/en.json';
import Page2 from '../components/Page2';
import Layout from '../components/Layout';

const SecondPage = () => (
  <Layout language={'en'} messages={intlMessagesEN}>
    <Page2 language={'en'} />
  </Layout>
)

export default SecondPage;
