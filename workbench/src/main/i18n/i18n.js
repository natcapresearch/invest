import i18n from "i18next";

import es_messages from './es.json' assert { type: "json" };
import * as zh_messages from './zh.json';

i18n
  .init({
    resources: {
      es: {
        translation: es_messages
      },
      zh: {
        translation: zh_messages
      },
    },
    interpolation: {
      escapeValue: false // react already safe from xss
    },
    keySeparator: false,
    nsSeparator: false,
    saveMissing: true,
  });

export default i18n;
