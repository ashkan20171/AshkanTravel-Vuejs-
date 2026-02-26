<template>
  <div class="container" style="padding-top: 12px;">
    <h1 class="pageTitle">{{ $t('pages.contact.title') }}</h1>
    <p class="pageDesc">{{ $t('pages.contact.desc') }}</p>

    <div class="grid">
      <section class="ui-card">
        <h2 class="cardTitle">{{ locale === 'fa' ? 'اطلاعات تماس' : 'Contact details' }}</h2>

        <div class="row">
          <div class="key">📞 {{ locale === 'fa' ? 'تلفن' : 'Phone' }}</div>
          <div class="val">021-00000000</div>
        </div>

        <div class="row">
          <div class="key">✉️ {{ locale === 'fa' ? 'ایمیل' : 'Email' }}</div>
          <div class="val">info@ashkantravel.com</div>
        </div>

        <div class="row">
          <div class="key">📍 {{ locale === 'fa' ? 'آدرس' : 'Address' }}</div>
          <div class="val">{{ locale === 'fa' ? 'تهران (نمونه)' : 'Tehran (demo)' }}</div>
        </div>
      </section>

      <section class="ui-card">
        <h2 class="cardTitle">{{ locale === 'fa' ? 'ارسال پیام' : 'Send a message' }}</h2>

        <form class="form" @submit.prevent="onSubmit" novalidate>
          <label class="field">
            <span class="label">{{ $t('pages.contact.form.name') }}</span>
            <input class="ui-input" v-model.trim="form.name" type="text" autocomplete="name" />
            <span v-if="errors.name" class="error">{{ errors.name }}</span>
          </label>

          <label class="field">
            <span class="label">{{ $t('pages.contact.form.email') }}</span>
            <input class="ui-input" v-model.trim="form.email" type="email" autocomplete="email" />
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </label>

          <label class="field field--full">
            <span class="label">{{ $t('pages.contact.form.message') }}</span>
            <textarea class="ui-textarea" v-model.trim="form.message" rows="5"></textarea>
            <span v-if="errors.message" class="error">{{ errors.message }}</span>
          </label>

          <button class="ui-btn ui-btn--primary submit" type="submit" :disabled="submitting">
            {{ submitting ? '...' : $t('pages.contact.form.submit') }}
          </button>

          <div v-if="success" class="success" role="status">
            {{ $t('pages.contact.form.success') }}
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const submitting = ref(false)
const success = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isValidEmail = (email) => {
  if (!email) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validate = () => {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name) errors.name = locale.value === 'fa' ? 'نام الزامی است.' : 'Name is required.'
  if (!form.email) errors.email = locale.value === 'fa' ? 'ایمیل الزامی است.' : 'Email is required.'
  else if (!isValidEmail(form.email)) errors.email = locale.value === 'fa' ? 'ایمیل معتبر نیست.' : 'Invalid email.'
  if (!form.message) errors.message = locale.value === 'fa' ? 'پیام را وارد کنید.' : 'Please type a message.'

  return !errors.name && !errors.email && !errors.message
}

const onSubmit = async () => {
  success.value = false
  if (!validate()) return

  submitting.value = true
  // Demo submit
  await new Promise((r) => setTimeout(r, 500))
  submitting.value = false
  success.value = true

  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.pageTitle { margin: 0 0 10px; font-size: 24px; font-weight: 1000; }
.pageDesc { margin: 0 0 16px; color: var(--muted); line-height: 1.9; max-width: 72ch; }

.grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 14px;
  margin-top: 14px;
}

.cardTitle { margin: 0 0 12px; font-weight: 1000; font-size: 16px; }

.row { display: flex; align-items: baseline; gap: 10px; margin: 10px 0; }
.key { font-weight: 900; min-width: 90px; }
.val { color: var(--muted); }

.form { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field--full { grid-column: 1 / -1; }
.label { font-size: 12px; color: color-mix(in srgb, var(--muted) 80%, transparent); font-weight: 900; }
.error { font-size: 12px; color: var(--danger); font-weight: 800; }
.submit { grid-column: 1 / -1; height: 44px; }

.success {
  grid-column: 1 / -1;
  border: 1px solid color-mix(in srgb, var(--secondary) 35%, transparent);
  background: var(--secondary-weak);
  padding: 10px 12px;
  border-radius: var(--r-md);
  font-weight: 900;
  font-size: 13px;
}

@media (max-width: 980px) {
  .grid { grid-template-columns: 1fr; }
  .form { grid-template-columns: 1fr; }
}
</style>
