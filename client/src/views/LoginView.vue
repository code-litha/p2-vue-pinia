<template>
  <h1>Login</h1>
  <form v-on:submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../stores/auth'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      const payload = {
        email: this.email,
        password: this.password
      }

      console.log(payload, '<<< payload')
      this.login(payload)
    },
    ...mapActions(useAuthStore, ['login'])
  }
}
</script>
