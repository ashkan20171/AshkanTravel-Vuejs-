<template>
  <section class="hero" aria-label="Hero section">
    <div class="container">
      <div class="content">
        <p class="badge">{{ $t('hero.badge') }}</p>

        <h1 class="title">
          {{ $t('hero.title') }}
        </h1>

        <p class="desc">
          {{ $t('hero.desc') }}
        </p>

        <form class="search" @submit.prevent="onSearch" aria-label="Search tours">
          <label class="field">
            <span class="label">{{ $t('hero.form.destination') }}</span>
            <input
              v-model.trim="form.destination"
              class="input"
              type="text"
              :placeholder="$t('hero.form.destinationPlaceholder')"
              autocomplete="off"
            />
          </label>

          <label class="field">
            <span class="label">{{ $t('hero.form.date') }}</span>
            <input v-model="form.date" class="input" type="date" />
          </label>

          <label class="field">
            <span class="label">{{ $t('hero.form.people') }}</span>
            <select v-model.number="form.people" class="input">
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
              <option :value="4">4</option>
              <option :value="5">5+</option>
            </select>
          </label>

          <button class="btn" type="submit">
            {{ $t('hero.form.search') }}
          </button>
        </form>

        <div class="trust">
          <div class="trust__item">
            <span class="trust__num">+120</span>
            <span class="trust__txt">{{ $t('hero.trust.tours') }}</span>
          </div>
          <div class="trust__item">
            <span class="trust__num">4.8/5</span>
            <span class="trust__txt">{{ $t('hero.trust.rating') }}</span>
          </div>
          <div class="trust__item">
            <span class="trust__num">24/7</span>
            <span class="trust__txt">{{ $t('hero.trust.support') }}</span>
          </div>
        </div>
      </div>

      <div class="visual" aria-hidden="true">
        <div class="card">
          <div class="card__top">
            <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          </div>
          <div class="card__body">
            <p class="card__title">{{ $t('hero.card.title') }}</p>
            <p class="card__subtitle">{{ $t('hero.card.subtitle') }}</p>
            <div class="card__row">
              <span class="pill">{{ $t('hero.card.pill1') }}</span>
              <span class="pill">{{ $t('hero.card.pill2') }}</span>
              <span class="pill">{{ $t('hero.card.pill3') }}</span>
            </div>
          </div>
        </div>

        <div class="blob blob--1"></div>
        <div class="blob blob--2"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  destination: '',
  date: '',
  people: 2
})

const onSearch = () => {
  // فعلاً فقط می‌فرستیم به یک URL تمیز (سئو و UX بهتر)
  router.push({
    path: '/tours',
    query: {
      destination: form.destination || undefined,
      date: form.date || undefined,
      people: form.people
    }
  })
}
</script>

<style scoped>
.hero {
  padding: 28px 0 10px;
  background: radial-gradient(1000px 500px at 20% 0%, rgba(10, 92, 255, 0.12), transparent 60%),
    radial-gradient(900px 450px at 80% 10%, rgba(0, 180, 120, 0.12), transparent 55%),
    #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 28px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(10, 92, 255, 0.08);
  color: #0a5cff;
  font-weight: 700;
  font-size: 13px;
  margin: 0 0 14px;
}

.title {
  margin: 0 0 12px;
  font-size: 42px;
  line-height: 1.15;
  letter-spacing: -0.4px;
  color: #0b1220;
}

.desc {
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.8;
  color: #3b4458;
  max-width: 52ch;
}

.search {
  display: grid;
  grid-template-columns: 1.4fr 1fr 0.8fr 0.8fr;
  gap: 10px;
  padding: 12px;
  border: 1px solid #eef0f6;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.06);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
}

.input {
  height: 42px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0 12px;
  font-size: 14px;
  outline: none;
  background: #fff;
}

.input:focus {
  border-color: rgba(10, 92, 255, 0.5);
  box-shadow: 0 0 0 4px rgba(10, 92, 255, 0.12);
}

.btn {
  height: 42px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 800;
  background: #0a5cff;
  color: #fff;
}

.btn:hover {
  filter: brightness(0.95);
}

.trust {
  display: flex;
  gap: 18px;
  margin-top: 18px;
  flex-wrap: wrap;
}

.trust__item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid #eef0f6;
  background: #fff;
}

.trust__num {
  font-weight: 900;
  color: #0b1220;
}

.trust__txt {
  font-size: 12px;
  color: #6b7280;
}

/* Visual */
.visual {
  position: relative;
  min-height: 360px;
  display: grid;
  place-items: center;
}

.card {
  width: min(420px, 100%);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 60px rgba(16, 24, 40, 0.12);
  position: relative;
  z-index: 2;
}

.card__top {
  padding: 12px 14px;
  display: flex;
  gap: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.14);
}

.card__body {
  padding: 16px 16px 18px;
}

.card__title {
  margin: 0 0 6px;
  font-weight: 900;
  font-size: 16px;
  color: #0b1220;
}

.card__subtitle {
  margin: 0 0 14px;
  font-size: 13px;
  color: #51607a;
  line-height: 1.7;
}

.card__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pill {
  font-size: 12px;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid #eef0f6;
  background: #fff;
  color: #0b1220;
  font-weight: 700;
}

.blob {
  position: absolute;
  inset: auto;
  border-radius: 999px;
  filter: blur(25px);
  opacity: 0.9;
  z-index: 1;
}

.blob--1 {
  width: 240px;
  height: 240px;
  left: 10%;
  top: 10%;
  background: rgba(10, 92, 255, 0.25);
}

.blob--2 {
  width: 260px;
  height: 260px;
  right: 5%;
  bottom: 8%;
  background: rgba(0, 180, 120, 0.22);
}

/* Responsive */
@media (max-width: 980px) {
  .container {
    grid-template-columns: 1fr;
  }
  .visual {
    min-height: 260px;
  }
  .title {
    font-size: 34px;
  }
  .search {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 520px) {
  .search {
    grid-template-columns: 1fr;
  }
}
</style>
