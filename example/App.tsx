import { Text, View } from "react-native";
import * as ReactNativeCurrencyLocalization from "react-native-currency-localization";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Currency: 'USD', locale: 'en-CA'</Text>
      <Text>
        {ReactNativeCurrencyLocalization.getLocalizedCurrencyName(
          "en-CA",
          "USD"
        )}
      </Text>
      <Text>Currency: 'USD', locale: 'ar'</Text>
      <Text>
        {ReactNativeCurrencyLocalization.getLocalizedCurrencyName("ar", "USD")}
      </Text>
    </View>
  );
}
