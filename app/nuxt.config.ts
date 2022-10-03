// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/styles/reset.css',
  ],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "../assets/styles/main.scss";
            @import "../assets/styles/_variables.scss";
          `
        },
      },
    },
    server: {
      watch: {
        //	TODO: きちんと設定して、ts-ignoreを削除する
        // @ts-ignore
        usePolling: true,
      },
    },
  },
  plugins: [
    '@/plugins/fontawesome',
  ],
});
