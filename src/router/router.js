import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import Create from "@/pages/Create";
import InfoPage from "@/pages/InfoPage";
import Registration from "@/pages/Registration";


const routes = [{
        path: '/',
        component: Main
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/info',
        component: InfoPage
    },
    {
        path: '/registration',
        component: Registration
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;