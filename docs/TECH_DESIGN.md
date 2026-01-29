# 技术设计文档 (Tech Design) - o7y666 个人网站

> 版本：v1.0  
> 日期：2026-01-29  
> 适用：React + TypeScript + Tailwind CSS

---

## 1. 技术栈选型

### 1.1 技术栈概览

| 层级 | 技术 | 版本 | 用途 |
|------|------|------|------|
| **框架** | React | ^18.2.0 | UI 组件构建 |
| **语言** | TypeScript | ^5.0.0 | 类型安全 |
| **构建工具** | Vite | ^5.0.0 | 快速开发服务器 + 打包 |
| **样式** | Tailwind CSS | ^3.4.0 | 原子化 CSS |
| **动画** | Framer Motion | ^11.0.0 | React 动画库 |
| **图标** | Lucide React | ^0.300.0 | SVG 图标 |
| **路由** | React Router | ^6.21.0 | 页面路由 |
| **部署** | Vercel | - | 静态网站托管 |

### 1.2 选型理由

#### 为什么选择 React + TypeScript？
1. **AI 友好**：ChatGPT/Claude 对 React 代码生成质量最高
2. **类型安全**：TypeScript 能在编码时发现错误，减少调试时间
3. **组件化**：每个区块独立开发，易于维护和迭代
4. **生态丰富**：遇到问题容易找到解决方案

#### 为什么选择 Vite？
1. **启动快**：秒级启动开发服务器
2. **热更新**：修改代码后页面即时刷新
3. **配置简单**：开箱即用，无需复杂配置
4. **构建优化**：自动代码分割，加载速度快

#### 为什么选择 Tailwind CSS？
1. **开发快**：不用写 CSS 文件，直接在 HTML 里写类名
2. **AI 擅长**：AI 生成 Tailwind 类名非常准确
3. **一致性**：内置设计系统，间距颜色统一
4. **体积小**：生产环境自动移除未使用的样式

#### 为什么选择 Framer Motion？
1. **React 原生**：声明式 API，与 React 配合好
2. **功能强大**：滚动动画、页面切换、手势支持
3. **文档清晰**：示例丰富，AI 学习资料多
4. **性能好**：自动使用 GPU 加速

---

## 2. 项目架构

### 2.1 目录结构

```
o7y666-ai-lab/
├── public/                          # 静态资源
│   ├── images/
│   │   ├── avatar.png              # 个人头像
│   │   ├── projects/               # 项目截图
│   │   │   ├── project-1-cover.png
│   │   │   └── ...
│   │   └── decorations/            # 装饰元素
│   │       ├── cloud.svg
│   │       └── mascot.svg
│   └── favicon.ico
│
├── src/
│   ├── components/                  # 组件
│   │   ├── ui/                     # 基础 UI 组件
│   │   │   ├── HandDrawnCard.tsx   # 手绘卡片
│   │   │   ├── HandDrawnButton.tsx # 手绘按钮
│   │   │   ├── SkillTag.tsx        # 技能标签
│   │   │   ├── CloudDecoration.tsx # 云朵装饰
│   │   │   └── AnimatedSection.tsx # 滚动动画容器
│   │   │
│   │   ├── layout/                 # 布局组件
│   │   │   ├── Header.tsx          # 导航栏
│   │   │   ├── Footer.tsx          # 页脚
│   │   │   └── Layout.tsx          # 页面布局包装
│   │   │
│   │   └── sections/               # 页面区块
│   │       ├── Hero.tsx            # 首屏
│   │       ├── About.tsx           # 关于我
│   │       ├── Projects.tsx        # 项目列表
│   │       └── ProjectDetail.tsx   # 项目详情
│   │
│   ├── data/                        # 数据文件
│   │   ├── projects.ts             # 项目数据
│   │   ├── skills.ts               # 技能数据（如需要）
│   │   └── siteConfig.ts           # 站点配置
│   │
│   ├── styles/                      # 样式文件
│   │   ├── hand-drawn.css          # 手绘风格 CSS
│   │   └── globals.css             # 全局样式
│   │
│   ├── hooks/                       # 自定义 Hooks
│   │   └── useScrollAnimation.ts   # 滚动动画 Hook
│   │
│   ├── types/                       # TypeScript 类型
│   │   └── index.ts                # 类型定义
│   │
│   ├── pages/                       # 页面组件
│   │   ├── Home.tsx                # 首页
│   │   ├── ProjectPage.tsx         # 项目详情页
│   │   └── NotFound.tsx            # 404 页面
│   │
│   ├── App.tsx                      # 主应用组件
│   ├── main.tsx                     # 应用入口
│   └── router.tsx                   # 路由配置
│
├── index.html                       # HTML 模板
├── tailwind.config.js              # Tailwind 配置
├── tsconfig.json                   # TypeScript 配置
├── vite.config.ts                  # Vite 配置
└── package.json                    # 项目依赖
```

