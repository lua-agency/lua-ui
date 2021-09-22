/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				neutral: {
					100: '#F8F9FB',
					200: '#EFF1F4',
					500: '#181A1E',
					600: '#222429',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
