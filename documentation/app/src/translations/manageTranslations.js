/*
 * This script takes the extracted string outputted by babel-react-intl plugin
 * and generates two files per supported locale. This library tracks translations
 * and makes sure there are no duplicate keys
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: '.messages',
  translationsDirectory: 'src/translations/locales/',
  whitelistsDirectory: 'src/translations/locales/whitelists/',
  languages: ['de', 'fr'], // Any translation --- don't include the default language
});
