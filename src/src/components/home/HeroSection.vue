<template>
  <section class="hero" aria-label="Hero">
    <div class="container hero__inner">
      <div>
        <div class="ui-badge">{{ $t('hero.badge') }}</div>
        <h1 class="title">{{ $t('hero.title') }}</h1>
        <p class="desc">{{ $t('hero.desc') }}</p>

        <form class="form ui-card" @submit.prevent="onSearch">
          <label class="field">
            <span class="label">{{ $t('hero.form.destination') }}</span>
            <input
              v-model.trim="destination"
              class="ui-input"
              type="text"
              :placeholder="$t('hero.form.destinationPlaceholder')"
            />
          </label>

          <label class="field">
            <span class="label">{{ $t('hero.form.date') }}</span>
            <input class="ui-input" type="date" />
          </label>

          <label class="field">
            <span class="label">{{ $t('hero.form.people') }}</span>
            <select class="ui-input">
              <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
            </select>
          </label>

          <button class="ui-btn ui-btn--primary" type="submit">{{ $t('hero.form.search') }}</button>
        </form>

        <div class="trust" aria-label="Trust indicators">
          <div class="trust__item ui-card">
            <div class="trust__num">+120</div>
            <div class="trust__txt">{{ $t('hero.trust.tours') }}</div>
          </div>
          <div class="trust__item ui-card">
            <div class="trust__num">4.8/5</div>
            <div class="trust__txt">{{ $t('hero.trust.rating') }}</div>
          </div>
          <div class="trust__item ui-card">
            <div class="trust__num">24/7</div>
            <div class="trust__txt">{{ $t('hero.trust.support') }}</div>
          </div>
        </div>
      </div>

      <aside class="card ui-card" aria-label="Featured offer">
        <div class="card__title">{{ $t('hero.card.title') }}</div>
        <div class="card__subtitle">{{ $t('hero.card.subtitle') }}</div>
        <div class="pills">
          <span class="pill">{{ $t('hero.card.pill1') }}</span>
          <span class="pill">{{ $t('hero.card.pill2') }}</span>
          <span class="pill">{{ $t('hero.card.pill3') }}</span>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const destination = ref('')

const onSearch = () => {
  router.push({ path: '/tours', query: destination.value ? { q: destination.value } : {} })
}
</script>

<style scoped>
.hero {
  padding: 28px 0 10px;
  background:
    radial-gradient(1000px 500px at 20% 0%, rgba(10, 92, 255, 0.12), transparent 60%),
    radial-gradient(900px 450px at 80% 10%, rgba(0, 180, 120, 0.12), transparent 55%),
    var(--bg);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 28px;
}

.title {
  margin: 12px 0 10px;
  font-size: 34px;
  line-height: 1.35;
  font-weight: 1000;
  color: var(--text);
}

.desc {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.9;
  max-width: 62ch;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 10px;
}

.field { display: flex; flex-direction: column; gap: 6px; }
.label { font-size: 12px; color: #6b7280; font-weight: 800; }
.trust {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.trust__item {
  padding: 10px 12px;
}
.trust__num { font-weight: 1000; }
.trust__txt { color: var(--muted); font-size: 12px; margin-top: 4px; }

.card {
  padding: 18px;
}
.card__title { font-weight: 1000; color: var(--text); }
.card__subtitle { margin-top: 8px; color: var(--muted); line-height: 1.8; }

.pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.pill {
  font-size: 12px;
  font-weight: 900;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(10, 92, 255, 0.14);
  background: rgba(10, 92, 255, 0.08);
  color: var(--primary);
}

@media (max-width: 980px) {
  .hero__inner { grid-template-columns: 1fr; }
  .form { grid-template-columns: 1fr; }
  .title { font-size: 28px; }
}
</style>
