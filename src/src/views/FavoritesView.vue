<template>
  <div class="container">
    <div class="pageHead">
      <h1 class="pageTitle">{{ $t('favorites.title') }}</h1>
      <p class="pageDesc">{{ $t('favorites.desc') }}</p>
    </div>

    <div v-if="favTours.length === 0" class="ui-card empty">
      <div class="empty__emoji" aria-hidden="true">💾</div>
      <div class="empty__txt">{{ $t('favorites.empty') }}</div>
      <RouterLink class="ui-btn ui-btn--primary" to="/tours">{{ $t('favorites.cta') }}</RouterLink>
    </div>

    <div v-else class="grid">
      <TourCard v-for="tour in favTours" :key="tour.id" :tour="tour" />
    </div>

    <div v-if="favTours.length" class="bar">
      <button class="ui-btn ui-btn--ghost" type="button" @click="clear">{{ $t('favorites.clear') }}</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { tours } from '@/data/tours'
import TourCard from '@/components/tours/TourCard.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useToastsStore } from '@/stores/toasts'

const favorites = useFavoritesStore()
const toasts = useToastsStore()

const favTours = computed(() => tours.filter((t) => favorites.has(t.id)))

const clear = () => {
  favorites.clear()
  toasts.push('لیست علاقه‌مندی‌ها پاک شد.', { type: 'info' })
}
</script>

<style scoped>
.pageHead { margin-bottom: 14px; }
.pageTitle { margin: 0; font-size: 20px; }
.pageDesc { margin: 8px 0 0; color: var(--muted); font-size: 13px; }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.empty { display: grid; place-items: center; gap: 10px; padding: 22px; text-align: center; }
.empty__emoji { font-size: 28px; }
.empty__txt { font-size: 13px; color: var(--muted); }

.bar { margin-top: 14px; display: flex; justify-content: flex-end; }

@media (max-width: 980px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
