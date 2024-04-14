import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';

const url = new URL('./src', import.meta.url);

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(url)
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					  @import "${url}/assets/styles/_variables.scss";
					  @import "${url}/assets/styles/_mixin.scss";
                      @import "${url}/assets/styles/_media.scss";
					`
      }
    }
  },
})
