import { defineConfig } from 'vite'
import java, { createRollupInputConfig } from 'vite-plugin-java'

export default defineConfig(() => ({
  plugins: [java({
    input: createRollupInputConfig(),
  })],
}))
