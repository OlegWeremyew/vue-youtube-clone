<template>
  <a href="#" class="mb-7 group">
    <video-item-thumbnail :index="index"></video-item-thumbnail>
    <video-item-info  :index="index"></video-item-info>
  </a>
</template>

<script>
import VideoItemThumbnail from "./VideoItemThumbnail.vue";
import VideoItemInfo from "./VideoItemInfo.vue";

export default {
  name: "VideoItem",
  components: {VideoItemInfo, VideoItemThumbnail},
  props: {
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>