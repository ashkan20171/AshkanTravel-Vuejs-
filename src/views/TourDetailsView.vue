<template>
  <div class="container" style="padding-top: 12px;">
    <RouterLink to="/tours" style="text-decoration:none;color:var(--primary);font-weight:900;">
      ← {{ locale === 'fa' ? 'بازگشت' : 'Back' }}
    </RouterLink>

    <div v-if="tour" style="margin-top: 14px;">
      <h1 style="margin: 0 0 10px; font-size: 24px; font-weight: 1000;">
        {{ getText(tour, 'title', locale) }}
      </h1>

      <p style="margin: 0 0 12px; color:var(--muted);">
        {{ getText(tour, 'city', locale) }} • {{ tour.nights }} {{ locale === 'fa' ? 'شب' : 'nights' }} • ★ {{ tour.rating }}
      </p>

      <div style="padding: 14px; border:1px solid var(--border); border-radius: 16px; background:#fff;">
        <div style="font-weight: 1000; margin-bottom: 8px;">
          {{ locale === 'fa' ? 'قیمت:' : 'Price:' }} {{ formatPrice(tour.price, locale) }}
        </div>

        <div style="color:var(--muted); line-height:1.9;">
          {{ locale === 'fa'
            ? 'این صفحه نمونه است. مرحله بعد توضیحات کامل، گالری تصاویر و امکانات را اضافه می‌کنیم.'
            : 'This is a demo page. Next we will add full description, gallery, and amenities.' }}
        </div>
      </div>

      <div style="margin-top: 14px;">
        <BookingForm />
      </div>
    </div>

    <div v-else style="margin-top: 16px; color:#b42318; font-weight:900;">
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
import BookingForm from '@/components/tours/BookingForm.vue'

const route = useRoute()
const { locale } = useI18n()

const tour = computed(() => tours.find((t) => String(t.id) === String(route.params.id)))
</script>
