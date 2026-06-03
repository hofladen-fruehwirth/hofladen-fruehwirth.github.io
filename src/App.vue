<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useToasts, dismissToast } from '@/services/notifications'

const { toasts } = useToasts()

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<template>
  <div class="app">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
    <div v-if="toasts.length" class="toast-container">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="toast"
        :class="[`toast--${t.type}`, { 'toast--removing': t.removing }]"
      >
        <span class="toast__text">{{ t.message }}</span>
        <button class="toast__dismiss" @click="dismissToast(t.id)">&#10005;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

.toast-container {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;
  width: calc(100% - 32px);
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.25s ease-out;
  word-break: break-word;
}

.toast--removing {
  animation: slideOut 0.25s ease-in forwards;
}

.toast--error {
  background: #d63031;
  color: #fff;
}

.toast--success {
  background: #27ae60;
  color: #fff;
}

.toast__text {
  flex: 1;
}

.toast__dismiss {
  flex-shrink: 0;
  background: none;
  border: none;
  color: inherit;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0.8;
  padding: 2px;
  line-height: 1;
}

.toast__dismiss:hover {
  opacity: 1;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
