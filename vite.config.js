import react from '@vitejs/plugin-react'
import path from 'path';
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  plugins: [react(), svgr({
    svgrOptions: {},
  }),],
})
