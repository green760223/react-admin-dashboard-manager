import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './locales/en/translation.json'
import translationZH from './locales/zh/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
}

i18n
  .use(initReactI18next)
  .init({ resources, lng: 'en', fallbackLng: 'en', debug: true })
