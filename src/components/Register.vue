<template>
    <div>
        <h2>Register</h2>
        <form action method @submit="submitRegister">
            <input
                v-model="User.firstName"
                type="text"
                class="form-control"
                placeholder="First Name"
            />
            <input
                v-model="User.lastName"
                type="text"
                class="form-control"
                placeholder="Last Name"
            />
            <input
                v-model="User.email"
                type="text"
                class="form-control"
                placeholder="Email"
            />
          
            <input
                v-model="User.password"
                type="password"
                class="form-control"
                placeholder="Password"
            />

            <input
                v-model="passwordRepeat"
                type="password"
                class="form-control"
                placeholder="Confirm password"
            />

          <button type="submit" class="btn btn-primary btn-block mt-4">
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            >
              <span class="sr-only">Carregando...</span>
            </span>
            <span v-else>Register</span>
          </button>

          <router-link
            tag="button"
            class="btn btn-success btn-block mt-3"
            :to="{ name: 'Login' }"
          >
            Go back
          </router-link>
        </form>

    </div>
</template>

<script>
import { ApiService as UserService } from "@/services/ApiService";

export default {
    name: "Register",
    data() {
        return {
            userService: new UserService("user"),
            User: {
              firstName: null,
              lastName: null,
              email: null,
              password: null,
            },
            loading: null,
            passwordRepeat: null,
        };
    },
    methods: {
      async submitRegister() {
        this.loading = true;
        if (this.User.password == this.passwordRepeat) {
          await this.userService.register(this.User);
          this.$router.push({ name: "Login" });
        } else {
          console.log("Error");
        }
        this.loading = false;
      },
    }
}
</script>