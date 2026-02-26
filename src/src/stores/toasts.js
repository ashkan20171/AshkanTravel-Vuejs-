import { defineStore } from 'pinia'

let idSeq = 1

export const useToastsStore = defineStore('toasts', {
  state: () => ({
    items: []
  }),
  actions: {
    push(message, { type = 'info', timeout = 2600 } = {}) {
      const id = idSeq++
      this.items.push({ id, message, type })
      window.setTimeout(() => this.remove(id), timeout)
      return id
    },
    remove(id) {
      this.items = this.items.filter((t) => t.id !== id)
    }
  }
})
