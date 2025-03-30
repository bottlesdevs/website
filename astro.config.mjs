// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// @ts-ignore
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://usebottles.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), preact()],
});
