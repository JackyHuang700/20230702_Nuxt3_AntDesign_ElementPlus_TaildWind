<template>
  <div class="v3-margin">
    <button type="button" @click="instance_vueRecaptchaV3.executeRecaptcha">Submit to active reCAPTCHA</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { useReCaptcha } from 'vue-recaptcha-v3'
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
const instance_vueRecaptchaV3 = reactive({
  executeRecaptcha: async () => {
    // (可選) 等待直到 recaptcha 載入完成
    await recaptchaLoaded()
    // 執行 "login" 狀態的 reCAPTCHA
    const token = await executeRecaptcha('login')
    console.log("🚀 ~ file: Index.vue:18 ~ executeRecaptcha: ~ token:", token)
    // 後續傳給後端進行認證
  },
})
</script>

<style scoped>
.v3-margin {
  margin-top: 20px;
}
</style>
