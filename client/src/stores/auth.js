import { defineStore } from 'pinia'
import axios from 'axios'
import { API_URL } from '../config/api'

// buat nama id unique, singular
// buat nama store dengan naming => use + id + Store
// buat nama file sama dengan id

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      // mirip dengan data di component
      // ada banyak state
    }
  },
  getters: {
    // mirip dengan computed di component
  },
  actions: {
    // mirip dengan methods di component
    async login(payload) {
      try {
        const { data } = await axios.post(API_URL + '/login', payload)
        console.log(data, '<<< data dari login')
        localStorage.setItem('access_token', data.access_token)
        this.router.push('/')
      } catch (error) {
        console.log(error, '<<< error')
      }
    }
  }
})
