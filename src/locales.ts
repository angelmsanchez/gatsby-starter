import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...es]);