### 2.2 文件命名规范

| 类型 | 命名方式 | 示例 |
|------|---------|------|
| 组件文件 | PascalCase | `HandDrawnCard.tsx` |
| 工具函数 | camelCase | `formatDate.ts` |
| 常量/配置 | UPPER_SNAKE_CASE | `SITE_CONFIG.ts` |
| 样式文件 | kebab-case | `hand-drawn.css` |
| 类型定义 | PascalCase + 后缀 | `Project.types.ts` |

---

## 3. 关键实现方案

### 3.1 手绘风格 CSS 实现

创建 `src/styles/hand-drawn.css`：

```css
/* ============================================
   手绘风格 CSS 变量和工具类
   ============================================ */

:root {
  /* 颜色变量 */
  --color-bg-primary: #F5F5F0;
  --color-bg-secondary: #FFFFFF;
  --color-accent: #FFD700;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-ai-dark: #1E1E2E;
  --color-teal: #4ECDC4;
  --color-sql: #5B9BD5;
  --color-python: #F7DF1E;
  
  /* 手绘边框 - 三种变体 */
  --hand-radius-1: 255px 15px 225px 15px / 15px 225px 15px 255px;
  --hand-radius-2: 15px 225px 15px 255px / 255px 15px 225px 15px;
  --hand-radius-3: 25px 200px 25px 200px / 200px 25px 200px 25px;
  --hand-border-width: 2.5px;
  --hand-border-color: #1A1A1A;
  
  /* 阴影 */
  --shadow-hand: 4px 4px 0 rgba(0, 0, 0, 0.15);
  --shadow-hand-yellow: 4px 4px 0 #FFD700;
  --shadow-hand-dark: 4px 4px 0 #1A1A1A;
  --shadow-hand-hover: 6px 6px 0 rgba(0, 0, 0, 0.2);
  
  /* 间距 */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;
  --space-2xl: 120px;
  
  /* 过渡 */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============================================
   手绘边框类
   ============================================ */

.hand-border {
  border-radius: var(--hand-radius-1);
  border: var(--hand-border-width) solid var(--hand-border-color);
}

.hand-border-2 {
  border-radius: var(--hand-radius-2);
  border: var(--hand-border-width) solid var(--hand-border-color);
}

.hand-border-3 {
  border-radius: var(--hand-radius-3);
  border: var(--hand-border-width) solid var(--hand-border-color);
}

/* 无填充，仅边框 */
.hand-border-outline {
  border-radius: var(--hand-radius-1);
  border: var(--hand-border-width) solid var(--hand-border-color);
  background: transparent;
}

/* ============================================
   旋转角度类
   ============================================ */

.tilt-1 { transform: rotate(-1.5deg); }
.tilt-2 { transform: rotate(1.2deg); }
.tilt-3 { transform: rotate(-0.8deg); }
.tilt-4 { transform: rotate(2deg); }

/* 悬停时恢复水平 */
.tilt-hover {
  transition: transform var(--transition-normal);
}
.tilt-hover:hover {
  transform: rotate(0deg);
}

/* ============================================
   手绘阴影类
   ============================================ */

.shadow-hand {
  box-shadow: var(--shadow-hand);
}

.shadow-hand-yellow {
  box-shadow: var(--shadow-hand-yellow);
}

.shadow-hand-dark {
  box-shadow: var(--shadow-hand-dark);
}

/* 悬停增强阴影 */
.shadow-hand-hover {
  transition: box-shadow var(--transition-normal), transform var(--transition-normal);
}
.shadow-hand-hover:hover {
  box-shadow: var(--shadow-hand-hover);
  transform: translateY(-4px);
}

/* ============================================
   手绘下划线
   ============================================ */

.hand-underline {
  position: relative;
  display: inline-block;
}

.hand-underline::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-accent);
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
  transform: rotate(-1deg);
}

/* 变体：青色下划线 */
.hand-underline-teal::after {
  background: var(--color-teal);
}

/* ============================================
   云朵装饰
   ============================================ */

.cloud-decoration {
  position: absolute;
  background: white;
  border: 2px solid var(--hand-border-color);
  border-radius: 60% 40% 50% 50% / 50% 50% 50% 50%;
}

.cloud-decoration::before {
  content: '';
  position: absolute;
  background: white;
  border: 2px solid var(--hand-border-color);
  border-radius: 50% 50% 60% 40% / 50% 50% 50% 50%;
}

/* 云朵尺寸变体 */
.cloud-sm { width: 60px; height: 30px; }
.cloud-md { width: 100px; height: 50px; }
.cloud-lg { width: 150px; height: 75px; }

/* ============================================
   按钮样式
   ============================================ */

.btn-hand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-family: 'Patrick Hand', cursive;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  border-radius: var(--hand-radius-1);
  border: var(--hand-border-width) solid var(--hand-border-color);
}

/* 主按钮 */
.btn-hand-primary {
  background: var(--color-accent);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-hand);
}

.btn-hand-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--hand-border-color);
}

.btn-hand-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--hand-border-color);
}

/* 次按钮 */
.btn-hand-secondary {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-hand);
}

.btn-hand-secondary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--hand-border-color);
}

/* 幽灵按钮 */
.btn-hand-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-text-secondary);
}

.btn-hand-ghost:hover {
  background: var(--color-bg-secondary);
  border-color: var(--hand-border-color);
}

/* ============================================
   卡片悬停效果
   ============================================ */

.card-hand {
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.card-hand:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow: var(--shadow-hand-hover);
}

/* ============================================
   入场动画
   ============================================ */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px) rotate(1deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0; /* 初始状态隐藏 */
}

.animate-fade-in-up.visible {
  opacity: 1;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* 动画延迟类 */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

/* ============================================
   滚动触发动画（通过 JS 添加 .visible 类）
   ============================================ */

.scroll-animate {
  opacity: 0;
  transform: translateY(30px) rotate(1deg);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0) rotate(0deg);
}
```

