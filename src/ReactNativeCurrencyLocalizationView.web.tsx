import * as React from 'react';

import { ReactNativeCurrencyLocalizationViewProps } from './ReactNativeCurrencyLocalization.types';

export default function ReactNativeCurrencyLocalizationView(props: ReactNativeCurrencyLocalizationViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
