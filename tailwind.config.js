/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4EBD9',
          300: '#EADBC1',
          400: '#DFCBA8',
          500: '#D2B88D',
        },
        blush: {
          50: '#FFF5F5',
          100: '#FFEBEF',
          200: '#FED7DF',
          300: '#FBAEBf',
          400: '#F6849A',
          500: '#EC5A7B',
          600: '#D53A60',
        },
        rose: {
          muted: '#C88D94',
          dusty: '#B47B82',
          deep: '#8C565F',
        },
        lavender: {
          50: '#FAF8FC',
          100: '#F3EEF9',
          200: '#E6DCF3',
          300: '#D2C1EA',
          400: '#B69DD9',
          500: '#9B7AC7',
        },
        peach: {
          50: '#FFF8F4',
          100: '#FEEDDE',
          200: '#FCD8BD',
          300: '#F9BF99',
          400: '#F39866',
        },
        charcoal: {
          700: '#3D3838',
          800: '#2C2727',
          900: '#1D1A1A',
        },
        warmbrown: {
          600: '#645450',
          700: '#4D3F3B',
          800: '#382D2A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(90, 60, 60, 0.06), 0 2px 6px -1px rgba(90, 60, 60, 0.04)',
        'polaroid': '0 10px 30px -5px rgba(60, 40, 40, 0.12), 0 4px 10px -2px rgba(60, 40, 40, 0.06)',
        'card-hover': '0 18px 40px -10px rgba(180, 123, 130, 0.18), 0 8px 16px -4px rgba(60, 40, 40, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
