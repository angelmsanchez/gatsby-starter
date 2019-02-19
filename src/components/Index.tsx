import * as React from 'react';

import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

interface Props extends React.HTMLProps<HTMLDivElement> {
  language: string;
}
interface State {
  language: string;
}
class Index extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      language: `/${this.props.language}/page-2/`
    }
  }

  render() {
    return (
      <div>
        <h1><FormattedMessage id="welcome.title" /></h1>
        <p><FormattedMessage id="welcome.subtitle" /></p>
        <p><FormattedMessage id="welcome.content" /></p>
        <Link to={this.state.language}><FormattedMessage id="welcome.goTo" /></Link>
      </div>
    )
  }
}

export default Index;
