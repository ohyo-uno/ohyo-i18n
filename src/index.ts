import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US.json'
import enES from './locales/en-ES.json'
import jaJP from './locales/ja-JP.json'
import zhCN from './locales/zh-CN.json'

type MessageSchema = typeof enUS

export type LocaleType = 'en-US' | 'en-ES' | 'ja-JP' | 'zh-CN'

export const locales: Record<LocaleType, MessageSchema> = {
  'en-US': enUS,
  'en-ES': enES,
  'ja-JP': jaJP,
  'zh-CN': zhCN
}

export const i18n = (locale: LocaleType) => createI18n<[MessageSchema], LocaleType>({
  legacy: false, // to use Composition API
  locale: locale,
  fallbackLocale: 'en-US',
  messages: locales
})
