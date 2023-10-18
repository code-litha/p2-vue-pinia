import { defineStore } from 'pinia'

// buat nama id unique, singular
// buat nama store dengan naming => use + id + Store
// buat nama file sama dengan id

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      // mirip dengan data di component
      counter: 100,
      name: 'Alif'
      // ada banyak state
    }
  },
  getters: {
    // mirip dengan computed di component
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    // mirip dengan methods di component
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
})
