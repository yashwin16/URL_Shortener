import { createRoute } from '@tanstack/react-router'
import DashboardPage from '../pages/DashboardPage.jsx'
import { checkAuth } from '../utils/helper.js'
import { rootRoute } from './Routetree.js'

export const DashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad: checkAuth
})
