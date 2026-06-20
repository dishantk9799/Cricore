import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './lib/queryClient.jsx'
import store from './lib/store.jsx'
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
    <>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </QueryClientProvider>
    </>
)
