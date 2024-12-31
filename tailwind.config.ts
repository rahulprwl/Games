import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-amber-/,
    },
    {
      pattern: /^bg-grey-/,
    },
    {
      pattern: /^bg-blue-/,
    },
    {
      pattern: /^bg-red-/,
    },
    {
      pattern: /^grid-rows-/,
    },
  ],
} satisfies Config;
