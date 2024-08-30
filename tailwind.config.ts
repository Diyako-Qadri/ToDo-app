import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        YellowBg: "#a69400bf"
      },
      backgroundImage: {
        'Hero-image':
        'url(/backgroundImage.jpg)'
          // 'linear-gradient(#00000075, #0000004d), url(/backgroundImage.jpg)',
      },
      backgroundPosition: {
        'left-200': '-200px',
      },
      height: {
        'custom-home': 'calc(100vh - 80px)',
      },
    },
  },
  plugins: [function({ addUtilities }:any) {
    addUtilities({
      '.webkit-backdrop-blur': {
        '-webkit-backdrop-filter': 'blur(10px)',  
      },
    });
  },],
};
export default config;
