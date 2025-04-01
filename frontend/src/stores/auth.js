import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  actions: {
    async fetchUser() {
      await fetch('http://localhost:8000/sanctum/csrf-cookie', {
        credentials: 'include',
      })
      
      const res = await fetch('http://localhost:8000/api/user', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
        },
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
