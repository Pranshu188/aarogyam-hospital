/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf6',
          200: '#c2d8ed',
          300: '#93bde1',
          400: '#5c9ad0',
          500: '#3478be',
          600: '#235da2',
          700: '#1c4a83',
          800: '#0f3b68',
          900: '#0a2540',
          950: '#061626',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        emergency: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(10, 37, 64, 0.06), 0 2px 8px -2px rgba(10, 37, 64, 0.04)',
        'card': '0 8px 30px rgba(10, 37, 64, 0.08)',
        'card-hover': '0 14px 38px rgba(10, 37, 64, 0.12)',
        'dropdown': '0 12px 36px rgba(10, 37, 64, 0.14)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      }
    },
  },
  plugins: [],
}
