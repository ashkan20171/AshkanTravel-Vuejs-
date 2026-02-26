import { createI18n } from 'vue-i18n'
import fa from './fa.json'
import en from './en.json'

const saved = localStorage.getItem('ashkantravel_locale') || 'fa'

export default createI18n({
  legacy: false,
  locale: saved,
  fallbackLocale: 'en',
  messages: { fa, en }
})
