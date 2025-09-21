// @ts-check
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    edgeMiddleware: true,
    isr: {
      bypassToken: process.env.REVALIDATE_TOKEN,
      exclude: [/^\/api\/.+/],
    },
  }),
  output: 'server',
})
