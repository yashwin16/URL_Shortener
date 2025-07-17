import { createRootRoute } from '@tanstack/react-router';
import App from '../App.jsx';
import { authRoute } from './auth.route.js';
import { DashboardRoute } from './Dashboard.js';
import { HomepageRoute } from './Homepage.js';

export const rootRoute = createRootRoute({
    component: App,
})

export const routeTree = rootRoute.addChildren([
    HomepageRoute,
    authRoute,
    DashboardRoute,
])