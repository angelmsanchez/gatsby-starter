import * as React from 'react';

import Link from 'gatsby-link';

export default function Header() {
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/en" style={{ color: 'white', textDecoration: 'none' }}>Gatsby</Link>
        </h1>
        <div>
          <Link activeClassName="selected" to="/es" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>ES</Link>
          <Link activeClassName="selected" to="/en" style={{ color: 'white', textDecoration: 'none' }}>EN</Link>
        </div>
      </div>
    </div>
  );
}
