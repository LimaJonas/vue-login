import { checkAuth } from "@/services/AuthService";

const beforeEach = (to, from, next) => {
    if ((to.matched.some(rec => rec.meta.requiresAuth))) {
        checkAuth() ? next() : next('/');
    } else {
        next();
    }
};

export default beforeEach;