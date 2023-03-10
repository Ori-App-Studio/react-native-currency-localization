package expo.community.modules.currencylocalization

import java.util.*
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativeCurrencyLocalizationModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ReactNativeCurrencyLocalization")

    Function("getLocalizedCurrencyName") { locale: String, currencyCode: String ->
      val localeObject = if (locale.contains("-")) {
        Locale(locale.split('-')[0], locale.split('-')[1])
      } else {
        Locale(locale)
      }
      val currency: Currency = Currency.getInstance(currencyCode)
      return@Function currency.getDisplayName(localeObject)
    }
  }
}