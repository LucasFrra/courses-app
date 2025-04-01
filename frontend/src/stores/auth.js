import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  actions: {
    async fetchUser() {
      const res = await fetch('http://localhost:8000/api/user', {
        credentials: 'include'
      })

      if (res.ok) {
        const data = await res.json()
        this.user = data.user
      } else {
        this.user = null
      }
    },

    async logout() {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        credentials: 'include'
      })

      this.user = null
    }
  }
})
