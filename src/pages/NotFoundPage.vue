<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

const router = useRouter()

useHead({
  title: 'Seite nicht gefunden – Hofladen Frühwirth',
  meta: [
    { name: 'robots', content: 'noindex' },
  ],
})
</script>

<template>
  <section class="page">
    <div class="container not-found">
      <h1>404</h1>
      <p>Seite nicht gefunden</p>
      <button class="btn btn-primary" @click="router.push('/')">
        Zur Startseite
      </button>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 80px 0;
}

.not-found h1 {
  font-size: 4rem;
  color: var(--accent);
  margin-bottom: 8px;
}

.not-found p {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .not-found {
    padding: 60px 0;
  }

  .not-found h1 {
    font-size: 2.5rem;
  }

  .not-found p {
    font-size: 1rem;
  }
}
</style>
