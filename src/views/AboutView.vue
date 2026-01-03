<template>
  <div class="container" style="padding-top: 12px;">
    <h1 style="margin:0 0 10px;font-size:24px;font-weight:1000;">
      {{ locale === 'fa' ? 'درباره ما' : 'About' }}
    </h1>
    <p style="margin:0;color:var(--muted);line-height:1.9;max-width:70ch;">
      {{
        locale === 'fa'
          ? 'اشکان تراول با هدف ساده‌سازی رزرو تور، پرواز و هتل ایجاد شده است. ما تلاش می‌کنیم بهترین گزینه‌ها را سریع و مطمئن ارائه کنیم.'
          : 'AshkanTravel helps you book tours, flights, and hotels with speed and confidence.'
      }}
    </p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
