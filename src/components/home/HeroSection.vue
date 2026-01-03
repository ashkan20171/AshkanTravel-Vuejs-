<template>
  <section class="hero" aria-label="Hero">
    <div class="container hero__inner">
      <div>
        <div class="badge">{{ $t('hero.badge') }}</div>
        <h1 class="title">{{ $t('hero.title') }}</h1>
        <p class="desc">{{ $t('hero.desc') }}</p>

        <form class="form" @submit.prevent>
          <label class="field">
            <span class="label">{{ $t('hero.form.destination') }}</span>
            <input class="input" type="text" :placeholder="$t('hero.form.destinationPlaceholder')" />
          </label>

          <label class="field">
            <span class="label">{{ $t('hero.form.date') }}</span>
            <input class="input" type="date" />
          </label>

          <label class="field">
            <span class="label">{{ $t('hero.form.people') }}</span>
            <select class="input">
              <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
            </select>
          </label>

          <button class="btn" type="submit">{{ $t('hero.form.search') }}</button>
        </form>

        <div class="trust" aria-label="Trust indicators">
          <div class="trust__item">
            <div class="trust__num">+120</div>
            <div class="trust__txt">{{ $t('hero.trust.tours') }}</div>
          </div>
          <div class="trust__item">
            <div class="trust__num">4.8/5</div>
            <div class="trust__txt">{{ $t('hero.trust.rating') }}</div>
          </div>
          <div class="trust__item">
            <div class="trust__num">24/7</div>
            <div class="trust__txt">{{ $t('hero.trust.support') }}</div>
          </div>
        </div>
      </div>

      <aside class="card" aria-label="Featured offer">
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

<style scoped>
.hero {
  padding: 28px 0 10px;
  background:
    radial-gradient(1000px 500px at 20% 0%, rgba(10, 92, 255, 0.12), transparent 60%),
    radial-gradient(900px 450px at 80% 10%, rgba(0, 180, 120, 0.12), transparent 55%),
    #fff;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 28px;
}

.badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 12px;
  color: var(--primary);
  background: rgba(10, 92, 255, 0.10);
  border: 1px solid rgba(10, 92, 255, 0.16);
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
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.04);
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

.btn {
  height: 42px;
  padding: 0 14px;
  border: none;
  border-radius: 12px;
  background: var(--primary);
  color: #fff;
  font-weight: 900;
  cursor: pointer;
}
.btn:hover { filter: brightness(0.95); }

.trust {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.trust__item {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 10px 12px;
  background: #fff;
}
.trust__num { font-weight: 1000; }
.trust__txt { color: var(--muted); font-size: 12px; margin-top: 4px; }

.card {
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 18px;
  background: #fff;
  box-shadow: 0 18px 60px rgba(16, 24, 40, 0.08);
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
