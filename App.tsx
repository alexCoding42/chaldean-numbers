import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import Storage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import React from 'react';

const NHOST_SUBDOMAIN = Constants?.expoConfig?.extra?.nhostSubdomain;
const NHOST_REGION = Constants?.expoConfig?.extra?.nhostRegion;

const nhost = new NhostClient({
  subdomain: NHOST_SUBDOMAIN,
  region: NHOST_REGION,
  clientStorageType: 'react-native',
  clientStorage: Storage,
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NhostReactProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar style='light' />
          </SafeAreaProvider>
        </NhostApolloProvider>
      </NhostReactProvider>
    );
  }
}
