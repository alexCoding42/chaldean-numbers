import 'dotenv/config';

const nhostSubdomain = process.env.NHOST_SUBDOMAIN;
const nhostRegion = process.env.NHOST_REGION;

export default {
  expo: {
    name: 'chaldean-numbers',
    slug: 'chaldean-numbers',
    version: '1.0.2',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.alex.dev.chaldeannumbers',
      buildNumber: '1.0.2',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.alex_dev.chaldeannumbers',
      versionCode: 3,
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    extra: {
      eas: {
        projectId: '8a1916f8-01cf-40a8-9707-9287cb7c273f',
      },
      nhostSubdomain: nhostSubdomain,
      nhostRegion: nhostRegion,
    },
  },
};
