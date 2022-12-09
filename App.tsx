import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import Storage from '@react-native-async-storage/async-storage';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import React from 'react';

const nhost = new NhostClient({
  subdomain: 'pyfkyftcjbknfrcbvxtw',
  region: 'eu-west-2',
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
