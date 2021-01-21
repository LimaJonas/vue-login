import Vue from "vue";
import VueRouter from "vue-router";

import authGuard from "./guards/AuthGuard";

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
        component: Home,
        meta: {requiresAuth: true}
    }
];

const router = new VueRouter({
    routes
});

// Route Guards
router.beforeEach((to, from, next) => {
    authGuard(to, from, next);
});

export default router;