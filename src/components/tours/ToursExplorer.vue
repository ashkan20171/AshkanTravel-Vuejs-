<template>
  <section>
    <div class="head">
      <div>
        <h1 class="title">{{ $t('toursPage.title') }}</h1>
        <p class="desc">{{ $t('toursPage.desc') }}</p>
      </div>

      <RouterLink class="ui-btn ui-btn--ghost" to="/favorites">
        {{ $t('menu.favorites') }}
        <span v-if="favorites.count" class="count" aria-label="Favorites count">{{ favorites.count }}</span>
      </RouterLink>
    </div>

    <div class="panel ui-card">
      <div class="row">
        <label class="field">
          <span class="lbl">{{ $t('toursPage.filters.search') }}</span>
          <input v-model.trim="q" class="ui-input" :placeholder="$t('toursPage.filters.searchPh')" />
        </label>

        <label class="field">
          <span class="lbl">{{ $t('toursPage.filters.category') }}</span>
          <select v-model="category" class="ui-input">
            <option value="all">{{ $t('toursPage.filters.all') }}</option>
            <option value="city">{{ $t('toursPage.filters.city') }}</option>
            <option value="beach">{{ $t('toursPage.filters.beach') }}</option>
            <option value="luxury">{{ $t('toursPage.filters.luxury') }}</option>
          </select>
        </label>

        <label class="field">
          <span class="lbl">{{ $t('toursPage.filters.nights') }}</span>
          <select v-model.number="minNights" class="ui-input">
            <option :value="0">{{ $t('toursPage.filters.any') }}</option>
            <option :value="2">2+</option>
            <option :value="3">3+</option>
            <option :value="4">4+</option>
            <option :value="5">5+</option>
          </select>
        </label>

        <label class="field">
          <span class="lbl">{{ $t('toursPage.filters.sort') }}</span>
          <select v-model="sort" class="ui-input">
            <option value="popular">{{ $t('toursPage.sort.popular') }}</option>
            <option value="priceAsc">{{ $t('toursPage.sort.priceAsc') }}</option>
            <option value="priceDesc">{{ $t('toursPage.sort.priceDesc') }}</option>
            <option value="rating">{{ $t('toursPage.sort.rating') }}</option>
          </select>
        </label>
      </div>

      <div class="row">
        <label class="field field--grow">
          <span class="lbl">{{ $t('toursPage.filters.maxPrice') }}</span>
          <input v-model.number="maxPrice" class="ui-input" type="number" min="0" step="500000" />
        </label>

        <label class="check">
          <input v-model="onlyAvailable" type="checkbox" />
          <span>{{ $t('toursPage.filters.onlyAvailable') }}</span>
        </label>

        <button class="ui-btn ui-btn--ghost" type="button" @click="reset">
          {{ $t('toursPage.filters.reset') }}
        </button>
      </div>
    </div>

    <div class="summary">
      <span class="muted">{{ $t('toursPage.summary', { n: filtered.length }) }}</span>
    </div>

    <div class="grid">
      <template v-if="isLoading">
        <div v-for="n in 6" :key="n" class="sk ui-card" aria-hidden="true">
          <div class="sk__img" />
          <div class="sk__line" />
          <div class="sk__line sk__line--sm" />
        </div>
      </template>

      <template v-else>
        <TourCard v-for="tour in paged" :key="tour.id" :tour="tour" />
      </template>
    </div>

    <div v-if="!isLoading && !paged.length" class="ui-card empty">
      <div class="empty__emoji" aria-hidden="true">🔎</div>
      <div class="empty__txt">{{ $t('toursPage.empty') }}</div>
    </div>

    <div v-if="pages > 1" class="pager" role="navigation" aria-label="Pagination">
      <button class="ui-btn ui-btn--ghost" :disabled="page === 1" @click="page--">{{ $t('pager.prev') }}</button>
      <div class="pager__mid">{{ page }} / {{ pages }}</div>
      <button class="ui-btn ui-btn--ghost" :disabled="page === pages" @click="page++">{{ $t('pager.next') }}</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { tours } from '@/data/tours'
import { getText } from '@/utils/format'
import TourCard from '@/components/tours/TourCard.vue'
import { useFavoritesStore } from '@/stores/favorites'

const { locale } = useI18n()
const route = useRoute()
const favorites = useFavoritesStore()

const q = ref('')
const isLoading = ref(false)
let tmr = 0
const category = ref('all')
const minNights = ref(0)
const maxPrice = ref(40000000)
const onlyAvailable = ref(false)
const sort = ref('popular')

const page = ref(1)
const pageSize = 6

