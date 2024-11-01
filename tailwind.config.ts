import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-gradient-bg': 'linear-gradient(50.0deg, #016DEA 27.41%, #FA0101 95.02%)',  
        'custom-gradient': 'linear-gradient(90deg, #016DEA 0%, #005FCD 33.41%, #0052B1 63.49%, #003B7E 100.01%)',

      },
      boxShadow: {
        'inner-bottom': 'inset 0 -10px  30px rgba(0, 0, 0, 0.7)',
      },
      colors: {
        'gradient-start': '#016DEA',
        'gradient-mid-1': '#005FCD',
        'gradient-mid-2': '#0052B1',
        'gradient-end': '#003B7E',
      },
    
    },
  },
  plugins: [
    
  ],
};
export default config;
