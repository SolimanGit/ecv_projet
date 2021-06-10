<template>
  <div class="bg-blue-dark">
    <div class="grid grid-cols-3 grid-row-3 px-5 pt-5 gap-5 text-gray">
      <div class="row-span-1 col-span-1 rounded-lg bg-dark-light"><AiringToday /></div>
      <div class="row-span-1 col-span-2 bg-dark-light"><Popularity type="ANIME"/></div>
      <div class="row-span-1 col-start-2 col-end-4 bg-dark-light"><Popularity type="MANGA"/></div>
    </div>
  </div>
</template>

<script>
import Popularity from '@/components/Popularity.vue'
import AiringToday from '@/components/AiringToday.vue'

export default {
  name: 'Home',
  components: {
    Popularity,
    AiringToday
  }
}
</script>