### 3.2 Tailwind 配置

`tailwind.config.js`：

```javascript
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
        'display': ['6rem', { lineHeight: '1.1', fontWeight: '700' }],    // 96px
        'display-md': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 72px
        'display-sm': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],   // 48px
      },
      
      // 间距扩展
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '30': '7.5rem',   // 120px
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
```

### 3.3 全局样式

`src/styles/globals.css`：

```css
/* ============================================
   全局样式
   ============================================ */

/* 导入手绘风格 */
@import './hand-drawn.css';

/* 导入 Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Indie+Flower&family=JetBrains+Mono:wght@400;500&family=Patrick+Hand&display=swap');

/* CSS Reset 和基础样式 */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Patrick Hand', 'Indie Flower', cursive;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 标题字体 */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Caveat', cursive;
  font-weight: 600;
  line-height: 1.2;
}

/* 代码字体 */
code, pre {
  font-family: 'JetBrains Mono', monospace;
}

/* 链接样式 */
a {
  color: inherit;
  text-decoration: none;
}

/* 图片 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 按钮重置 */
button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* 列表重置 */
ul, ol {
  list-style: none;
}

/* 选中文字样式 */
::selection {
  background-color: var(--color-accent);
  color: var(--color-text-primary);
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-text-secondary);
  border-radius: 5px;
  border: 2px solid var(--color-bg-primary);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-primary);
}
```

---

## 4. 核心组件实现

### 4.1 HandDrawnCard 组件

