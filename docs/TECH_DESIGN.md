# 个人作品集网站技术设计

## 技术栈

| 技术 | 选择 | 说明 |
|------|------|------|
| 前端框架 | React + TypeScript + Vite | 现代、高效、AI 支持好 |
| 样式方案 | Tailwind CSS | 快速开发、响应式支持 |
| 动画库 | Framer Motion | 实现苹果风格的平滑动画 |
| 路由 | React Router | 多页面（首页 + 分类详情页） |
| 部署平台 | Vercel | 免费、自动部署、CDN 加速 |

## 项目结构

```
src/
  components/          # 可复用组件
    Hero.tsx           # 首屏区域（大区块，个人简介 + CTA）
    CategoryCard.tsx   # 分类卡片（全宽，大图 + 标题）
    GridCard.tsx       # 底部网格卡片（2x2 布局）
    ProjectCard.tsx    # 项目卡片（详情页使用）
    Button.tsx         # CTA 按钮组件
    Footer.tsx         # 页脚
    ScrollToTop.tsx    # 滚动到顶部按钮

  components/ui/       # 基础 UI 组件
    Section.tsx        # 通用区块容器（全宽）

  pages/               # 页面
    Home.tsx           # 首页（Hero + 分类卡片 + 底部网格）
    CategoryDetail.tsx # 分类详情页（该分类的项目列表）
    About.tsx          # 关于我页面
    Contact.tsx        # 联系方式页面
    Skills.tsx         # 技能展示页面
    NotFound.tsx       # 404 页面

  data/                # 数据文件（核心：便于扩展）
    categories.ts      # 分类配置数据
    projects.ts        # 项目数据
    gridItems.ts       # 底部网格数据
    social.ts          # 社交链接数据
    personal.ts        # 个人信息数据

  hooks/               # 自定义 Hooks
    useScroll.ts       # 滚动监测（用于动画触发）

  lib/                 # 工具库
    utils.ts           # 工具函数

  styles/              # 样式文件
    global.css         # 全局样式（字体、基础重置）

  App.tsx              # 主应用组件（含路由配置）
  main.tsx             # 入口文件
  index.html           # HTML 入口
```

## 数据模型

### 分类数据 (Category)

```typescript
// data/categories.ts
export interface Category {
  id: string;           // 唯一标识，如 'hardware', 'software'
  name: string;         // 显示名称，如 '硬件设计'
  description?: string; // 分类描述（可选）
  coverImage: string;   // 封面图路径（全宽大图）
  buttonText?: string;  // 按钮文字（可选，默认"了解更多"）
}

export const categories: Category[] = [
  {
    id: 'hardware',
    name: '硬件设计',
    description: '电路设计、PCB设计、嵌入式系统',
    coverImage: '/images/categories/hardware.jpg',
  },
  {
    id: 'software',
    name: '软件学习',
    description: '操作系统、App应用、工具软件',
    coverImage: '/images/categories/software.jpg',
  },
  {
    id: 'ai',
    name: 'AI 应用',
    description: 'AI 工具使用心得、应用实践',
    coverImage: '/images/categories/ai.jpg',
  },
  {
    id: 'exploring',
    name: '探索中',
    description: '持续学习中的新领域',
    coverImage: '/images/categories/exploring.jpg',
  },
];
```

### 项目数据 (Project)

```typescript
// data/projects.ts
export interface Project {
  id: string;
  categoryId: string;       // 关联分类 ID
  title: string;
  description: string;      // 一句话描述
  image: string;            // 封面图路径
  techStack: string[];      // 技术栈标签
  link: string;             // 项目链接
  github?: string;          // GitHub 链接（可选）
  featured?: boolean;       // 是否精选（可选）
}

export const projects: Project[] = [
  {
    id: '1',
    categoryId: 'hardware',
    title: 'XXX 项目',
    description: '基于 STM32 的嵌入式系统设计',
    image: '/images/projects/hardware/1.jpg',
    techStack: ['STM32', 'PCB', 'C'],
    link: 'https://...',
  },
  // ...更多项目
];
```

### 底部网格数据 (GridItem)

