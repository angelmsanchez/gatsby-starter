import * as React from 'react';

import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

interface Props extends React.HTMLProps<HTMLDivElement> {
  language: string;
}
interface State {
  language: string;
}

class Page2 extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      language: `/${this.props.language}/`
    }
  }

  render() {
    return (
      <div>
        <h1><FormattedMessage id="page2.title" /></h1>
        <p><FormattedMessage id="page2.subtitle" /></p>
        <Link to={this.state.language}><FormattedMessage id="page2.goTo" /></Link>
      </div>
    )
  }
}

export default Page2;
