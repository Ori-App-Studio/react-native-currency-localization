import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeCurrencyLocalizationViewProps } from './ReactNativeCurrencyLocalization.types';

const NativeView: React.ComponentType<ReactNativeCurrencyLocalizationViewProps> =
  requireNativeViewManager('ReactNativeCurrencyLocalization');

export default function ReactNativeCurrencyLocalizationView(props: ReactNativeCurrencyLocalizationViewProps) {
  return <NativeView {...props} />;
}