```typescript
// data/gridItems.ts
export interface GridItem {
  id: string;
  title: string;       // 卡片标题
  description?: string;// 简短描述（可选）
  image?: string;      // 封面图（可选）
  link: string;        // 跳转链接
  icon?: string;       // 图标名称
}

export const gridItems: GridItem[] = [
  {
    id: 'about',
    title: '关于我',
    description: '了解更多关于我的信息',
    link: '/about',
    icon: 'User',
  },
  {
    id: 'contact',
    title: '联系方式',
    description: '获取联系方式',
    link: '/contact',
    icon: 'Mail',
  },
  {
    id: 'skills',
    title: '技能展示',
    description: '查看我的技能栈',
    link: '/skills',
    icon: 'Code',
  },
  {
    id: 'more',
    title: '更多',
    description: '其他内容',
    link: '/more',
    icon: 'More',
  },
];
```

### 个人信息 (Personal)

```typescript
// data/personal.ts
export interface PersonalInfo {
  name: string;         // 姓名
  avatar: string;       // 头像路径
  slogan: string;       // 一句话介绍
  bio: string;          // 详细介绍
  email: string;        // 邮箱
}

export const personal: PersonalInfo = {
  name: '你的名字',
  avatar: '/images/avatar.jpg',
  slogan: '硬件工程师 / 软件学习者 / AI 探索者',
  bio: '详细介绍...',
  email: 'your@email.com',
};
```

### 社交链接 (Social)

```typescript
// data/social.ts
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;  // 图标名称（对应 Lucide React 图标）
}

export const socialLinks: SocialLink[] = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/...', icon: 'Github' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/...', icon: 'Linkedin' },
  { id: 'email', name: 'Email', url: 'mailto:your@email.com', icon: 'Mail' },
];
```

## 页面结构

### 路由设计

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | Home 首页 | Hero + 分类卡片 + 底部网格 |
| `/category/:id` | CategoryDetail | 分类详情页，展示该分类所有项目 |
| `/about` | About | 关于我页面 |
| `/contact` | Contact | 联系方式页面 |
| `/skills` | Skills | 技能展示页面 |
| `*` | NotFound | 404 页面 |

### 页面结构

```
首页 (/)
├── Hero（大区块，60-80vh）
│   ├── 头像
│   ├── 姓名 + Slogan
│   └── CTA 按钮组（蓝色填充 + 蓝色链接）
├── CategoryCard 列表（全宽）
│   ├── 硬件设计（可点击）
│   ├── 软件学习（可点击）
│   ├── AI 应用（可点击）
│   └── 探索中（可点击）
├── 底部网格区域（2x2）
│   ├── 关于我
│   ├── 联系方式
│   ├── 技能展示
│   └── 更多
└── Footer
    └── 社交链接 + 版权

分类详情页 (/category/:id)
├── 返回首页链接
├── 分类标题 + 描述
├── ProjectCard 列表（该分类的所有项目）
└── Footer

关于我页面 (/about)
├── 个人介绍
├── 详细经历
└── Footer

技能展示页面 (/skills)
├── 技能分类
├── 技能标签云
└── Footer
```

## 组件设计

### Hero 组件

```typescript
// 包含：头像、标题、slogan、CTA 按钮组
// 样式：
//   - 高度：60-80vh（比分类区块大）
//   - 布局：居中，大字号
//   - 背景：简洁，浅色系
//   - 包含：蓝色填充按钮 + 蓝色文字链接
```

### CategoryCard 组件（分类卡片）

```typescript
// 属性：category: Category
// 包含：
//   - 全宽大图（coverImage，背景或前景）
//   - 分类标题（居中）
//   - 简短描述（可选，居中）
//   - CTA 按钮组（蓝色填充 + 蓝色链接）
// 交互：
//   - 整个卡片可点击
//   - 悬停效果（图片放大/蒙层变化）
//   - 链接到 /category/:id
// 样式：
//   - 全宽通栏
//   - 高度：300-400px
//   - 背景图 + 居中文字覆盖
```

### GridCard 组件（底部网格卡片）

