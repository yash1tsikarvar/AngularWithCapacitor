import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tenant.app',
  appName: 'te-tenant',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
