import { Text, View } from "react-native";
import * as ReactNativeCurrencyLocalization from "react-native-currency-localization";

export default function App() {
  const usdUSA = ReactNativeCurrencyLocalization.getLocalizedCurrency(
    "en-US",
    "USD"
  )
  const usdCanada = ReactNativeCurrencyLocalization.getLocalizedCurrency(
    "en-CA",
    "USD"
  )
  const usdGerman = ReactNativeCurrencyLocalization.getLocalizedCurrency(
    "de-DE",
    "USD"
  )
  const vndUSA = ReactNativeCurrencyLocalization.getLocalizedCurrency(
    "en-US",
    "VND"
  )
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Currency: 'USD', locale: 'en-US'</Text>
      <Text>
        {`${usdUSA.name} - ${usdUSA.symbol}`}
      </Text>
      <Text>Currency: 'USD', locale: 'en-CA'</Text>
      <Text>
        {`${usdCanada.name} - ${usdCanada.symbol}`}
      </Text>
      <Text>Currency: 'USD', locale: 'de-DE'</Text>
      <Text>
        {`${usdGerman.name} - ${usdGerman.symbol}`}
      </Text>
      <Text>Currency: 'VND', locale: 'en-US'</Text>
      <Text>
        {`${vndUSA.name} - ${vndUSA.symbol}`}
      </Text>
    </View>
  );
}