```typescript
// 属性：item: GridItem
// 包含：
//   - 标题（居中）
//   - 简短描述（可选）
//   - 图标或图片（可选）
// 交互：
//   - 卡片可点击
//   - 悬停效果
//   - 链接到指定页面
// 样式：
//   - 2x2 网格布局
//   - 等宽卡片
//   - 白色背景或浅灰背景
```

### ProjectCard 组件（详情页项目卡片）

```typescript
// 属性：project: Project
// 包含：
//   - 项目截图
//   - 项目名称
//   - 一句话描述
//   - 技术栈标签
//   - 项目链接
// 样式：卡片式，悬停效果
```

### Button 组件（CTA 按钮）

```typescript
// 属性：
//   - variant: 'primary' | 'secondary'
//   - children: ReactNode
//   - onClick?: () => void
//   - className?: string

// 样式：
//   - primary: bg-[#007AFF] text-white rounded-full px-6 py-2
//   secondary: text-[#007AFF] hover:underline
```

### 动画效果（Framer Motion）

```typescript
// 滚动进入视口时的淡入效果
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// 卡片悬停效果
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
```

## 样式设计

### Tailwind CSS 配置

```typescript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',      // 强调色（苹果蓝）
        background: '#FFFFFF',   // 白色背景
        surface: '#F5F5F7',      // 浅灰背景
        text: {
          primary: '#1D1D1F',    // 主要文字
          secondary: '#86868b',  // 次要文字
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'hero': '70vh',  // Hero 区块高度
        'section': '80px', // 区块间距
      },
    },
  },
}
```

### 区块尺寸规范

| 区块 | 高度 | 说明 |
|------|------|------|
| Hero | 60-80vh | 最大，首屏视觉焦点 |
| CategoryCard | 300-400px | 全宽，图片为主 |
| GridCard | 200-300px | 2x2 网格，等高 |
| ProjectCard | 自适应 | 详情页使用 |

### 全局样式

```css
/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #FFFFFF;
  color: #1D1D1F;
  -webkit-font-smoothing: antialiased;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 全宽通栏区块 */
.full-width-section {
  width: 100%;
  max-width: 100%;
}
```

## 关键技术点

1. **数据驱动渲染** - 根据 categories 和 projects 数据自动生成页面
2. **React Router 路由** - 首页 + 分类详情页 + 附加页面
3. **Framer Motion 动画** - 实现苹果风格的滚动淡入、悬停效果
4. **响应式设计** - Tailwind CSS 实现全宽通栏 + 网格布局
5. **图片懒加载** - 使用原生 lazy load 或 React lazy loading
6. **组件复用** - 统一的 Card 组件保证一致性

### 路由配置

```typescript
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 外部资源

| 资源 | 推荐 | 说明 |
|------|------|------|
| 图标库 | Lucide React | 简洁、现代 |
| 字体 | Inter / 系统字体 | 简洁大方 |
| 图片占位 | Unsplash | 项目封面图 |
| 部署 | Vercel | 免费快速 |

## 扩展指南

### 添加新分类

只需在 `data/categories.ts` 中添加一行：

```typescript
{
  id: 'new-category',
  name: '新分类',
  description: '描述...',
  coverImage: '/images/categories/new.jpg',
}
```

首页会自动渲染新的分类卡片。

### 添加新项目

只需在 `data/projects.ts` 中添加：

```typescript
{
  id: 'new-project',
  categoryId: 'new-category',
  title: '项目名称',
  description: '一句话描述',
  image: '/images/projects/new.jpg',
  techStack: ['React'],
  link: 'https://...',
}
```

项目会自动出现在对应分类的详情页。

### 添加底部网格项

只需在 `data/gridItems.ts` 中添加：

```typescript
{
  id: 'new-item',
  title: '新项',
  description: '描述...',
  link: '/new-page',
  icon: 'IconName',
}
```

### 页面层级总结

```
首页 (/)
  ├── Hero（大区块）
  ├── 分类卡片（硬件设计 / 软件学习 / AI 应用 / 探索中）
  └── 底部网格（关于我 / 联系方式 / 技能展示 / 更多）
       ↓ 点击分类
  分类详情页 (/category/:id)
       └── 项目卡片列表
            ↓ 点击
       项目链接（外部）
       ↓ 点击底部网格
  其他页面（/about / /contact / /skills）
```
