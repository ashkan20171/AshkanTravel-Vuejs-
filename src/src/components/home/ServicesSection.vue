<template>
  <section class="services" aria-label="Services">
    <div class="container">
      <header class="head">
        <h2 class="ui-section-title">{{ $t('services.title') }}</h2>
        <p class="ui-section-subtitle subtitle">{{ $t('services.subtitle') }}</p>
      </header>

      <div class="grid">
        <article v-for="(item, i) in items" :key="i" class="card ui-card">
          <div class="icon" aria-hidden="true">{{ icons[i] }}</div>
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__desc">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const items = computed(() => tm('services.items') || [])
const icons = ['✈️', '🏨', '🧭', '🛡️']
</script>

<style scoped>
.services { padding: 44px 0; background: var(--bg); }
.head { display: grid; gap: 8px; margin-bottom: 18px; }
.subtitle { max-width: 62ch; }

.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }

.card {
  border-radius: 18px;
  padding: 18px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 150px;
}
.card:hover { transform: translateY(-3px); box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08); }

.icon {
  width: 44px; height: 44px; border-radius: 14px;
  display: grid; place-items: center;
  background: var(--primary-weak);
  font-size: 20px;
  margin-bottom: 12px;
}
.card__title { margin: 0 0 8px; font-size: 15px; font-weight: 1000; color: var(--text); }
.card__desc { margin: 0; font-size: 13px; color: var(--muted); line-height: 1.75; }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
</style>
