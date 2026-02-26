<template>
  <section class="section" aria-label="Testimonials">
    <div class="container">
      <div class="head">
        <div class="ui-badge">{{ $t('home.testimonials.badge') }}</div>
        <h2 class="ui-section-title">{{ $t('home.testimonials.title') }}</h2>
        <p class="ui-section-subtitle">{{ $t('home.testimonials.subtitle') }}</p>
      </div>

      <div class="wrap ui-card glass">
        <Swiper
          :modules="modules"
          :loop="true"
          :autoplay="{ delay: 4800, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :breakpoints="breakpoints"
          class="sw"
        >
          <SwiperSlide v-for="(x, i) in items" :key="i">
            <article class="card">
              <div class="top">
                <div class="avatar" aria-hidden="true">{{ x.avatar }}</div>
                <div class="meta">
                  <div class="name">{{ x.name }}</div>
                  <div class="sub">{{ x.sub }}</div>
                </div>
                <div class="rate" aria-label="rating">★ {{ x.rate }}</div>
              </div>
              <p class="quote">“{{ x.quote }}”</p>
              <div class="tag">{{ x.tag }}</div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const { locale, t } = useI18n()
const modules = [Autoplay, Pagination]
const breakpoints = {
  0: { slidesPerView: 1, spaceBetween: 12 },
  900: { slidesPerView: 2, spaceBetween: 12 },
  1200: { slidesPerView: 3, spaceBetween: 12 }
}

const items = computed(() => {
  const fa = [
    { avatar: 'م', name: 'مینا', sub: 'تور استانبول', rate: '4.9', quote: 'همه چیز دقیق و منظم بود، پشتیبانی واقعاً عالی.', tag: 'رزرو امن' },
    { avatar: 'ع', name: 'علی', sub: 'تور دبی', rate: '4.8', quote: 'هتل عالی بود و برنامه سفر هیجان‌انگیز. دوباره رزرو می‌کنم.', tag: 'تجربه هیجان‌انگیز' },
    { avatar: 'س', name: 'سارا', sub: 'تور آنتالیا', rate: '4.9', quote: 'خیلی راحت رزرو کردم و همه چیز شفاف بود.', tag: 'شفافیت' },
    { avatar: 'ر', name: 'رضا', sub: 'تور پاریس', rate: '4.7', quote: 'سفر بدون استرس، دقیقاً همون چیزی که می‌خواستم.', tag: 'آرامش' },
    { avatar: 'ن', name: 'نرگس', sub: 'تور لوکس', rate: '4.9', quote: 'کیفیت خدمات نسبت به قیمت عالی بود.', tag: 'ارزش خرید' }
  ]
  const en = [
    { avatar: 'M', name: 'Mina', sub: 'Istanbul trip', rate: '4.9', quote: 'Everything was organized and support was genuinely great.', tag: 'Secure booking' },
    { avatar: 'A', name: 'Ali', sub: 'Dubai trip', rate: '4.8', quote: 'Great hotel and an exciting itinerary. Will book again.', tag: 'Excitement' },
    { avatar: 'S', name: 'Sara', sub: 'Antalya trip', rate: '4.9', quote: 'Super easy booking and everything was transparent.', tag: 'Transparency' },
    { avatar: 'R', name: 'Reza', sub: 'Paris trip', rate: '4.7', quote: 'A stress-free trip, exactly what I wanted.', tag: 'Peace of mind' },
    { avatar: 'N', name: 'Narges', sub: 'Luxury tour', rate: '4.9', quote: 'Service quality was excellent for the price.', tag: 'Great value' }
  ]
  return locale.value === 'fa' ? fa : en
})
</script>

<style scoped>
.wrap{
  padding: 14px;
  border-radius: 22px;
}
.card{
  height: 100%;
  padding: 18px 16px;
  border-radius: 20px;
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(255,255,255,.55);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 45px rgba(2,6,23,.08);
  display:flex;
  flex-direction:column;
  gap: 12px;
}
.top{
  display:flex;
  align-items:center;
  gap: 10px;
}
.avatar{
  width: 44px; height: 44px;
  border-radius: 16px;
  display:grid; place-items:center;
  font-weight: 900;
  background: linear-gradient(135deg, rgba(30,58,138,.16), rgba(13,148,136,.14));
  border: 1px solid rgba(30,58,138,.20);
}
.meta{ flex:1; }
.name{ font-weight: 900; }
.sub{ color: var(--muted); font-weight: 700; font-size: 12px; }
.rate{
  font-weight: 900;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(245,158,11,.16);
  border: 1px solid rgba(245,158,11,.22);
}
.quote{
  margin:0;
  color: rgba(15,23,42,.88);
  line-height: 1.7;
}
.tag{
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(59,130,246,.12);
  border: 1px solid rgba(59,130,246,.18);
  font-weight: 800;
  color: rgba(15,23,42,.85);
}
</style>
