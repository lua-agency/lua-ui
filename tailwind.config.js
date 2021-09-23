/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
	mode: 'jit',
	darkMode: 'class',
<<<<<<< HEAD
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
=======
	purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope'],
			},
>>>>>>> 213bade (🚀 lua-ui setup)
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
<<<<<<< HEAD
	plugins: [],
=======
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
>>>>>>> 213bade (🚀 lua-ui setup)
};
