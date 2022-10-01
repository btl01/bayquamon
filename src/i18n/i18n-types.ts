// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'vi'

export type Locales =
	| 'en'
	| 'vi'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * C​h​à​o​ ​{​n​a​m​e​}​!
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
}

export type TranslationFunctions = {
	/**
	 * Chào {name}!
	 */
	HI: (arg: { name: string }) => LocalizedString
}

export type Formatters = {}
