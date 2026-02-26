import { defineStore } from 'pinia'
import { readJSON, writeJSON } from '@/utils/storage'

const KEY = 'ashkantravel_favorites'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    ids: readJSON(KEY, [])
  }),
  getters: {
    has: (state) => (id) => state.ids.includes(Number(id)),
    count: (state) => state.ids.length
  },
  actions: {
    toggle(id) {
      const n = Number(id)
      this.ids = this.ids.includes(n) ? this.ids.filter((x) => x !== n) : [...this.ids, n]
      writeJSON(KEY, this.ids)
    },
    clear() {
      this.ids = []
      writeJSON(KEY, this.ids)
    }
  }
})
