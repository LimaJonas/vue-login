<template>
    <div>
        <h2>Login</h2>
        <form action method @submit="submitLogin">
            <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="Email"
            />
          
            <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="password"
            />

          <button class="btn btn-primary btn-block mt-4">
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            >Carregando...</span>
            <span v-else>Login</span>
          </button>

          <router-link
            tag="button"
            class="btn btn-success btn-block mt-3"
            :to="{ name: 'Register' }"
          >
            Register
          </router-link>
        </form>

    </div>
</template>

<script>
import { login } from "@/services/AuthService";
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
            loading: null,
        };
    },
    methods: {
    async submitLogin() {
      this.loading = true;
      await login(this.email, this.password)
        .then(() => {
            this.$router.push({ name: "Home" });
        })
        .catch(() => {
            console.log("Error")
        });
      this.loading = false;
    },
  },
}
</script>