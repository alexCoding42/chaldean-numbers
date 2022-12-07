import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import Storage from '@react-native-async-storage/async-storage';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import React from 'react';
import { AlertNotificationRoot } from 'react-native-alert-notification';

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
          <AlertNotificationRoot theme='light'>
            <SafeAreaProvider>
              <Navigation />
              <StatusBar style='light' />
            </SafeAreaProvider>
          </AlertNotificationRoot>
        </NhostApolloProvider>
      </NhostReactProvider>
    );
  }
}
