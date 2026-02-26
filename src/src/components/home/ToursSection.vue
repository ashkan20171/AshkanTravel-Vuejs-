<template>
  <section class="tours" aria-label="Tours">
    <div class="container">
      <div class="head">
        <div>
          <h2 class="ui-section-title">{{ $t('tours.title') }}</h2>
          <p class="ui-section-subtitle">{{ $t('tours.subtitle') }}</p>
        </div>

        <RouterLink class="ui-btn ui-btn--ghost viewAll" to="/tours">
          {{ $t('tours.actions.viewAll') }}
        </RouterLink>
      </div>

      <div class="grid">
        <TourCard v-for="t in featured" :key="t.id" :tour="t" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { tours } from '@/data/tours'
import TourCard from '@/components/tours/TourCard.vue'

const featured = computed(() => tours.slice(0, 4))
</script>

<style scoped>
.tours { padding: 44px 0; background: var(--bg); }

.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.viewAll { height: 40px; }


.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }

@media (max-width: 980px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
</style>