watch([q, category, minNights, sort], () => {
  isLoading.value = true
  clearTimeout(tmr)
  tmr = window.setTimeout(() => {
    isLoading.value = false
  }, 260)
})

const filtered = computed(() => {
  const query = q.value.toLowerCase()
  return tours
    .filter((t) => (category.value === 'all' ? true : t.category === category.value))
    .filter((t) => (minNights.value ? t.nights >= minNights.value : true))
    .filter((t) => (maxPrice.value ? t.price <= maxPrice.value : true))
    .filter((t) => (onlyAvailable.value ? (t.seatsLeft ?? 0) > 0 : true))
    .filter((t) => {
      if (!query) return true
      const hay = [getText(t, 'title', locale.value), getText(t, 'city', locale.value), getText(t, 'country', locale.value)]
        .join(' ')
        .toLowerCase()
      return hay.includes(query)
    })
})

const sorted = computed(() => {
  const arr = [...filtered.value]
  const weight = (style) => ({ special: 5, popular: 4, value: 3, luxury: 2, budget: 1 }[style] ?? 0)

  switch (sort.value) {
    case 'priceAsc':
      return arr.sort((a, b) => a.price - b.price)
    case 'priceDesc':
      return arr.sort((a, b) => b.price - a.price)
    case 'rating':
      return arr.sort((a, b) => b.rating - a.rating)
    default:
      return arr.sort((a, b) => weight(b.style) - weight(a.style) || b.rating - a.rating)
  }
})

const pages = computed(() => Math.max(1, Math.ceil(sorted.value.length / pageSize)))
const paged = computed(() => {
  const start = (page.value - 1) * pageSize
  return sorted.value.slice(start, start + pageSize)
})

watch([q, category, minNights, maxPrice, onlyAvailable, sort], () => {
  page.value = 1
})

watch(
  () => route.query.q,
  (v) => {
    if (typeof v === 'string') q.value = v
  },
  { immediate: true }
)

watch(pages, (n) => {
  if (page.value > n) page.value = n
})

const reset = () => {
  q.value = ''
  category.value = 'all'
  minNights.value = 0
  maxPrice.value = 40000000
  onlyAvailable.value = false
  sort.value = 'popular'
}
</script>

<style scoped>
.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
}
.title { margin: 0; font-size: 20px; font-weight: 1000; }
.desc { margin: 8px 0 0; color: var(--muted); font-size: 13px; }
.count {
  margin-inline-start: 8px;
  font-weight: 1000;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  background: var(--primary-weak);
  border: 1px solid color-mix(in srgb, var(--primary) 20%, var(--border));
}

.panel { padding: 14px; }
.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  align-items: end;
}
.row + .row { margin-top: 12px; grid-template-columns: 1.6fr 1fr auto; }

.field { display: grid; gap: 8px; }
.field--grow { width: 100%; }
.lbl { font-size: 12px; font-weight: 1000; color: var(--muted); }

.check { display: inline-flex; align-items: center; gap: 10px; color: var(--text); font-size: 13px; }
.check input { width: 18px; height: 18px; }

.summary { margin: 12px 0 10px; }
.muted { color: var(--muted); font-size: 13px; }

.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }

.empty { display: grid; place-items: center; gap: 10px; padding: 22px; text-align: center; }
.empty__emoji { font-size: 28px; }
.empty__txt { font-size: 13px; color: var(--muted); }

.pager { margin-top: 14px; display: flex; align-items: center; justify-content: center; gap: 10px; }
.pager__mid { color: var(--muted); font-size: 13px; font-weight: 1000; }

@media (max-width: 1100px) {
  .row { grid-template-columns: repeat(2, 1fr); }
  .row + .row { grid-template-columns: 1fr; }
}
@media (max-width: 980px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
  .head { align-items: flex-start; flex-direction: column; }
}

.sk{
  padding: 14px;
  border-radius: 18px;
  overflow:hidden;
}
.sk__img{
  height: 140px;
  border-radius: 14px;
  background: linear-gradient(90deg, rgba(2,6,23,.06), rgba(2,6,23,.10), rgba(2,6,23,.06));
  background-size: 200% 100%;
  animation: shimmer 1.1s infinite linear;
}
.sk__line{
  height: 14px;
  margin-top: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(2,6,23,.06), rgba(2,6,23,.10), rgba(2,6,23,.06));
  background-size: 200% 100%;
  animation: shimmer 1.1s infinite linear;
}
.sk__line--sm{ width: 60%; }
@keyframes shimmer{
  0%{ background-position: 0% 0; }
  100%{ background-position: 200% 0; }
}
</style>
