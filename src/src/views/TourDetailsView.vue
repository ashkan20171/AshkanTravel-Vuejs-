<template>
  <div class="container wrap">
    <RouterLink to="/tours" class="back">← {{ locale === 'fa' ? 'بازگشت' : 'Back' }}</RouterLink>

    <div v-if="tour" class="grid">
      <section class="main">
        <div class="hero ui-card" :style="{ backgroundImage: tour.cover?.gradient }">
          <div class="hero__top">
            <span class="pill">★ {{ tour.rating }}</span>
            <button class="pill pill--ghost" type="button" @click="toggleFav">
              {{ favorites.has(tour.id) ? (locale === 'fa' ? '♥ علاقه‌مندی' : '♥ Favorite') : locale === 'fa' ? '♡ افزودن' : '♡ Add' }}
            </button>
          </div>
          <div class="hero__text">
            <div class="hero__kicker">
              {{ getText(tour, 'city', locale) }} • {{ getText(tour, 'country', locale) }}
            </div>
            <h1 class="title">{{ getText(tour, 'title', locale) }}</h1>
            <p class="meta">
              {{ tour.days }} {{ locale === 'fa' ? 'روز' : 'days' }} • {{ tour.nights }} {{ locale === 'fa' ? 'شب' : 'nights' }} •
              {{ getText(tour, 'bestSeason', locale) }}
            </p>
          </div>
        </div>

        <div class="section ui-card">
          <h2 class="h">{{ locale === 'fa' ? 'هایلایت‌ها' : 'Highlights' }}</h2>
          <ul class="list">
            <li v-for="(h, i) in tour.highlights" :key="i">{{ locale === 'fa' ? h.fa : h.en }}</li>
          </ul>
        </div>

        <div class="section ui-card">
          <h2 class="h">{{ locale === 'fa' ? 'برنامه سفر' : 'Itinerary' }}</h2>
          <ol class="steps">
            <li v-for="(s, i) in tour.itinerary" :key="i">
              <span class="stepNo">{{ i + 1 }}</span>
              <span>{{ locale === 'fa' ? s.fa : s.en }}</span>
            </li>
          </ol>
        </div>

        <div class="section ui-card">
          <h2 class="h">{{ locale === 'fa' ? 'شامل' : 'Includes' }}</h2>
          <ul class="list">
            <li v-for="(x, i) in tour.includes" :key="i">{{ locale === 'fa' ? x.fa : x.en }}</li>
          </ul>
        </div>
      </section>

      <aside class="side">
        <div class="ui-card sideCard">
          <div class="price">
            <span class="muted">{{ locale === 'fa' ? 'قیمت از' : 'From' }}</span>
            <div class="price__val">{{ formatPrice(tour.price, locale) }}</div>
          </div>

          <div class="seat">
            <span class="seat__dot" aria-hidden="true" />
            <span class="muted">{{ locale === 'fa' ? `فقط ${tour.seatsLeft} ظرفیت باقی‌مانده` : `Only ${tour.seatsLeft} seats left` }}</span>
          </div>

          <div class="actions">
            <a class="ui-btn ui-btn--primary" href="#booking">{{ locale === 'fa' ? 'درخواست رزرو' : 'Request booking' }}</a>
            <button class="ui-btn ui-btn--ghost" type="button" @click="share">
              {{ locale === 'fa' ? 'اشتراک‌گذاری' : 'Share' }}
            </button>
          </div>
        </div>

        <div id="booking" class="ui-card">
          <BookingForm :tour-title="getText(tour, 'title', locale)" />
        </div>
      </aside>
    </div>

    <div v-else class="notFound">{{ locale === 'fa' ? 'تور پیدا نشد' : 'Tour not found' }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { tours } from '@/data/tours'
import { formatPrice, getText } from '@/utils/format'
import BookingForm from '@/components/tours/BookingForm.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useToastsStore } from '@/stores/toasts'

const route = useRoute()
const { locale } = useI18n()
const favorites = useFavoritesStore()
const toasts = useToastsStore()

const tour = computed(() => tours.find((t) => String(t.id) === String(route.params.id)))

const toggleFav = () => {
  if (!tour.value) return
  favorites.toggle(tour.value.id)
  toasts.push(
    favorites.has(tour.value.id)
      ? locale.value === 'fa'
        ? 'به علاقه‌مندی‌ها اضافه شد'
        : 'Added to favorites'
      : locale.value === 'fa'
        ? 'از علاقه‌مندی‌ها حذف شد'
        : 'Removed from favorites',
    { type: 'success' }
  )
}

const share = async () => {
  if (!tour.value) return
  const url = window.location.href
  const title = getText(tour.value, 'title', locale.value)
  try {
    if (navigator.share) {
      await navigator.share({ title, url })
      return
    }
    await navigator.clipboard.writeText(url)
    toasts.push(locale.value === 'fa' ? 'لینک کپی شد ✅' : 'Link copied ✅', { type: 'success' })
  } catch {
    toasts.push(locale.value === 'fa' ? 'خطا در اشتراک‌گذاری' : 'Share failed', { type: 'danger' })
  }
}
</script>

<style scoped>
.wrap { padding-top: 12px; }
.back { text-decoration: none; color: var(--primary); font-weight: 900; }
.grid { margin-top: 14px; display: grid; grid-template-columns: 1.8fr 1fr; gap: 14px; align-items: start; }

.hero {
  padding: 14px;
  border-radius: 22px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.hero__top { display: flex; justify-content: space-between; align-items: center; }
.pill {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-weight: 1000;
  font-size: 12px;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
  background: color-mix(in srgb, var(--surface) 82%, transparent);
}
.pill--ghost { cursor: pointer; }
.hero__text { margin-top: 20px; }
.hero__kicker { color: var(--muted); font-size: 13px; font-weight: 1000; }
.title { margin: 10px 0 10px; font-size: 24px; font-weight: 1000; line-height: 1.6; }
.meta { margin: 0; color: var(--muted); }

.section { margin-top: 14px; }
.h { margin: 0 0 10px; font-size: 14px; font-weight: 1000; }
.list { margin: 0; padding-inline-start: 18px; color: var(--text); }
.list li { margin: 8px 0; color: var(--muted); }

.steps { margin: 0; padding-inline-start: 0; list-style: none; display: grid; gap: 10px; }
.steps li { display: grid; grid-template-columns: 30px 1fr; gap: 10px; align-items: start; color: var(--muted); }
.stepNo {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  font-weight: 1000;
  background: var(--primary-weak);
  border: 1px solid color-mix(in srgb, var(--primary) 20%, var(--border));
  color: var(--text);
}

.sideCard { position: sticky; top: 76px; }
.price { display: grid; gap: 8px; }
.price__val { font-size: 18px; font-weight: 1000; }
.muted { color: var(--muted); font-size: 13px; }
.seat { display: flex; align-items: center; gap: 10px; margin-top: 12px; }
.seat__dot { width: 10px; height: 10px; border-radius: 999px; background: var(--accent); }
.actions { margin-top: 14px; display: grid; gap: 10px; }

.notFound { margin-top: 16px; color: var(--danger); font-weight: 900; }

@media (max-width: 980px) {
  .grid { grid-template-columns: 1fr; }
  .sideCard { position: static; }
}
</style>
