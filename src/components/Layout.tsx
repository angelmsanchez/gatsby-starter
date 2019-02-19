import * as React from 'react';

import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';

import Header from './Header';

import './index.css';

const { Provider } = React.createContext({});
interface Props extends React.HTMLProps<HTMLDivElement> {
  children: any;
  language: string;
  messages: any;
}
interface State { }

class Layout extends React.PureComponent<Props, State> {
  render() {
    return (
      <Provider value={this.state}>
        <IntlProvider
          locale={this.props.language}
          messages={this.props.messages}
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
              {this.props.children}
            </main>
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}

export default Layout;
