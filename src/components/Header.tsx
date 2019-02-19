import * as React from 'react';

import Link from 'gatsby-link';

interface State {
  value: string;
}
class Header extends React.PureComponent<any, State> {

  constructor() {
    super({});
    this.state = { value: 'en' };
  }

  changeLanguage = (event: any) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Gatsby
        </Link>
          </h1>
          <div onClick={this.changeLanguage}>
            <Link to="/es" style={{ color: 'white', textDecoration: 'none', }}>ES</Link>
            <Link to="/en" style={{ color: 'white', textDecoration: 'none', }}>EN</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
