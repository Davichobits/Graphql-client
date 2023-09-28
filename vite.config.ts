import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_GRAPHQL_ENDPOINT': '"http://localhost:8000/graphql"',
    'process.env.REST_ENDPOINT': '"http://localhost:8000"',
    // Define otras variables de entorno aquí si es necesario
  },
})
