<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">{{ $t('brand') }}</div>
        <p class="footer__desc">{{ $t('footer.desc') }}</p>
      </div>

      <div class="footer__cols">
        <div class="footer__col">
          <div class="footer__title">{{ $t('footer.links') }}</div>
          <RouterLink class="footer__link" to="/tours">{{ $t('menu.tours') }}</RouterLink>
          <RouterLink class="footer__link" to="/favorites">{{ $t('menu.favorites') }}</RouterLink>
          <RouterLink class="footer__link" to="/about">{{ $t('menu.about') }}</RouterLink>
          <RouterLink class="footer__link" to="/contact">{{ $t('menu.contact') }}</RouterLink>
        </div>

        <div class="footer__col">
          <div class="footer__title">{{ $t('footer.newsletter.title') }}</div>
          <p class="footer__hint">{{ $t('footer.newsletter.desc') }}</p>
          <form class="footer__form" @submit.prevent="onSubmit">
            <input v-model.trim="email" class="ui-input" :placeholder="$t('footer.newsletter.placeholder')" />
            <button class="ui-btn ui-btn--primary" type="submit">{{ $t('footer.newsletter.cta') }}</button>
          </form>
        </div>
      </div>
    </div>

    <div class="container footer__bottom">
      <span>© {{ new Date().getFullYear() }} {{ $t('brand') }}</span>
      <span class="footer__sep" aria-hidden="true">•</span>
      <span>{{ $t('footer.madeWith') }}</span>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useToastsStore } from '@/stores/toasts'

const toasts = useToastsStore()
const email = ref('')

const onSubmit = () => {
  if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    toasts.push('ایمیل معتبر وارد کنید.', { type: 'warning' })
    return
  }
  toasts.push('عضویت شما ثبت شد ✅', { type: 'success' })
  email.value = ''
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface) 92%, transparent);
  padding: 26px 0 16px;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.1fr 1.9fr;
  gap: 22px;
  align-items: start;
}

.footer__logo {
  font-weight: 1000;
  color: var(--primary);
  font-size: 16px;
}
.footer__desc { color: var(--muted); font-size: 13px; margin: 10px 0 0; max-width: 48ch; }

.footer__cols {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 18px;
}

.footer__title { font-weight: 1000; font-size: 13px; margin-bottom: 10px; }
.footer__link {
  display: block;
  color: var(--text);
  text-decoration: none;
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 12px;
}
.footer__link:hover { background: rgba(10, 92, 255, 0.08); }

.footer__hint { margin: 0 0 10px; color: var(--muted); font-size: 13px; }
.footer__form { display: flex; gap: 10px; flex-wrap: wrap; }
.footer__form .ui-input { flex: 1 1 220px; }

.footer__bottom {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
  display: flex;
  gap: 10px;
  justify-content: center;
  color: var(--muted);
  font-size: 12px;
}
.footer__sep { opacity: 0.6; }

@media (max-width: 920px) {
  .footer__inner { grid-template-columns: 1fr; }
  .footer__cols { grid-template-columns: 1fr; }
}
</style>
