<template>
  <div v-if="open" class="ui-modal" role="dialog" aria-modal="true" :aria-label="title" @click.self="emitClose">
    <div class="ui-modal__panel">
      <button class="ui-modal__close" type="button" @click="emitClose" :aria-label="closeLabel">✕</button>

      <div class="ui-modal__head">
        <div class="ui-modal__title">{{ title }}</div>
        <div class="ui-modal__hint" v-if="hint">{{ hint }}</div>
      </div>

      <div class="ui-video">
        <iframe
          v-if="youtubeId"
          :src="youtubeSrc"
          title="video"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        />
        <video v-else-if="videoSrc" controls autoplay playsinline>
          <source :src="videoSrc" type="video/mp4" />
        </video>

        <div v-else class="ui-video__empty">
          ویدیو تنظیم نشده. برای mp4 فایل را در پوشه <code>public/videos</code> قرار بده یا <code>youtubeId</code> را تنظیم کن.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: 'ویدیو' },
  hint: { type: String, default: '' },
  youtubeId: { type: String, default: '' },
  videoSrc: { type: String, default: '' }, // مثال: /videos/travel.mp4
  closeLabel: { type: String, default: 'بستن' },
})

const emit = defineEmits(['close'])

const youtubeSrc = computed(() => {
  if (!props.youtubeId) return ''
  // autoplay=1 for modal experience
  return `https://www.youtube.com/embed/${props.youtubeId}?autoplay=1&rel=0&modestbranding=1`
})

const emitClose = () => emit('close')

// Prevent background scroll while open
watch(
  () => props.open,
  (v) => {
    document.documentElement.style.overflow = v ? 'hidden' : ''
  }
)
</script>

<style scoped>
.ui-modal{
  position:fixed; inset:0; z-index:999;
  background: rgba(2,6,23,.70);
  display:grid; place-items:center;
  padding: 18px;
  backdrop-filter: blur(8px);
}
.ui-modal__panel{
  width:min(980px, 100%);
  background: var(--bg-glass);
  border: 1px solid rgba(255,255,255,.35);
  border-radius: var(--r-xl);
  overflow:hidden;
  box-shadow: var(--shadow-md);
  position:relative;
}
.ui-modal__close{
  position:absolute; top:12px; left:12px;
  border:0;
  width:42px; height:42px;
  border-radius: 999px;
  cursor:pointer;
  background: rgba(15,23,42,.10);
}
.ui-modal__close:hover{ background: rgba(15,23,42,.16); }
.ui-modal__head{
  padding: 18px 18px 0;
}
.ui-modal__title{
  font-weight: 800;
  color: var(--text);
}
.ui-modal__hint{
  margin-top: 6px;
  color: var(--muted);
  font-size: 14px;
}
.ui-video{
  width:100%;
  aspect-ratio: 16/9;
  padding: 14px 18px 18px;
}
.ui-video iframe,
.ui-video video{
  width:100%;
  height:100%;
  border-radius: var(--r-lg);
  display:block;
  background: #000;
}
.ui-video__empty{
  width:100%;
  height:100%;
  border-radius: var(--r-lg);
  background: rgba(255,255,255,.45);
  border: 1px dashed rgba(15,23,42,.18);
  display:grid;
  place-items:center;
  padding: 18px;
  color: var(--text);
  text-align:center;
}
code{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
</style>
