import React, { useState } from 'react';

import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

export default function Page2({ language }: { language: any }) {
  const [languageState] = useState(`/${language}`);

  return (
    <div>
      <h1><FormattedMessage id="page2.title" /></h1>
      <p><FormattedMessage id="page2.subtitle" /></p>
      <Link to={languageState}><FormattedMessage id="page2.goTo" /></Link>
    </div>
  );
}
