import * as React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';

import './index.css';

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: any
}

class Layout extends React.PureComponent<Props, void> {
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
