import * as React from 'react'
import Link from 'gatsby-link'

import Layout from './../components/Layout';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {

  constructor(props: IndexPageProps) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Hi people</h1>
          <p>
            Welcome to your new site
          </p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </Layout>
    )
  }
}
