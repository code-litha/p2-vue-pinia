<template>
  <div class="about">
    <!-- <h1>Counter: {{ this.counterStore.counter }}</h1>
    <h1>Double Counter: {{ this.counterStore.doubleCounter }}</h1>

    <button v-on:click="this.counterStore.increment">Increment</button>
    <button v-on:click="this.counterStore.decrement">Decrement</button> -->

    <h1>Name di CounterStore : {{ this.nameDariCounter }}</h1>
    <input type="text" v-model="nameDariCounter" />

    <h1>Name di MovieStore : {{ this.nameDariMovie }}</h1>
    <input type="text" v-model="nameDariMovie" />

    <button v-on:click="this.increment">Increment</button>
  </div>
</template>

<script>
import { mapStores, mapState, mapWritableState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useMovieStore } from '../stores/movie'

export default {
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    // ...mapStores(useCounterStore, useMovieStore)
    // ...mapState(useCounterStore, ['name'])
    // ...mapWritableState(useCounterStore, ['name']),
    ...mapWritableState(useCounterStore, {
      nameDariCounter: 'name'
    }),
    // ...mapState(useMovieStore, ['name'])
    ...mapState(useMovieStore, {
      nameDariMovie: 'name'
    })
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>
