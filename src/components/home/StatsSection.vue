<template>
  <section class="section" aria-label="Stats">
    <div class="container">
      <div class="grid ui-card glass">
        <div class="stat" v-for="s in stats" :key="s.key">
          <div class="icon" aria-hidden="true">{{ s.icon }}</div>
          <div class="num">{{ s.value }}</div>
          <div class="lbl">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const stats = computed(() => [
  { key: 'support', icon: '☎️', value: '24/7', label: t('home.stats.support') },
  { key: 'rating', icon: '⭐', value: '4.8/5', label: t('home.stats.rating') },
  { key: 'travelers', icon: '🧳', value: '12k+', label: t('home.stats.travelers') },
  { key: 'dest', icon: '🌍', value: '60+', label: t('home.stats.destinations') }
])
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  padding: 18px;
  border-radius: 22px;
  overflow:hidden;
  position: relative;
}
.grid:before{
  content:"";
  position:absolute; inset:0;
  background:
    radial-gradient(circle at 20% 20%, rgba(245,158,11,.18), transparent 45%),
    radial-gradient(circle at 80% 20%, rgba(13,148,136,.16), transparent 42%),
    radial-gradient(circle at 50% 120%, rgba(59,130,246,.22), transparent 55%);
  pointer-events:none;
}
.stat{
  position: relative;
  padding: 16px 14px;
  border-radius: 18px;
  background: rgba(255,255,255,.60);
  border: 1px solid rgba(255,255,255,.55);
  backdrop-filter: blur(10px);
  display:flex;
  flex-direction:column;
  gap: 6px;
  align-items:flex-start;
}
.icon{
  width: 42px; height: 42px;
  border-radius: 14px;
  display:grid; place-items:center;
  background: rgba(2,6,23,.06);
}
.num{
  font-size: 22px;
  font-weight: 900;
  letter-spacing: .2px;
}
.lbl{
  color: var(--muted);
  font-weight: 700;
  font-size: 13px;
}
@media (max-width: 900px){
  .grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}
</style>
