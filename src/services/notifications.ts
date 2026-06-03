import { ref } from 'vue'

export type ToastType = 'error' | 'success'

interface Toast {
  id: number
  message: string
  type: ToastType
  removing: boolean
}

const toasts = ref<Toast[]>([])
let nextId = 0

function addToast(message: string, type: ToastType, duration = 6000) {
  const id = nextId++
  toasts.value.push({ id, message, type, removing: false })
  setTimeout(() => {
    dismissToast(id)
  }, duration)
}

export function showError(message: string) {
  addToast(message, 'error')
}

export function showSuccess(message: string) {
  addToast(message, 'success', 4000)
}

export function dismissToast(id: number) {
  const toast = toasts.value.find((t) => t.id === id)
  if (!toast || toast.removing) return
  toast.removing = true
  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }, 250)
}

export function useToasts() {
  return { toasts }
}
