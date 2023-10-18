<template>
  <div class="col">
    <div class="card">
      <img :src="movie.imageUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie']
}
</script>
