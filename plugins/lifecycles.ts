export default defineNuxtPlugin((nuxtApp) => {
  let _runTest = true
  // _runTest = true
  if (_runTest) {
    // https://nuxt.com/docs/api/advanced/hooks

    nuxtApp.hook('app:created', () => {
      console.log('🚀 ~ file: lifecycles.ts:6 ~ nuxtApp.hook ~ app:created:')
    })
    nuxtApp.hook('app:data:refresh', () => {
      console.log('🚀 ~ file: lifecycles.ts:6 ~ nuxtApp.hook ~ app:data:refresh:')
    })
    nuxtApp.hook('app:rendered', () => {
      console.log('🚀 ~ file: lifecycles.ts:6 ~ nuxtApp.hook ~ app:rendered:')
    })
    nuxtApp.hook('app:mounted', () => {
      console.log('🚀 ~ file: lifecycles.ts:6 ~ nuxtApp.hook ~ app:mounted:')
    })
    nuxtApp.hook('page:transition:finish', () => {
      console.log('🚀 ~ file: lifecycles.ts:6 ~ nuxtApp.hook ~ page:transition:finish:')
    })
    nuxtApp.hook('page:finish', () => {
      console.log('🚀 ~ file: lifecycles.ts:6 ~ nuxtApp.hook ~ page:finish:')
    })
  }
})
