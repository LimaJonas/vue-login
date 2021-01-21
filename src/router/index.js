import Vue from "vue";
import VueRouter from "vue-router";

// Components
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/Register",
        name: "Register",
        component: Register
    },
];

const router = new VueRouter({
    routes
})

export default router;