import About from "./views/About"
import Home from "./views/Home"
import Login from "./views/Login"
import Profile from "./views/Profile"

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false,
    },
    {
        path: '/about',
        exact: true,
        component: About,
        auth: false,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        auth: true,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        auth: false,
    }
]