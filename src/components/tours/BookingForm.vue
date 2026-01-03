<template>
  <section class="box" aria-label="Booking form">
    <h2 class="title">{{ $t('booking.title') }}</h2>
    <p class="subtitle">{{ $t('booking.subtitle') }}</p>

    <form class="form" @submit.prevent="onSubmit" novalidate>
      <label class="field">
        <span class="label">{{ $t('booking.fullName') }}</span>
        <input class="input" v-model.trim="form.fullName" type="text" autocomplete="name" />
        <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
      </label>

      <label class="field">
        <span class="label">{{ $t('booking.phone') }}</span>
        <input class="input" v-model.trim="form.phone" type="tel" inputmode="tel" autocomplete="tel" />
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </label>

      <label class="field">
        <span class="label">{{ $t('booking.email') }}</span>
        <input class="input" v-model.trim="form.email" type="email" autocomplete="email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </label>

      <label class="field">
        <span class="label">{{ $t('booking.people') }}</span>
        <select class="input" v-model.number="form.people">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
          <option :value="4">4</option>
          <option :value="5">5+</option>
        </select>
      </label>

      <label class="field field--full">
        <span class="label">{{ $t('booking.note') }}</span>
        <textarea class="textarea" v-model.trim="form.note" rows="4"></textarea>
      </label>

      <button class="btn" type="submit" :disabled="submitting">
        {{ submitting ? '...' : $t('booking.submit') }}
      </button>

      <div v-if="success" class="success" role="status">
        {{ $t('booking.success') }}
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const submitting = ref(false)
const success = ref(false)

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  people: 2,
  note: ''
})

const errors = reactive({
  fullName: '',
  phone: '',
  email: ''
})

const normalizeDigits = (s) => {
  const map = {
    '۰': '0','۱': '1','۲': '2','۳': '3','۴': '4','۵': '5','۶': '6','۷': '7','۸': '8','۹': '9',
    '٠': '0','١': '1','٢': '2','٣': '3','٤': '4','٥': '5','٦': '6','٧': '7','٨': '8','٩': '9'
  }
  return String(s).replace(/[۰-۹٠-٩]/g, (d) => map[d] ?? d)
}

const isValidPhone = (raw) => {
  const s = normalizeDigits(raw).replace(/\s|-/g, '')
  if (/^09\d{9}$/.test(s)) return true
  if (/^\+98\d{10}$/.test(s)) return true
  if (/^\+?\d{7,15}$/.test(s)) return true
  return false
}

const isValidEmail = (email) => {
  if (!email) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validate = () => {
  errors.fullName = ''
  errors.phone = ''
  errors.email = ''

  if (!form.fullName) errors.fullName = t('booking.errors.required')
  if (!form.phone) errors.phone = t('booking.errors.required')
  else if (!isValidPhone(form.phone)) errors.phone = t('booking.errors.phone')

  if (!isValidEmail(form.email)) errors.email = t('booking.errors.email')

  return !errors.fullName && !errors.phone && !errors.email
}

const onSubmit = async () => {
  success.value = false
  if (!validate()) return

  submitting.value = true
  await new Promise((r) => setTimeout(r, 600))
  submitting.value = false
  success.value = true

  form.fullName = ''
  form.phone = ''
  form.email = ''
  form.people = 2
  form.note = ''
}
</script>

<style scoped>
.box {
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.04);
}

.title { margin: 0 0 6px; font-size: 18px; font-weight: 1000; color: var(--text); }
.subtitle { margin: 0 0 14px; color: var(--muted); line-height: 1.8; font-size: 13px; }

.form { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field--full { grid-column: 1 / -1; }

.label { font-size: 12px; color: #6b7280; font-weight: 900; }

.input, .textarea {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 14px;
  outline: none;
}
.input:focus, .textarea:focus { border-color: rgba(10,92,255,0.5); box-shadow: 0 0 0 4px rgba(10,92,255,0.12); }

.error { font-size: 12px; color: #b42318; font-weight: 800; }

.btn {
  grid-column: 1 / -1;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: var(--primary);
  color: #fff;
  font-weight: 1000;
  cursor: pointer;
}
.btn:disabled { opacity: 0.7; cursor: not-allowed; }

.success {
  grid-column: 1 / -1;
  border: 1px solid rgba(0, 180, 120, 0.3);
  background: rgba(0, 180, 120, 0.08);
  color: var(--text);
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 900;
  font-size: 13px;
}

@media (max-width: 760px) { .form { grid-template-columns: 1fr; } }
</style>
