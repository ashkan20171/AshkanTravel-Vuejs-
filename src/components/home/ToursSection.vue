<template>
  <section class="tours" aria-label="Tours">
    <div class="container">
      <div class="head">
        <div>
          <h2 class="title">{{ $t('tours.title') }}</h2>
          <p class="subtitle">{{ $t('tours.subtitle') }}</p>
        </div>

        <RouterLink class="viewAll" to="/tours">
          {{ $t('tours.actions.viewAll') }}
        </RouterLink>
      </div>

      <div class="filters">
        <label class="field">
          <span class="label">{{ $t('tours.filters.destination') }}</span>
          <select class="input" v-model="filters.destination">
            <option value="all">{{ $t('tours.filters.all') }}</option>
            <option v-for="c in destinations" :key="c.value" :value="c.value">
              {{ c.label }}
            </option>
          </select>
        </label>

        <label class="field">
          <span class="label">{{ $t('tours.filters.minNights') }}</span>
          <select class="input" v-model.number="filters.minNights">
            <option :value="0">{{ $t('tours.filters.all') }}</option>
            <option :value="2">2+</option>
            <option :value="3">3+</option>
            <option :value="4">4+</option>
            <option :value="5">5+</option>
          </select>
        </label>

        <label class="field">
          <span class="label">{{ $t('tours.filters.maxPrice') }}</span>
          <input class="input" type="number" v-model.number="filters.maxPrice" :min="0" />
        </label>
      </div>

      <div class="grid">
        <article v-for="t in filteredTours" :key="t.id" class="card">
          <div class="cardTop">
            <span class="tag">{{ getText(t, 'tag', locale) }}</span>
            <span class="rating">★ {{ t.rating }}</span>
          </div>

          <h3 class="cardTitle">{{ getText(t, 'title', locale) }}</h3>

          <p class="cardMeta">
            {{ getText(t, 'city', locale) }} • {{ t.nights }} {{ locale === 'fa' ? 'شب' : 'nights' }}
          </p>

          <div class="cardBottom">
            <div class="price">{{ formatPrice(t.price, locale) }}</div>

            <RouterLink class="btn" :to="`/tours/${t.id}`">
              {{ $t('tours.actions.details') }}
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { tours } from '@/data/tours'
import { formatPrice, getText } from '@/utils/format'

const { locale } = useI18n()

const filters = reactive({
  destination: 'all',
  minNights: 0,
  maxPrice: 0
})

const destinations = computed(() => {
  const unique = new Map()
  for (const t of tours) {
    unique.set(t.city_en.toLowerCase(), {
      value: t.city_en.toLowerCase(),
      label: locale.value === 'fa' ? t.city_fa : t.city_en
    })
  }
  return Array.from(unique.values())
})

const filteredTours = computed(() => {
  return tours.filter((t) => {
    const cityValue = t.city_en.toLowerCase()
    const okDestination = filters.destination === 'all' || cityValue === filters.destination
    const okNights = filters.minNights === 0 || t.nights >= filters.minNights
    const okPrice = filters.maxPrice === 0 || t.price <= filters.maxPrice
    return okDestination && okNights && okPrice
  })
})
</script>

<style scoped>
.tours { padding: 44px 0; background: #fff; }

.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.title { margin: 0; font-size: 22px; font-weight: 1000; color: var(--text); }
.subtitle { margin: 6px 0 0; color: var(--muted); line-height: 1.8; }

.viewAll {
  text-decoration: none;
  font-weight: 900;
  color: var(--primary);
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(10, 92, 255, 0.08);
}

.filters {
  margin: 14px 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #fff;
}

.field { display: flex; flex-direction: column; gap: 6px; }
.label { font-size: 12px; color: #6b7280; font-weight: 800; }

.input {
  height: 42px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0 12px;
  font-size: 14px;
  outline: none;
  background: #fff;
}
.input:focus { border-color: rgba(10,92,255,0.5); box-shadow: 0 0 0 4px rgba(10,92,255,0.12); }

.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }

.card {
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover { transform: translateY(-3px); box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08); }

.cardTop { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }

.tag {
  font-size: 12px;
  font-weight: 900;
  color: var(--primary);
  background: rgba(10, 92, 255, 0.08);
  border: 1px solid rgba(10, 92, 255, 0.14);
  padding: 6px 10px;
  border-radius: 999px;
}
.rating { font-weight: 1000; color: var(--text); }

.cardTitle { margin: 0 0 8px; font-size: 14px; font-weight: 1000; color: var(--text); line-height: 1.6; }
.cardMeta { margin: 0 0 12px; color: var(--muted); font-size: 13px; }

.cardBottom { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.price { font-weight: 1000; color: var(--text); }

.btn {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 0 12px;
  border-radius: 12px;
  background: var(--primary);
  color: #fff;
  font-weight: 1000;
}
.btn:hover { filter: brightness(0.95); }

@media (max-width: 980px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .filters { grid-template-columns: 1fr; }
}
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
</style>
