<template>
  <div class="container" style="padding-top: 12px;">
    <h1 class="pageTitle">{{ $t('pages.about.title') }}</h1>
    <p class="pageDesc">{{ $t('pages.about.desc') }}</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.pageTitle { margin: 0 0 10px; font-size: 24px; font-weight: 1000; }
.pageDesc { margin: 0; color: var(--muted); line-height: 1.9; max-width: 72ch; }
</style>
