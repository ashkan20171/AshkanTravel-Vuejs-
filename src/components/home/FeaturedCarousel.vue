<template>
  <section class="section" aria-label="Featured destinations">
    <div class="container">
      <div class="head">
        <div class="ui-badge">{{ $t('home.featured.badge') }}</div>
        <h2 class="ui-section-title">{{ $t('home.featured.title') }}</h2>
        <p class="ui-section-subtitle">{{ $t('home.featured.subtitle') }}</p>
      </div>

      <div class="carousel ui-card glass" role="region" :aria-label="$t('home.featured.aria')">
        <button class="nav nav--prev ui-btn ui-btn--ghost" type="button" @click="prev" :aria-label="$t('actions.prev')">
          ‹
        </button>

        <div class="viewport">
          <transition name="fade" mode="out-in">
            <article :key="active.id" class="slide" :class="active.theme">
              <div class="slide__content">
                <div class="kicker">{{ active.kicker }}</div>
                <h3 class="slide__title">{{ active.title }}</h3>
                <p class="slide__desc">{{ active.desc }}</p>

                <div class="meta">
                  <span class="chip">{{ active.days }}</span>
                  <span class="chip">{{ active.type }}</span>
                  <span class="chip chip--accent">{{ active.offer }}</span>
                </div>

                <div class="cta">
                  <RouterLink class="ui-btn ui-btn--accent" to="/tours">{{ $t('home.featured.cta') }}</RouterLink>
                  <button class="ui-btn ui-btn--ghost" type="button" @click="goTo(active.query)">
                    {{ $t('home.featured.secondaryCta') }}
                  </button>
                </div>
              </div>

              <div class="visual" aria-hidden="true">
                <div class="blob blob--1"></div>
                <div class="blob blob--2"></div>
                <div class="city">{{ active.city }}</div>
              </div>
            </article>
          </transition>
        </div>

        <button class="nav nav--next ui-btn ui-btn--ghost" type="button" @click="next" :aria-label="$t('actions.next')">
          ›
        </button>

        <div class="dots" role="tablist" :aria-label="$t('home.featured.dotsAria')">
          <button
            v-for="(s, i) in slides"
            :key="s.id"
            class="dot"
            :class="{ active: i === idx }"
            type="button"
            role="tab"
            :aria-selected="i === idx"
            @click="set(i)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const slides = [
  {
    id: 1,
    theme: 't1',
    kicker: 'TRUST • COMFORT',
    title: 'Istanbul City Break',
    desc: 'رزرو سریع + پشتیبانی ۲۴/۷ — تجربه شهری مطمئن با قیمت‌های شفاف.',
    city: 'Istanbul',
    days: '5 Days',
    type: 'City',
    offer: '🔥 Hot deal',
    query: 'istanbul'
  },
  {
    id: 2,
    theme: 't2',
    kicker: 'SEA • RELAX',
    title: 'Antalya Escape',
    desc: 'آرامش ساحل + هتل‌های منتخب — مناسب برای شارژ دوباره و هیجان تفریح.',
    city: 'Antalya',
    days: '6 Days',
    type: 'Beach',
    offer: '✨ Best season',
    query: 'antalya'
  },
  {
    id: 3,
    theme: 't3',
    kicker: 'NATURE • ADVENTURE',
    title: 'Georgia Adventure',
    desc: 'ترکیب اعتماد و هیجان — طبیعت بکر، برنامه‌ریزی دقیق و تجربه متفاوت.',
    city: 'Tbilisi',
    days: '4 Days',
    type: 'Adventure',
    offer: '⚡ Limited seats',
    query: 'georgia'
  }
]

const idx = ref(0)
const active = computed(() => slides[idx.value])

let timer = null
const start = () => {
  stop()
  timer = window.setInterval(() => next(), 5500)
}
const stop = () => {
  if (timer) window.clearInterval(timer)
  timer = null
}

const set = (i) => {
  idx.value = i
  start()
}
const next = () => set((idx.value + 1) % slides.length)
const prev = () => set((idx.value - 1 + slides.length) % slides.length)

const goTo = (q) => {
  router.push({ path: '/tours', query: q ? { q } : {} })
}

onMounted(() => start())
onBeforeUnmount(() => stop())
</script>

<style scoped>
.head { margin-bottom: 14px; }

.carousel {
  position: relative;
  padding: 16px 54px 14px;
  overflow: hidden;
}

.viewport { min-height: 260px; }

.slide {
  border-radius: 22px;
  border: 1px solid color-mix(in srgb, var(--border) 65%, transparent);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  min-height: 260px;
}

.slide__content { padding: 22px 22px 18px; }
.kicker {
  font-weight: 1000;
  letter-spacing: 0.12em;
  font-size: 12px;
  opacity: 0.9;
}
.slide__title {
  margin: 10px 0 8px;
  font-weight: 1100;
  font-size: 26px;
}
.slide__desc { margin: 0; color: var(--muted); line-height: 1.9; max-width: 62ch; }

.meta { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  font-size: 12px;
  font-weight: 900;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
  background: color-mix(in srgb, var(--bg-elev) 70%, transparent);
}
.chip--accent {
  border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  background: color-mix(in srgb, var(--accent-weak) 90%, transparent);
}

.cta { margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap; }

.visual {
  position: relative;
  display: grid;
  place-items: center;
  padding: 18px;
}

.city {
  font-size: 34px;
  font-weight: 1100;
  letter-spacing: -0.02em;
  opacity: 0.95;
}

.blob {
  position: absolute;
  border-radius: 999px;
  filter: blur(18px);
  opacity: 0.65;
}
.blob--1 { width: 180px; height: 180px; top: 24px; right: 30px; }
.blob--2 { width: 220px; height: 220px; bottom: -40px; left: 10px; }

.t1 { background: linear-gradient(135deg, rgba(30,58,138,0.16), rgba(13,148,136,0.10)); }
.t1 .blob--1 { background: rgba(59,130,246,0.55); }
.t1 .blob--2 { background: rgba(245,158,11,0.35); }

.t2 { background: linear-gradient(135deg, rgba(13,148,136,0.16), rgba(245,158,11,0.08)); }
.t2 .blob--1 { background: rgba(86,226,184,0.45); }
.t2 .blob--2 { background: rgba(251,146,60,0.30); }

.t3 { background: linear-gradient(135deg, rgba(30,58,138,0.14), rgba(245,158,11,0.10)); }
.t3 .blob--1 { background: rgba(122,162,255,0.42); }
.t3 .blob--2 { background: rgba(251,191,36,0.35); }

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 999px;
  padding: 0;
  font-size: 22px;
  line-height: 1;
}
.nav--prev { left: 10px; }
.nav--next { right: 10px; }

.dots {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
  background: color-mix(in srgb, var(--bg-elev) 70%, transparent);
  cursor: pointer;
}
.dot.active {
  width: 22px;
  background: var(--grad-primary);
  border-color: transparent;
}

.fade-enter-active, .fade-leave-active { transition: opacity 180ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 920px) {
  .carousel { padding: 14px; }
  .nav { display: none; }
  .slide { grid-template-columns: 1fr; }
  .visual { min-height: 160px; }
}
</style>
