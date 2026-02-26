<template>
  <section class="section" aria-label="ویدیو معرفی">
    <div class="container">
      <div class="ui-card card" v-reveal>
        <div class="text">
          <h2 class="h">{{ $t('home.videoTitle') }}</h2>
          <p class="p">{{ $t('home.videoDesc') }}</p>
          <div class="actions">
            <button class="ui-btn ui-btn-primary" type="button" @click="$emit('open', 'youtube')">
              {{ $t('actions.watchVideo') }}
            </button>
            <button class="ui-btn ui-btn-secondary" type="button" @click="$emit('open', 'mp4')">
              {{ $t('actions.watchTrailer') }}
            </button>
          </div>
        </div>

        <div class="preview" aria-hidden="true">
          <div class="glass">
            <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          <div class="play">
            <div class="tri"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open'])
</script>

<style scoped>
.section{ padding: 8px 0 0; }
.card{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 14px;
  align-items: stretch;
}
@media (max-width: 900px){
  .card{ grid-template-columns: 1fr; }
}
.h{ margin: 0; font-size: 22px; }
.p{ margin: 8px 0 0; color: var(--muted); }
.actions{ display:flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; }
.preview{
  border-radius: var(--r-lg);
  background: radial-gradient(circle at 20% 20%, rgba(245,158,11,.25), transparent 40%),
              radial-gradient(circle at 70% 30%, rgba(13,148,136,.22), transparent 45%),
              linear-gradient(135deg, rgba(30,58,138,.18), rgba(255,255,255,.18));
  border: 1px solid rgba(15,23,42,.10);
  position: relative;
  overflow: hidden;
  min-height: 220px;
}
.glass{
  position:absolute; top:12px; left:12px;
  display:flex; gap:6px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.55);
  border: 1px solid rgba(255,255,255,.55);
}
.dot{ width:10px; height:10px; border-radius:999px; background: rgba(15,23,42,.18); }
.play{
  position:absolute; inset:0;
  display:grid; place-items:center;
}
.tri{
  width:0; height:0;
  border-left: 22px solid rgba(255,255,255,.92);
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  filter: drop-shadow(0 20px 50px rgba(0,0,0,.25));
}
</style>
