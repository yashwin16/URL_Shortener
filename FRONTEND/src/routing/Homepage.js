import { createRoute } from '@tanstack/react-router'
import HomePage from '../pages/HomePage.jsx'
import { rootRoute } from './Routetree.js'

export const HomepageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage
})
