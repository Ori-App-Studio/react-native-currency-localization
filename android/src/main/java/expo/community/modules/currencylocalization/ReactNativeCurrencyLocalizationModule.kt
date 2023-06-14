package expo.community.modules.currencylocalization

import java.util.*
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativeCurrencyLocalizationModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ReactNativeCurrencyLocalization")

    Function("getLocalizedCurrency") { locale: String, currencyCode: String ->
      val localeObject = if (locale.contains("-")) {
        Locale(locale.split('-')[0], locale.split('-')[1])
      } else {
        Locale(locale)
      }
      val currency: Currency = Currency.getInstance(currencyCode)
      return@Function mapOf(
        "name" to currency.getDisplayName(localeObject),
        "symbol" to currency.getSymbol(localeObject)
      )
    }
  }
}