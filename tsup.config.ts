import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  bundle: false,
  format: ['cjs', 'esm'],
  dts: true,
  keepNames: true,
  minify: false,
});
