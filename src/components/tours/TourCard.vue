<template>
  <article class="card ui-card">
    <div class="cover" :style="{ backgroundImage: tour.cover?.gradient || defaultCover }">
      <div class="chips">
        <span class="chip" :data-kind="tour.style">{{ styleLabel }}</span>
        <span class="chip chip--muted">★ {{ tour.rating }}</span>
      </div>

      <button
        class="fav"
        type="button"
        @click="onToggleFav"
        :aria-label="favorites.has(tour.id) ? $t('favorites.remove') : $t('favorites.add')"
      >
        <span aria-hidden="true">{{ favorites.has(tour.id) ? '♥' : '♡' }}</span>
      </button>
    </div>

    <div class="body">
      <div class="kicker">
        <span class="loc">{{ getText(tour, 'city', locale) }}</span>
        <span class="dot" aria-hidden="true">•</span>
        <span class="muted">{{ tour.nights }} {{ locale === 'fa' ? 'شب' : 'nights' }}</span>
      </div>

      <h3 class="title">{{ getText(tour, 'title', locale) }}</h3>

      <div class="meta">
        <span class="badge">{{ getText(tour, 'country', locale) }}</span>
        <span class="badge">{{ tour.days }} {{ locale === 'fa' ? 'روز' : 'days' }}</span>
        <span class="badge">{{ getText(tour, 'bestSeason', locale) }}</span>
      </div>

      <div class="bottom">
        <div class="price">
          <div class="price__lbl">{{ locale === 'fa' ? 'از' : 'From' }}</div>
          <div class="price__val">{{ formatPrice(tour.price, locale) }}</div>
        </div>

        <RouterLink class="ui-btn ui-btn--primary" :to="`/tours/${tour.id}`">
          {{ $t('tours.actions.details') }}
        </RouterLink>
      </div>

      <div class="seats">
        <span class="seats__dot" aria-hidden="true" />
        <span class="seats__txt">{{ seatsText }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { formatPrice, getText } from '@/utils/format'
import { useFavoritesStore } from '@/stores/favorites'
import { useToastsStore } from '@/stores/toasts'

const props = defineProps({
  tour: { type: Object, required: true }
})

const { locale } = useI18n()
const favorites = useFavoritesStore()
const toasts = useToastsStore()

const defaultCover = 'linear-gradient(135deg, rgba(10,92,255,0.14), rgba(0,180,120,0.12))'

const styleLabel = computed(() => {
  const map = {
    popular: locale.value === 'fa' ? 'پرطرفدار' : 'Popular',
    luxury: locale.value === 'fa' ? 'لوکس' : 'Luxury',
    budget: locale.value === 'fa' ? 'اقتصادی' : 'Budget',
    special: locale.value === 'fa' ? 'ویژه' : 'Special',
    value: locale.value === 'fa' ? 'ارزش خرید' : 'Best value'
  }
  return map[props.tour.style] || (locale.value === 'fa' ? 'پیشنهادی' : 'Featured')
})

const seatsText = computed(() => {
  const n = Number(props.tour.seatsLeft ?? 0)
  if (locale.value === 'fa') return `فقط ${n} ظرفیت باقی‌مانده`
  return `Only ${n} seats left`
})

const onToggleFav = () => {
  favorites.toggle(props.tour.id)
  toasts.push(
    favorites.has(props.tour.id)
      ? locale.value === 'fa'
        ? 'به علاقه‌مندی‌ها اضافه شد'
        : 'Added to favorites'
      : locale.value === 'fa'
        ? 'از علاقه‌مندی‌ها حذف شد'
        : 'Removed from favorites',
    { type: 'success' }
  )
}
</script>

<style scoped>
.card { padding: 0; overflow: hidden; }

.cover {
  position: relative;
  height: 148px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid var(--border);
}

.chips {
  position: absolute;
  left: 12px;
  top: 12px;
  display: flex;
  gap: 8px;
}

.chip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
  background: color-mix(in srgb, var(--surface) 85%, transparent);
  color: var(--text);
  font-weight: 900;
}

.chip--muted { color: var(--muted); }
.chip[data-kind='luxury'] { border-color: color-mix(in srgb, var(--accent) 55%, var(--border)); }
.chip[data-kind='budget'] { border-color: color-mix(in srgb, var(--secondary) 40%, var(--border)); }
.chip[data-kind='special'] { border-color: color-mix(in srgb, var(--primary) 45%, var(--border)); }

.fav {
  position: absolute;
  right: 12px;
  top: 12px;
  width: 40px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  color: var(--text);
  font-size: 18px;
}

.fav:hover { background: color-mix(in srgb, var(--surface) 80%, transparent); }

.body { padding: 12px 14px 14px; }
.kicker { display: flex; align-items: center; gap: 8px; color: var(--muted); font-size: 12px; }
.loc { color: var(--text); font-weight: 1000; }
.dot { opacity: 0.6; }

.title {
  margin: 10px 0 10px;
  font-size: 14px;
  font-weight: 1000;
  line-height: 1.7;
}

.meta { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
.badge {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--primary-weak);
  color: var(--text);
  border: 1px solid color-mix(in srgb, var(--primary) 20%, var(--border));
}

.bottom { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.price__lbl { font-size: 11px; color: var(--muted); }
.price__val { font-size: 14px; font-weight: 1000; }

.seats {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: var(--muted);
  font-size: 12px;
}
.seats__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--accent);
}
</style>
