/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 颜色扩展
      colors: {
        cream: '#F5F5F0',
        'cream-light': '#FAFAF5',
        'duck-yellow': '#FFD700',
        'duck-teal': '#4ECDC4',
        'sql-blue': '#5B9BD5',
        'python-yellow': '#F7DF1E',
        'ai-dark': '#1E1E2E',
        'text-primary': '#1A1A1A',
        'text-secondary': '#666666',
      },
      
      // 字体扩展
      fontFamily: {
        hand: ['Patrick Hand', 'cursive'],
        heading: ['Caveat', 'cursive'],
        body: ['Indie Flower', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      // 字体大小
      fontSize: {
        'display': ['6rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      
      // 间距扩展
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      
      // 动画
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) rotate(1deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      
      // 最大宽度
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
