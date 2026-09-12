/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FBF7EF',
          200: '#F6ECD9',
          300: '#EBD8B2',
          400: '#DEC08B',
          500: '#C8A870', // Primary Gold Accent
          600: '#B59253',
          700: '#96763F',
          800: '#7B5E36',
          900: '#644D2F',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E4ECE3',
          200: '#CADACO',
          300: '#A4BC9F',
          400: '#7E9B79',
          500: '#5C7A57',
          600: '#486244',
          700: '#3A4F37',
          800: '#30412E',
          900: '#293728',
        },
        clinic: {
          dark: '#0E0E0E',      // Hero dark onyx
          darker: '#0A0A0A',    // Footer/modal dark
          cardDark: '#161616',  // Dark surface
          light: '#FAF8F6',     // Page soft cream background
          cream: '#F4EFEA',     // Card cream background
          creamDark: '#EBE4DC', // Border cream
          textDark: '#1A1A1A',
          textMuted: '#666666',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
