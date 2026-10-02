
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react()],

    test: {
      environment: 'jsdom',
      globals: true,
      env: env, 
    },
  };
});
