import { defineConfig } from 'wxt';

export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react', '@wxt-dev/unocss'],
  imports: {
    eslintrc: {
      enabled: 9,
    },
  },
});
