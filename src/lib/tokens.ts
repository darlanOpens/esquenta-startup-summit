// Design tokens extraídos do design.json
export const tokens = {
  colors: {
    'purple-700': '#463888',
    'purple-600': '#564C9B',
    'purple-400': '#6E5BC7',
    'orange-600': '#C95F0C',
    'orange-500': '#ED7414',
    'orange-400': '#F08D0D',
    'blue-500': '#33B6E5',
    'blue-200': '#4AC0EC',
    'green-500': '#67B32D',
    'yellow-500': '#F5D51D',
    'magenta-500': '#B23AAE',
    'white': '#FFFFFF',
    'white-80': 'rgba(255,255,255,0.80)',
    'black-10': 'rgba(0,0,0,0.10)'
  },
  gradients: {
    'brand-purple': 'linear-gradient(145deg, #6E5BC7 0%, #564C9B 100%)',
    'button-orange': 'linear-gradient(90deg, #ED7414 0%, #F08D0D 100%)',
    'button-orange-hover': 'linear-gradient(90deg, #F08D0D 0%, #ED7414 100%)'
  },
  shadows: {
    'elevation-sm': '0 2px 6px rgba(0,0,0,0.08)',
    'elevation-md': '0 4px 12px rgba(0,0,0,0.10)'
  },
  radii: {
    'lg': '24px',
    'md': '16px',
    'sm': '8px',
    'pill': '999px'
  },
  timings: {
    'hover-transition': '150ms ease-in-out'
  }
};

export type Tokens = typeof tokens;