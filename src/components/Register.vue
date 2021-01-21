<template>
    <div>
        <h2>Register</h2>
        <form action method>
            <input
                v-model="firstName"
                type="text"
                class="form-control"
                placeholder="First Name"
            />
            <input
                v-model="lastName"
                type="text"
                class="form-control"
                placeholder="Last Name"
            />
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
export default {
    name: "Register",
    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            loading: null,
        };
    }
}
</script>