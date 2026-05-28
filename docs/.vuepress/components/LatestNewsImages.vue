<template>
  <div v-if="images.length" class="latest-news-images" :class="{ 'latest-news-images--single': images.length === 1 }">
    <div
      v-for="(img, index) in images"
      :key="img"
      class="latest-news-images__item"
    >
      <img
        :src="img"
        :alt="`Latest news image ${index + 1}`"
        class="latest-news-images__img"
      >
    </div>
  </div>
</template>

<script>
import latestNewsImages from '../generated/latestNewsImages.js'

export default {
  setup() {
    return {
      images: latestNewsImages,
    }
  },
}
</script>

<style scoped>
.latest-news-images {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.5rem;
}

.latest-news-images--single {
  grid-template-columns: minmax(0, 1fr);
}

.latest-news-images__item {
  overflow: hidden;
  border-radius: 12px;
  background: #f5f7fa;
  aspect-ratio: 16 / 9;
}

.latest-news-images__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 719px) {
  .latest-news-images {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
