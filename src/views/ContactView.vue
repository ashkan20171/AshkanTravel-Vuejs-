<template>
  <div class="container" style="padding-top: 12px;">
    <h1 style="margin:0 0 10px;font-size:24px;font-weight:1000;">
      {{ locale === 'fa' ? 'تماس با ما' : 'Contact Us' }}
    </h1>

    <p style="margin:0 0 14px;color:var(--muted);line-height:1.9;max-width:60ch;">
      {{
        locale === 'fa'
          ? 'برای دریافت مشاوره و رزرو تور با ما در تماس باشید.'
          : 'Contact us for consultation and tour booking.'
      }}
    </p>

    <div style="margin-top: 10px; font-weight: 900;">
      📞 {{ locale === 'fa' ? 'تلفن:' : 'Phone:' }} 021-00000000
    </div>
    <div style="margin-top: 6px;">✉️ info@ashkantravel.com</div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
