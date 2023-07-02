import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueReCaptcha, {
    // 請換成你註冊的 SiteKey
    // Please change to your SiteKey.
    siteKey: '6Ld11-omAAAAAJ2mPRgRkwum4JAH0IxeFhOQF8oD',
    loaderOptions: {
      useRecaptchaNet: true,
    },
  })
})
