import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeCurrencyLocalization.web.ts
// and on native platforms to ReactNativeCurrencyLocalization.ts
import ReactNativeCurrencyLocalizationModule from './ReactNativeCurrencyLocalizationModule';
import ReactNativeCurrencyLocalizationView from './ReactNativeCurrencyLocalizationView';
import { ChangeEventPayload, ReactNativeCurrencyLocalizationViewProps } from './ReactNativeCurrencyLocalization.types';

// Get the native constant value.
export const PI = ReactNativeCurrencyLocalizationModule.PI;

export function hello(): string {
  return ReactNativeCurrencyLocalizationModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeCurrencyLocalizationModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeCurrencyLocalizationModule ?? NativeModulesProxy.ReactNativeCurrencyLocalization);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeCurrencyLocalizationView, ReactNativeCurrencyLocalizationViewProps, ChangeEventPayload };
