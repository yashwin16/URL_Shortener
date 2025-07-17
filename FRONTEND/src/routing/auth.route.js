import { createRoute } from "@tanstack/react-router"
import AuthPage from "../pages/AuthPage"
import { rootRoute } from "./Routetree.js"

export const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth',
    component: AuthPage,
    })