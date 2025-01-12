import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
        </QueryClientProvider>
        </AuthProvider>
  </StrictMode>,
)
