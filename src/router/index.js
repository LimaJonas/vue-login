import Vue from "vue";
import VueRouter from "vue-router";

// Components
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";

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
    {
        path: "/Home",
        name: "Home",
        component: Home
    }
];

const router = new VueRouter({
    routes
})

export default router;