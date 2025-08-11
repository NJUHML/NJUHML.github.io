import { defineClientConfig } from '@vuepress/client'
import ImageSwiper from './components/ImageSwiper.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ImageSwiper', ImageSwiper) // 注册为 <ImageSwiper>
  },

})