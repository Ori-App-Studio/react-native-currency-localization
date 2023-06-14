import ReactNativeCurrencyLocalizationModule from "./ReactNativeCurrencyLocalizationModule";

export function getLocalizedCurrencyName(
  locale: string,
  currencyCode: string
): { name: string, symbol: string } {
  return ReactNativeCurrencyLocalizationModule.getLocalizedCurrencyName(
    locale,
    currencyCode
  );
}
