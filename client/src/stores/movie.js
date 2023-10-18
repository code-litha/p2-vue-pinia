import { defineStore } from 'pinia'
import axios from 'axios'
import { API_URL } from '../config/api'

export const useMovieStore = defineStore('movie', {
  state: () => {
    return {
      // mirip dengan data di component
      name: 'Rizal',
      dataMovies: []
    }
  },
  getters: {
    // mirip dengan computed di component
  },
  actions: {
    // mirip dengan methods di component
    async getMovies() {
      try {
        const { data } = await axios.get(API_URL + '/movies')
        // console.log(data, '<<< data')
        this.dataMovies = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
