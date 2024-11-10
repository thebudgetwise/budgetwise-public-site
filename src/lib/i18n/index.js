import { derived, writable } from "svelte/store";

import en from "./en.json";
import fr from "./fr.json";
import { getLocaleFromNavigator } from "svelte-i18n";

const current = getLocaleFromNavigator();

export const locales = ["en", "fr"];
export const locale = writable(locales.includes(current) ? current : "fr");

function translate(locale, key, vars) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.

  const path = key.split(".");

  let text = reducer(locale === "en" ? en : fr, path);

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

function reducer(object, path) {
  return path.reduce((acc, key) => acc && acc[key], object);
}

export const t = derived(locale, ($locale) => (key, vars = {}) =>
  translate($locale, key, vars)
);