import { defineClientConfig } from '@vuepress/client'
import ImageSwiper from './components/ImageSwiper.vue'
import LatestNewsImages from './components/LatestNewsImages.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ImageSwiper', ImageSwiper) // 注册为 <ImageSwiper>
    app.component('LatestNewsImages', LatestNewsImages)
  },

})
