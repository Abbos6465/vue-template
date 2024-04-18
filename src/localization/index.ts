import {createI18n} from "vue-i18n";
import {getItem} from "@/utils/local.storage";

const localeKey:'locale' = 'locale';
const getLocalStorageLocale: string = getItem(localeKey);
export const availableLocales: string[] = ['uz', 'ru'];

const hasLocale = (locale:string): boolean => {
    return locale && availableLocales.includes(locale);
}

export const activeLocale:string = hasLocale(getLocalStorageLocale) ? getLocalStorageLocale : 'uz';

const {default: json} = await import(`./${activeLocale}.json`);

export const changeLocale = async (locale:string):Promise<void> => {
    if(!hasLocale(locale)) return
    const {default: json} = await import(`./${locale}.json`);
    instance.global.locale.value = locale;
    instance.global.setLocaleMessage(locale, json)
}

const instance = createI18n({
    globalInjection: true,
    locale: activeLocale,
    useScope: 'global',
    legacy: false,
    missingWarn: false,
    fallbackWarn: false,
    messages: {
        [activeLocale]: json
    },
})

export default instance;

export const i18n = instance.global;