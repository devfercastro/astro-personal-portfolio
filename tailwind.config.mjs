import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				"fade-in": "fadeIn 2s forwards",
				"bounce-delayed": "fadeIn 2s forwards, bounce 2.5s infinite",
				"badge-click": "badge-click 300ms forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"badge-click": {
					"0%": { backgroundColor: "var(--badge-bg)" },
					"50%": { backgroundColor: "var(--badge-bg-alt)" },
					"100%": { backgroundColor: "var(--badge-bg)" },
				},
			},
		},
	},
	plugins: [typography],
};
