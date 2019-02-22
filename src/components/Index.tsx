import React, { useState } from 'react';

import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

export default function Index({ language }: { language: any }) {
  const [languageState] = useState(`/${language}/page-2/`);

  return (
    <div>
      <h1><FormattedMessage id="welcome.title" /></h1>
      <p><FormattedMessage id="welcome.subtitle" /></p>
      <p><FormattedMessage id="welcome.content" /></p>
      <Link to={languageState}><FormattedMessage id="welcome.goTo" /></Link>
    </div>
  )
}
