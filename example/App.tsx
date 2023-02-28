import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeCurrencyLocalization from 'react-native-currency-localization';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeCurrencyLocalization.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
