import * as React from 'react';
import Link from 'gatsby-link';

import { FormattedMessage, injectIntl } from 'react-intl';

interface Props extends React.HTMLProps<HTMLDivElement> {
  language: string;
}

class Index extends React.PureComponent<Props, any> {

  constructor(props: Props) {
    super(props);
    console.log(this.props.language);
  }

  render() {
    return (
      <div>
        <h1><FormattedMessage id="welcome.title" /></h1>
        <p><FormattedMessage id="welcome.subtitle" /></p>
        <p><FormattedMessage id="welcome.content" /></p>
        <Link to="/page-2/"><FormattedMessage id="welcome.goTo" /></Link>
      </div>
    )
  }
}

export default Index;
