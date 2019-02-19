import * as React from 'react'

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import Layout from '../components/Layout';
import Index from '../components/Index';
import intlMessagesEN from './../i18n/en.json';

addLocaleData(en);
interface IndexPageProps { }

export default class extends React.Component<IndexPageProps, {}> {

  constructor(props: IndexPageProps) {
    super(props)
  }

  render() {
    return (
      <Layout language={'en'} messages={intlMessagesEN}>
        <Index language={'en'} />
      </Layout>
    )
  }
}
