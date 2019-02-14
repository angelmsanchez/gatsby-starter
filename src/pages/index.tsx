import * as React from 'react'
import Link from 'gatsby-link'

import DefaultLayout from './../layouts';

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

  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }

   render() {
    return (
      <DefaultLayout>
        <div>
          <h1>Hi people</h1>
          <p>
            Welcome to your new{' '}
            <strong>{this.props.data.site.siteMetadata.title}</strong> site.
          </p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </DefaultLayout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
