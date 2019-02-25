import React from 'react';

import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';

import Header from './Header';

import './index.scss';
import './../locales';

const { Provider } = React.createContext({});
interface Props {
  children: any;
  language: string;
  messages: any;
}

export default function Layout(props: Props) {
  return (
    <Provider value={{}}>
      <IntlProvider
        locale={props.language}
        messages={props.messages}
      >
        <div>
          <Helmet
            title="Gatsby Starter"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header />
          <main
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {props.children}
          </main>
        </div>
      </IntlProvider>
    </Provider>
  );
}
