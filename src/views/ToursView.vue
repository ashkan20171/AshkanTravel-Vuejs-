<template>
  <div class="container">
    <h1 style="margin: 0 0 8px; font-size: 22px; font-weight: 900;">{{ locale === 'fa' ? 'همه تورها' : 'All Tours' }}</h1>
    <p style="margin: 0 0 14px; color: #5b6478;">
      {{ locale === 'fa' ? 'لیست کامل تورها به همراه فیلترها' : 'Full tour list with filters' }}
    </p>

    <ToursSection />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ToursSection from '@/components/home/ToursSection.vue'

const { locale } = useI18n()
</script>
