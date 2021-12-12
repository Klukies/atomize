import 'react-i18next';
import common from '../../public/locales/en/common.json';
import index from '../../public/locales/en/index.json';
import documentation from '../../public/locales/en/documentation.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      index: typeof index;
      documentation: typeof documentation;
    };
  }
}
