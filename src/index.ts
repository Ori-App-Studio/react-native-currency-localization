import ReactNativeCurrencyLocalizationModule from "./ReactNativeCurrencyLocalizationModule";

export function getLocalizedCurrencyName(
  locale: string,
  currencyCode: string
): string {
  return ReactNativeCurrencyLocalizationModule.getLocalizedCurrencyName(
    locale,
    currencyCode
  );
}
