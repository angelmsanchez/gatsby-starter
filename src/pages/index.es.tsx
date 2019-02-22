import * as React from 'react'

import Layout from '../components/Layout';
import Index from '../components/Index';
import intlMessagesES from './../i18n/es.json';

export default function () {
  return (
    <Layout language={'es'} messages={intlMessagesES}>
      <Index language={'es'} />
    </Layout>
  )
}
