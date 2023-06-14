import ExpoModulesCore

public class ReactNativeCurrencyLocalizationModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ReactNativeCurrencyLocalization")

    Function("getLocalizedCurrencyName") { (locale: String, currencyCode: String) -> [String : String] in
      return [
        "name": Locale(identifier: locale).localizedString(forCurrencyCode: currencyCode) ?? currencyCode,
        "symbol": NSLocale(localeIdentifier: currencyCode).displayName(forKey: .currencySymbol, value: currencyCode) ?? currencyCode
      ]
    }
  }
}