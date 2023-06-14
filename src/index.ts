import ReactNativeCurrencyLocalizationModule from "./ReactNativeCurrencyLocalizationModule";

export function getLocalizedCurrency(
  locale: string,
  currencyCode: string
): { name: string, symbol: string } {
  return ReactNativeCurrencyLocalizationModule.getLocalizedCurrency(
    locale,
    currencyCode
  );
}
