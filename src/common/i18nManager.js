/*! (C) Copyright 2020 LanguageTooler GmbH. All rights reserved. */
class i18nManagerClass{}i18nManagerClass.eventNames={localeChanged:"lt-i18nManager.localeChanged"};const i18nManager=class{static init(e){this._instance=e}static addEventListener(e,a){this._instance.addEventListener(e,a)}static setLocale(e){this._instance.setLocale(e)}static getMessage(e,a){return this._instance.getMessage(e,a)}};
export { i18nManagerClass }