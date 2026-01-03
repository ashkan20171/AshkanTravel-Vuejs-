<template>
  <section class="services" aria-label="Services">
    <div class="container">
      <header class="head">
        <h2 class="title">{{ $t('services.title') }}</h2>
        <p class="subtitle">{{ $t('services.subtitle') }}</p>
      </header>

      <div class="grid">
        <article v-for="(item, i) in items" :key="i" class="card">
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
.services {
  padding: 44px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.head {
  display: grid;
  gap: 8px;
  margin-bottom: 18px;
}

.title {
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  color: #0b1220;
}

.subtitle {
  margin: 0;
  color: #5b6478;
  line-height: 1.8;
  max-width: 62ch;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.card {
  border: 1px solid #eef0f6;
  background: #fff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 150px;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 50px rgba(16, 24, 40, 0.08);
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(10, 92, 255, 0.08);
  font-size: 20px;
  margin-bottom: 12px;
}

.card__title {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 900;
  color: #0b1220;
}

.card__desc {
  margin: 0;
  font-size: 13px;
  color: #5b6478;
  line-height: 1.75;
}

/* Responsive */
@media (max-width: 980px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
