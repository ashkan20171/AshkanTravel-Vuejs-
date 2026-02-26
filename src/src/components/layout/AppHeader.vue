<template>
  <a class="skip-link" href="#main">{{ $t('a11y.skipToContent') }}</a>
  <header class="header">
    <div class="container header__inner">
      <RouterLink class="brand" to="/">{{ $t('brand') }}</RouterLink>

      <button
        class="menuBtn"
        type="button"
        @click="isOpen = !isOpen"
        :aria-label="$t('a11y.toggleMenu')"
        :aria-expanded="isOpen ? 'true' : 'false'"
      >
        ☰
      </button>

      <nav class="nav" aria-label="Main navigation" :data-open="isOpen ? '1' : '0'">
        <RouterLink class="nav__link" to="/" @click="isOpen = false">{{ $t('menu.home') }}</RouterLink>
        <RouterLink class="nav__link" to="/tours" @click="isOpen = false">{{ $t('menu.tours') }}</RouterLink>
        <RouterLink class="nav__link" to="/favorites" @click="isOpen = false">
          {{ $t('menu.favorites') }}
          <span v-if="favorites.count" class="badge" aria-label="Favorites count">{{ favorites.count }}</span>
        </RouterLink>
        <RouterLink class="nav__link" to="/about" @click="isOpen = false">{{ $t('menu.about') }}</RouterLink>
        <RouterLink class="nav__link" to="/contact" @click="isOpen = false">{{ $t('menu.contact') }}</RouterLink>
      </nav>

      <div class="actions">
        <button class="ui-btn ui-btn--ghost" type="button" @click="onToggleTheme" :aria-label="themeAriaLabel">
          <span aria-hidden="true">{{ theme === 'dark' ? '☀️' : '🌙' }}</span>
          <span class="actions__txt">{{ theme === 'dark' ? $t('actions.light') : $t('actions.dark') }}</span>
        </button>

        <button class="ui-btn ui-btn--ghost" type="button" @click="toggleLang" :aria-label="langAriaLabel">
          {{ locale === 'fa' ? $t('actions.switchToEn') : $t('actions.switchToFa') }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { toggleTheme } from '@/utils/theme'
import { useFavoritesStore } from '@/stores/favorites'

const { locale } = useI18n()
const isOpen = ref(false)
const theme = ref(document.documentElement.dataset.theme || 'light')
const favorites = useFavoritesStore()

const langAriaLabel = computed(() =>
  locale.value === 'fa' ? 'Switch language to English' : 'تغییر زبان به فارسی'
)

const toggleLang = () => {
  locale.value = locale.value === 'fa' ? 'en' : 'fa'
}

const themeAriaLabel = computed(() => (theme.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'))

const onToggleTheme = () => {
  theme.value = toggleTheme()
}

watchEffect(() => {
  const isFa = locale.value === 'fa'
  document.documentElement.lang = isFa ? 'fa' : 'en'
  document.documentElement.dir = isFa ? 'rtl' : 'ltr'
  localStorage.setItem('ashkantravel_locale', locale.value)
})
</script>

<style scoped>
.header {
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
}

.header__inner {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.brand {
  font-weight: 900;
  font-size: 16px;
  color: var(--primary);
  text-decoration: none;
}

.menuBtn {
  display: none;
  height: 40px;
  width: 44px;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  font-size: 16px;
  font-weight: 1000;
}

.nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav__link {
  color: var(--text);
  text-decoration: none;
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 12px;
  transition: background 0.2s ease;
}

.nav__link:hover {
  background: rgba(10, 92, 255, 0.08);
}

.nav__link.router-link-active {
  color: var(--primary);
  background: rgba(10, 92, 255, 0.10);
}

.badge {
  margin-inline-start: 8px;
  font-weight: 1000;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--primary-weak);
  border: 1px solid color-mix(in srgb, var(--primary) 20%, var(--border));
}

.actions { display: flex; align-items: center; gap: 8px; }
.actions__txt { font-size: 12px; font-weight: 1000; }

@media (max-width: 820px) {
  .menuBtn { display: inline-flex; align-items: center; justify-content: center; }
  .nav {
    position: absolute;
    top: 58px;
    left: 0;
    right: 0;
    padding: 10px 16px;
    margin: 0 10px;
    border-radius: 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-md);
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }
  .nav[data-open='1'] { display: flex; }
  .nav__link { padding: 10px 12px; }
}
</style>
