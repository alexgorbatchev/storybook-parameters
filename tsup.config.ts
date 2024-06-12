import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  bundle: true,
  format: ['cjs', 'esm'],
  dts: true,
  keepNames: true,
  minify: false,
});