```typescript
// src/components/ui/HandDrawnCard.tsx

import React from 'react';

interface HandDrawnCardProps {
  children: React.ReactNode;
  variant?: 1 | 2 | 3;
  tilt?: 1 | 2 | 3 | 4;
  bgColor?: 'white' | 'cream' | 'dark' | 'transparent';
  shadow?: 'default' | 'yellow' | 'dark' | 'none';
  hover?: boolean;
  className?: string;
}

export const HandDrawnCard: React.FC<HandDrawnCardProps> = ({
  children,
  variant = 1,
  tilt = 1,
  bgColor = 'white',
  shadow = 'default',
  hover = true,
  className = '',
}) => {
  // 边框变体
  const borderClasses = {
    1: 'hand-border',
    2: 'hand-border-2',
    3: 'hand-border-3',
  };

  // 旋转变体
  const tiltClasses = {
    1: 'tilt-1',
    2: 'tilt-2',
    3: 'tilt-3',
    4: 'tilt-4',
  };

  // 背景色
  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-cream',
    dark: 'bg-ai-dark text-white',
    transparent: 'bg-transparent',
  };

  // 阴影
  const shadowClasses = {
    default: 'shadow-hand',
    yellow: 'shadow-hand-yellow',
    dark: 'shadow-hand-dark',
    none: '',
  };

  // 悬停效果
  const hoverClasses = hover ? 'card-hand cursor-pointer' : '';

  return (
    <div
      className={`
        ${borderClasses[variant]}
        ${tiltClasses[tilt]}
        ${bgClasses[bgColor]}
        ${shadowClasses[shadow]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default HandDrawnCard;
```

### 4.2 HandDrawnButton 组件

```typescript
// src/components/ui/HandDrawnButton.tsx

import React from 'react';

interface HandDrawnButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  tilt?: 1 | 2 | 3 | 4;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const HandDrawnButton: React.FC<HandDrawnButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  tilt = 1,
  href,
  onClick,
  className = '',
}) => {
  const tiltClasses = {
    1: 'tilt-1',
    2: 'tilt-2',
    3: 'tilt-3',
    4: 'tilt-4',
  };

  const variantClasses = {
    primary: 'btn-hand btn-hand-primary',
    secondary: 'btn-hand btn-hand-secondary',
    ghost: 'btn-hand btn-hand-ghost',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-base',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  const combinedClassName = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${tiltClasses[tilt]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default HandDrawnButton;
```

### 4.3 滚动动画 Hook

```typescript
// src/hooks/useScrollAnimation.ts

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export default useScrollAnimation;
```

---

## 5. 路由配置

```typescript
// src/router.tsx

import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects/:slug',
        element: <ProjectPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
```

---

## 6. 性能优化策略

### 6.1 图片优化

```typescript
// 使用懒加载
<img 
  src="image.png" 
  alt="描述" 
  loading="lazy"
  decoding="async"
/>

// 响应式图片
<img 
  srcSet="image-400.png 400w, image-800.png 800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  src="image-800.png"
  alt="描述"
/>
```

### 6.2 代码分割

```typescript
// 路由级别代码分割
import { lazy, Suspense } from 'react';

const ProjectPage = lazy(() => import('./pages/ProjectPage'));

// 使用 Suspense 包裹
<Suspense fallback={<div>Loading...</div>}>
  <ProjectPage />
</Suspense>
```

### 6.3 字体优化

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link 
  href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Indie+Flower&family=JetBrains+Mono:wght@400;500&family=Patrick+Hand&display=swap" 
  rel="stylesheet"
>
```

---

## 7. 开发环境配置

### 7.1 初始化命令

```bash
# 1. 创建 Vite 项目
npm create vite@latest o7y666-ai-lab -- --template react-ts

# 2. 进入项目
cd o7y666-ai-lab

# 3. 安装依赖
npm install

# 4. 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. 安装其他依赖
npm install framer-motion lucide-react react-router-dom

# 6. 安装开发依赖
npm install -D @types/node

# 7. 启动开发服务器
npm run dev
```

### 7.2 package.json 示例

```json
{
  "name": "o7y666-ai-lab",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

### 7.3 TypeScript 配置

`tsconfig.json`：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 8. 部署配置

### 8.1 Vercel 部署

`vercel.json`：

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 8.2 构建配置

`vite.config.ts`：

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
```

---

## 9. 开发检查清单

### 开发前准备
- [ ] Node.js 18+ 已安装
- [ ] 按照第 7.1 节完成项目初始化
- [ ] 复制 tailwind.config.js 配置
- [ ] 复制 hand-drawn.css 到 src/styles/
- [ ] 复制 globals.css 到 src/styles/

### 开发过程中
- [ ] 组件使用 TypeScript 类型
- [ ] 手绘风格类名正确应用
- [ ] 图片使用懒加载
- [ ] 响应式布局测试

### 上线前检查
- [ ] `npm run build` 成功
- [ ] Lighthouse 性能分数 > 90
- [ ] 所有链接可点击
- [ ] 移动端显示正常

---

*文档结束*
