module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: 'Open Sans, sans-serif',
      serif: 'Merriweather, Georgia, serif',
    },

    fontSize: {
      xs: [
        '.75rem',
        {
          lineHeight: '1',
        },
      ],
      sm: [
        '.875rem',
        {
          lineHeight: '1',
        },
      ],
      tiny: [
        '.875rem',
        {
          lineHeight: '1',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '3xl': [
        '1.875rem',
        {
          lineHeight: '1',
        },
      ],
      '4xl': [
        '2.25rem',
        {
          lineHeight: '2.31rem',
        },
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '1',
        },
      ],
      '6xl': [
        '4rem',
        {
          lineHeight: '1',
        },
      ],
      '7xl': [
        '5rem',
        {
          lineHeight: '1',
        },
      ],
    },

    extend: {
      colors: {
        primary: '#7a7a7a',
        gray: {
          200: '#d1d5db',
          300: '#7a7a7a',
          500: '#808185',
          700: '#4c4d4f',
          900: '#3B3D41',
        },
        yellow: {
          500: '#fdb813',
          900: '#E2A40E',
        },
      },
      stroke: ['hover', 'focus'],

      lineHeight: {
        'extra-tight': '1.125',
        7: '1.7',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
