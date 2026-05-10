import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.PORT) || 5173;

  return {
    root: '.',
    base: '/',
    build: {
      target: 'esnext',
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true,
    },
    server: {
      host: '0.0.0.0',
      port,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
        plugins: [
          [
            '@swc/plugin-styled-components',
            {
              displayName: true,
              minify: true,
              ssr: false,
            },
          ],
        ],
      }),
      tsconfigPaths(),
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        imports: [
          'react',
          {
            react: [
              'cloneElement',
              'createContext',
              'StrictMode',
              'Suspense',
              'isValidElement',
            ],
          },
          {
            'styled-components': [
              'css',
              'keyframes',
              'createGlobalStyle',
              'ThemeProvider',
              ['default', 'styled'],
            ],
          },
          {
            from: 'react',
            imports: [
              'FunctionComponent',
              'ReactNode',
              'ReactElement',
              'Key',
              ['MouseEvent', 'ReactMouseEvent'],
              ['KeyboardEvent', 'ReactKeyboardEvent'],
              ['ClipboardEvent', 'ReactClipboardEvent'],
              'ComponentType',
              'ComponentProps',
              'ChangeEvent',
              'Ref',
              'RefObject',
              'Dispatch',
              'SetStateAction',
              'CSSProperties',
            ],
            type: true,
          },
          {
            from: 'styled-components',
            imports: ['DefaultTheme'],
            type: true,
          },
        ],
        dts: 'src/types/auto-imports.d.ts',
      }),
    ],
  };
});
