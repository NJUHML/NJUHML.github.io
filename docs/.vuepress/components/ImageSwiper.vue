<template>
  <ClientOnly>
    <Swiper 
      class="news-swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :style="swiperStyle"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="{
        delay: 3000, // 3秒切换一次
        disableOnInteraction: false // 用户操作后继续自动播放
      }"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <div class="news-swiper__slide">
          <img
            :src="img"
            :alt="'图片' + (index + 1)"
            class="news-swiper__image"
          >
        </div>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { ref, onMounted, computed } from 'vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    // 基本尺寸配置
    width: {
      type: String,
      default: '80%'
    },
    height: {
      type: String,
      default: '400px'
    },
  },
  
  setup(props) {
    const swiperStyle = computed(() => ({
      width: props.width,
      height: props.height
    }));

    const onSwiper = () => {};
    const onSlideChange = () => {};
    const images = ref([])
    
    onMounted(() => {
      // 获取 /news/picture/ 目录下的所有图片
      // const imageFiles = import.meta.glob('/news_images/*.{jpg,png,gif,webp}')
      
      // // 转换为图片路径数组
      // const tempArray = []
      // for (const path in imageFiles) {
      //   tempArray.push(path)
      // }
      // images.value = tempArray.reverse()

      images.value = [
      '/news_images/1.webp',
      '/news_images/2.webp',
      '/news_images/3.webp',
      '/news_images/4.webp',
      '/news_images/5.webp',
      '/news_images/6.webp',
      '/news_images/7.webp',
      '/news_images/8.webp',
      '/news_images/9.webp',
      '/news_images/10.webp',
      '/news_images/11.webp',
      ]
    })

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
      images,
      swiperStyle,
    }
  }
}
</script>

<style scoped>
.news-swiper {
  max-width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: #f5f7fa;
}

.news-swiper :deep(.swiper-wrapper),
.news-swiper :deep(.swiper-slide) {
  height: 100%;
}

.news-swiper__slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f7fa;
}

.news-swiper__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 719px) {
  .news-swiper {
    border-radius: 8px;
  }
}
</style>
