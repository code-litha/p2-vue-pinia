<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter'
import { mapState } from 'pinia'

export default {
  components: {
    RouterLink,
    RouterView,
    HelloWorld
  },
  computed: {
    ...mapState(useCounterStore, ['counter'])
  }
}
</script>

<template>
  <div class="my-5">
    <nav>
      <RouterLink to="/" class="mx-3">Home</RouterLink>
      <RouterLink to="/about" class="mx-3">About</RouterLink>
      <RouterLink to="/movie" class="mx-3">Movie</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
