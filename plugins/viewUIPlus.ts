import 'view-ui-plus/dist/styles/viewuiplus.css'
import ViewUIPlus from 'view-ui-plus'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ViewUIPlus)
})
