<template>
  <section class="hero" aria-label="Hero slider">
    <Swiper
      :modules="modules"
      :loop="true"
      :autoplay="{ delay: 4200, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :speed="950"
      class="hero__swiper"
    >
      <SwiperSlide v-for="s in slides" :key="s.id">
        <div class="hero__slide" :style="{ backgroundImage: `url(${s.image})` }">
          <div class="hero__overlay"></div>

          <div class="container hero__content">
            <div class="hero__badge">{{ s.badge }}</div>

            <h1 class="hero__title">{{ s.title }}</h1>
            <p class="hero__desc">{{ s.subtitle }}</p>

            <div class="hero__actions">
              <RouterLink to="/tours" class="ui-btn ui-btn-accent">
                {{ $t('actions.exploreTours') }}
              </RouterLink>

              <button class="ui-btn ui-btn-ghost" type="button" @click="$emit('openVideo', 'youtube')">
                {{ $t('actions.watchVideo') }}
              </button>

              <button class="ui-btn ui-btn-soft" type="button" @click="$emit('openVideo', 'mp4')">
                {{ $t('actions.watchTrailer') }}
              </button>
            </div>

            <div class="hero__mini">
              <div class="mini">
                <div class="k">+120</div>
                <div class="t">تور فعال</div>
              </div>
              <div class="mini">
                <div class="k">98%</div>
                <div class="t">رضایت</div>
              </div>
              <div class="mini">
                <div class="k">24/7</div>
                <div class="t">پشتیبانی</div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

defineEmits(['openVideo'])

const modules = [Autoplay, Pagination]

const slides = [
  {
    id: 1,
    badge: 'اعتماد + هیجان',
    title: 'سفر بعدی‌ات را با خیال راحت رزرو کن',
    subtitle: 'رزرو امن، پشتیبانی واقعی و تجربه‌های هیجان‌انگیز برای ساختن خاطره‌های جدید.',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 2,
    badge: 'طبیعت + آرامش',
    title: 'از ساحل تا جنگل؛ مقصد را تو انتخاب کن',
    subtitle: 'پکیج‌های متنوع با قیمت شفاف—فقط انتخاب کن، بقیه‌اش با ما.',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 3,
    badge: 'City Break',
    title: 'شهرگردی‌های جذاب و برنامه‌ریزی دقیق',
    subtitle: 'مسیرهای پیشنهادی، زمان‌بندی هوشمند و تجربه محلی واقعی.',
    image:
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=2000&q=80',
  },
]
</script>

<style scoped>
.hero{
  border-radius: var(--r-xl);
  overflow: hidden;
  box-shadow: 0 28px 90px rgba(30,58,138,0.18);
}
.hero__swiper{
  height: clamp(440px, 62vh, 690px);
}
.hero__slide{
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}
.hero__overlay{
  position:absolute; inset:0;
  background:
    radial-gradient(circle at 18% 20%, rgba(245,158,11,.22), transparent 40%),
    radial-gradient(circle at 78% 18%, rgba(13,148,136,.20), transparent 42%),
    linear-gradient(120deg, rgba(2,6,23,.80), rgba(30,58,138,.55), rgba(13,148,136,.35));
}
.hero__content{
  position: relative;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 44px 18px;
  color: #fff;
}
.hero__badge{
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.22);
  backdrop-filter: blur(12px);
  font-weight: 800;
  letter-spacing: .2px;
}
.hero__title{
  font-size: clamp(28px, 4.2vw, 54px);
  line-height: 1.05;
  text-shadow: 0 18px 60px rgba(0,0,0,.38);
}
.hero__desc{
  max-width: 62ch;
  opacity: .94;
  font-size: clamp(14px, 1.65vw, 18px);
}
.hero__actions{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
}
.hero__mini{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}
.mini{
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.18);
  backdrop-filter: blur(10px);
  min-width: 112px;
}
.k{
  font-weight: 900;
  font-size: 18px;
}
.t{
  opacity: .92;
  font-size: 13px;
}
</style>
