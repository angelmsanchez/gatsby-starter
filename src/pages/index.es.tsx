import * as React from 'react'

import { addLocaleData } from 'react-intl';
import es from 'react-intl/locale-data/es';

import Layout from '../components/Layout';

import intlMessagesES from './../i18n/es.json';
import Index from '../components/Index';

addLocaleData(es);
interface IndexPageProps { }

export default class extends React.Component<IndexPageProps, {}> {

  constructor(props: IndexPageProps) {
    super(props)
  }

  render() {
    return (
      <Layout language={'es'} messages={intlMessagesES}>
        <Index language={'es'} />
      </Layout>
    )
  }
}
