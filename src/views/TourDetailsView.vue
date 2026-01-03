<template>
  <div class="container" style="padding-top: 12px;">
    <RouterLink to="/tours" style="text-decoration:none;color:#0a5cff;font-weight:900;">
      ← {{ locale === 'fa' ? 'بازگشت' : 'Back' }}
    </RouterLink>

    <div v-if="tour" style="margin-top: 14px;">
      <h1 style="margin: 0 0 10px; font-size: 24px; font-weight: 900;">
        {{ getText(tour, 'title', locale) }}
      </h1>

      <p style="margin: 0 0 12px; color:#5b6478;">
        {{ getText(tour, 'city', locale) }} • {{ tour.nights }} {{ locale === 'fa' ? 'شب' : 'nights' }} • ★ {{ tour.rating }}
      </p>

      <div style="padding: 14px; border:1px solid #eef0f6; border-radius: 16px;">
        <div style="font-weight: 900; margin-bottom: 8px;">
          {{ locale === 'fa' ? 'قیمت:' : 'Price:' }} {{ formatPrice(tour.price, locale) }}
        </div>

        <div style="color:#5b6478; line-height:1.9;">
          {{ locale === 'fa'
            ? 'این صفحه نمونه است. مرحله بعد توضیحات کامل، گالری تصاویر، امکانات و فرم رزرو را اضافه می‌کنیم.'
            : 'This is a demo page. Next we will add full description, gallery, amenities, and booking form.' }}
        </div>
      </div>
    </div>

    <div v-else style="margin-top: 16px; color:#b42318; font-weight:800;">
      {{ locale === 'fa' ? 'تور پیدا نشد' : 'Tour not found' }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { tours } from '@/data/tours'
import { formatPrice, getText } from '@/utils/format'

const route = useRoute()
const { locale } = useI18n()

const tour = computed(() => tours.find((t) => String(t.id) === String(route.params.id)))
</script>
