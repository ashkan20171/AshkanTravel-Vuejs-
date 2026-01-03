<template>
  <header class="header">
    <div class="container">
      <RouterLink class="brand" to="/">
        {{ $t('brand') }}
      </RouterLink>

      <nav class="nav" aria-label="Main navigation">
        <RouterLink class="nav__link" to="/">{{ $t('menu.home') }}</RouterLink>
        <RouterLink class="nav__link" to="/about">{{ $t('menu.about') }}</RouterLink>
        <RouterLink class="nav__link" to="/contact">{{ $t('menu.contact') }}</RouterLink>
      </nav>

      <button class="lang" type="button" @click="toggleLang" :aria-label="langAriaLabel">
        {{ locale === 'fa' ? $t('actions.switchToEn') : $t('actions.switchToFa') }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const langAriaLabel = computed(() =>
  locale.value === 'fa' ? 'Switch language to English' : 'تغییر زبان به فارسی'
)

const toggleLang = () => {
  locale.value = locale.value === 'fa' ? 'en' : 'fa'
}

// این بخش هم SEO-friendly هست هم برای RTL/LTR ضروری
watchEffect(() => {
  const isFa = locale.value === 'fa'
  document.documentElement.lang = isFa ? 'fa' : 'en'
  document.documentElement.dir = isFa ? 'rtl' : 'ltr'
})
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #eef0f6;
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.brand {
  font-weight: 900;
  font-size: 16px;
  color: #0a5cff;
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav__link {
  color: #111;
  text-decoration: none;
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 12px;
  transition: background 0.2s ease;
}

.nav__link:hover {
  background: #f5f7ff;
}

.nav__link.router-link-active {
  color: #0a5cff;
  background: #eef3ff;
}

.lang {
  border: 1px solid #e6e8f0;
  background: #fff;
  padding: 7px 10px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
}

</style>
