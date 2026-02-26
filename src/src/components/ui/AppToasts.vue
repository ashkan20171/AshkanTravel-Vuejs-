<template>
  <div class="toasts" aria-live="polite" aria-relevant="additions" role="status">
    <div v-for="t in toasts.items" :key="t.id" class="toast" :data-type="t.type">
      <span class="toast__dot" aria-hidden="true" />
      <span class="toast__msg">{{ t.message }}</span>
      <button class="toast__x" type="button" @click="toasts.remove(t.id)" aria-label="Close">✕</button>
    </div>
  </div>
</template>

<script setup>
import { useToastsStore } from '@/stores/toasts'

const toasts = useToastsStore()
</script>

<style scoped>
.toasts {
  position: fixed;
  z-index: 1000;
  inset-inline: 16px;
  bottom: 16px;
  display: grid;
  gap: 10px;
  justify-items: end;
  pointer-events: none;
}

.toast {
  pointer-events: auto;
  width: min(520px, 100%);
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface) 92%, transparent);
  box-shadow: var(--shadow-md);
}

.toast__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--primary);
}

.toast[data-type='success'] .toast__dot { background: var(--secondary); }
.toast[data-type='danger'] .toast__dot { background: var(--danger); }
.toast[data-type='warning'] .toast__dot { background: var(--accent); }

.toast__msg { font-size: 13px; color: var(--text); }
.toast__x {
  border: 1px solid color-mix(in srgb, var(--border) 60%, transparent);
  background: transparent;
  color: var(--muted);
  width: 34px;
  height: 34px;
  border-radius: 12px;
  cursor: pointer;
}
.toast__x:hover { background: rgba(10, 92, 255, 0.08); color: var(--text); }
</style>
