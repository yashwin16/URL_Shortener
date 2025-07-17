import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { routeTree } from './routing/Routetree.js'
import store from './store/store.js'

export const queryClient = new QueryClient()
const router = createRouter({
    routeTree,
    context:{
    queryClient,
    store
    }
})

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>
)