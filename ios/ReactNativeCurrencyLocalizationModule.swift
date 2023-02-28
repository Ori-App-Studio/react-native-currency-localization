import ExpoModulesCore

public class ReactNativeCurrencyLocalizationModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ReactNativeCurrencyLocalization")

    Function("getLocalizedCurrencyName") { (locale: String, currencyCode: String) -> String in
      return Locale(identifier: locale).localizedString(forCurrencyCode: currencyCode) ?? currencyCode
    }
  }
}