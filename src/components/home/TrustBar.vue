<template>
  <section class="trust" aria-label="اعتماد">
    <div class="container trust__inner">
      <div class="pill" v-reveal>
        <span class="ico">🔒</span>
        <span>رزرو امن</span>
      </div>
      <div class="pill" v-reveal="{ delay: 80 }">
        <span class="ico">📞</span>
        <span>پشتیبانی 24/7</span>
      </div>
      <div class="pill" v-reveal="{ delay: 160 }">
        <span class="ico">⭐</span>
        <span>رضایت 98٪ مسافران</span>
      </div>
      <div class="pill" v-reveal="{ delay: 240 }">
        <span class="ico">💳</span>
        <span>پرداخت مطمئن</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust{
  margin-top: 14px;
}
.trust__inner{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
}
.pill{
  display:flex;
  align-items:center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: var(--bg-glass);
  border: 1px solid rgba(255,255,255,.35);
  box-shadow: var(--shadow-sm);
  color: var(--text);
  font-weight: 700;
}
.ico{ filter: drop-shadow(0 10px 20px rgba(0,0,0,.10)); }
</style>
