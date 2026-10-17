<template><section class="container missing"><div class="missing__symbol">404</div><h1>{{ isFa ? 'صفحه پیدا نشد' : 'Page not found' }}</h1><p>{{ isFa ? 'آدرس موردنظر وجود ندارد.' : 'The requested page does not exist.' }}</p><RouterLink class="ui-btn ui-btn--primary" to="/">{{ isFa ? 'بازگشت به خانه' : 'Back to home' }}</RouterLink></section></template>
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isFa = computed(() => locale.value === 'fa')
</script>
<style scoped>.missing{min-height:65vh;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;gap:16px}.missing__symbol{font-size:clamp(5rem,14vw,10rem);font-weight:900;color:var(--primary);line-height:1}</style>
