export const i18n = {
  defaultLocale: "pl",
  locales: ["en", "pl"], //lista języków
} as const;

export type Locale = (typeof i18n)["locales"][number];
