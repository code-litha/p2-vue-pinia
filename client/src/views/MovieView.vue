<script>
import Card from '../components/Card.vue'
import { useMovieStore } from '../stores/movie'
import { mapActions, mapState } from 'pinia'

export default {
  components: { Card },
  computed: {
    ...mapState(useMovieStore, ['dataMovies'])
  },
  methods: {
    ...mapActions(useMovieStore, ['getMovies'])
  },
  created() {
    this.getMovies()
  }
}
</script>

<template>
  <h1>Movie View nih</h1>
  <div class="row row-cols-4 g-4 container">
    <Card v-for="movie in dataMovies" :key="movie.id" :movie="movie" />
  </div>
</template>
