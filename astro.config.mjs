// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
// @ts-ignore
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://usebottles.com",
  integrations: [tailwind(), icon(), preact()],
});
