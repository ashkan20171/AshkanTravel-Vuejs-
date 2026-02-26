<template>
  <AppHeader />
  <main id="main" class="page">
    <RouterView />
  </main>
  <AppFooter />
  <AppToasts />
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppToasts from '@/components/ui/AppToasts.vue'
</script>
