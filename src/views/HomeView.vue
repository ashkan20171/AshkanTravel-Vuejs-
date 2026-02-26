<template>
  <HeroSlider @openVideo="onOpenVideo" />

  <TrustBar />

  <section v-reveal class="home-block">
    <StatsSection />
  </section>

  <section v-reveal class="home-block">
    <FeaturedCarousel />
  </section>

  <section v-reveal class="home-block">
    <ServicesSection />
  </section>

  <section v-reveal class="home-block">
    <ToursSection />
  </section>

  <section v-reveal class="home-block">
    <TestimonialsSection />
  </section>

  <section v-reveal class="home-block">
    <VideoSection @open="onOpenVideo" />
  </section>

  <VideoModal
    :open="videoOpen"
    :title="videoTitle"
    :hint="videoHint"
    :youtube-id="videoMode === 'youtube' ? youtubeId : ''"
    :video-src="videoMode === 'mp4' ? mp4Src : ''"
    @close="videoOpen = false"
  />
</template>

<script setup>
import { computed, ref } from 'vue'
import HeroSlider from '@/components/home/HeroSlider.vue'
import TrustBar from '@/components/home/TrustBar.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import FeaturedCarousel from '@/components/home/FeaturedCarousel.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import ToursSection from '@/components/home/ToursSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import VideoSection from '@/components/home/VideoSection.vue'
import VideoModal from '@/components/ui/VideoModal.vue'

const videoOpen = ref(false)
const videoMode = ref('youtube')

// پیش‌فرض‌ها (قابل تغییر)
const youtubeId = 'dQw4w9WgXcQ'
const mp4Src = '/videos/travel.mp4' // فایل را در public/videos قرار بده

const onOpenVideo = (mode = 'youtube') => {
  videoMode.value = mode
  videoOpen.value = true
}

const videoTitle = computed(() => (videoMode.value === 'mp4' ? 'تیزر (MP4)' : 'ویدیو'))
const videoHint = computed(() =>
  videoMode.value === 'mp4'
    ? 'اگر فایل را نداری، یک mp4 با نام travel.mp4 داخل public/videos بگذار.'
    : 'برای تغییر ویدیو، youtubeId را در HomeView.vue عوض کن.'
)
</script>

<style scoped>
.home-block{ margin-top: 22px; }
</style>
