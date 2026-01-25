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
    CategoryCard.tsx   # 分类卡片（首页使用，大图 + 标题）
    ProjectCard.tsx    # 项目卡片（详情页使用）
    Footer.tsx         # 页脚
    ScrollToTop.tsx    # 滚动到顶部按钮

  components/ui/       # 基础 UI 组件
    Button.tsx         # 按钮组件
    SectionHeading.tsx # 区块标题组件

  pages/               # 页面
    Home.tsx           # 首页（Hero + 分类卡片列表）
    CategoryDetail.tsx # 分类详情页（该分类的项目列表）
    NotFound.tsx       # 404 页面

  data/                # 数据文件（核心：便于扩展）
    categories.ts      # 分类配置数据
    projects.ts        # 项目数据
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
  description?: string; // 分类描述（可选，用于首页卡片）
  coverImage?: string;  // 封面图路径（首页卡片大图）
  icon?: string;        // 图标（可选）
  color?: string;       // 分类主题色（可选）
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
  // 硬件设计分类
  {
    id: '1',
    categoryId: 'hardware',
    title: 'XXX 项目',
    description: '基于 STM32 的嵌入式系统设计',
    image: '/images/hardware/project1.jpg',
    techStack: ['STM32', 'PCB', 'C'],
    link: 'https://...',
  },
  // 软件学习分类
  {
    id: '2',
    categoryId: 'software',
    title: 'XXX 项目',
    description: '自研效率工具应用',
    image: '/images/software/project1.jpg',
    techStack: ['React', 'TypeScript'],
    link: 'https://...',
  },
  // AI 应用分类
  {
    id: '3',
    categoryId: 'ai',
    title: 'XXX 项目',
    description: 'AI 辅助开发工作流实践',
    image: '/images/ai/project1.jpg',
    techStack: ['Claude', 'Vibe Coding'],
    link: 'https://...',
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
| `/` | Home 首页 | Hero（大区块）+ 分类卡片列表 |
| `/category/:id` | CategoryDetail | 分类详情页，展示该分类所有项目 |
| `*` | NotFound | 404 页面 |

### 页面结构

```
首页 (/)
├── Hero（大区块，视觉突出）
│   ├── 头像
│   ├── 姓名 + Slogan
│   └── CTA 按钮
├── CategoryCard 列表
│   ├── 硬件设计（可点击）
│   ├── 软件学习（可点击）
│   ├── AI 应用（可点击）
│   └── 探索中（可点击）
└── Footer
    └── 联系方式

分类详情页 (/category/:id)
├── 分类标题 + 描述
├── 返回首页链接
├── ProjectCard 列表（该分类的所有项目）
└── Footer
    └── 联系方式
```

### 页面层级

```
Home 页（展示分类入口）
    ↓ 点击分类卡片
CategoryDetail 页（展示该项目列表）
    ↓ 点击项目卡片
项目链接（外部或弹窗）
```

## 组件设计

### Hero 组件（大区块）

```typescript
// 包含：头像、标题、slogan、CTA 按钮
// 样式：
//   - 高度：比分类区块更大（约 60-80vh 或更大）
//   - 布局：居中，大字号
//   - 背景：简洁，浅色系
```

### CategoryCard 组件（首页分类卡片）

```typescript
// 属性：category: Category
// 包含：
//   - 封面大图（coverImage）
//   - 分类标题（name）
//   - 简短描述（description，可选）
// 交互：
//   - 整个卡片可点击
//   - 悬停效果（放大/蒙层变化）
//   - 链接到 /category/:id
// 样式：
//   - 全宽或大卡片
//   - 图片为主要视觉元素
```

### CategoryDetail 页面组件

```typescript
// 属性：从 URL 获取 categoryId
// 包含：
//   - 分类标题 + 描述
//   - 返回首页按钮
//   - 该分类的 ProjectCard 列表
// 功能：根据 categoryId 过滤并展示对应项目
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
        primary: '#007AFF',      // 强调色（蓝色）
        background: '#FAFAFA',   // 浅米色背景
        surface: '#FFFFFF',      // 白色卡片
        text: {
          primary: '#1D1D1F',    // 主要文字
          secondary: '#86868b',  // 次要文字
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'hero': '60vh',  // Hero 区块高度
        'section': '20px', // 分类区块间距
      },
    },
  },
}
```

### 区块尺寸规范

| 区块 | 高度 | 说明 |
|------|------|------|
| Hero | 60-80vh | 最大，首屏视觉焦点 |
| CategoryCard | 300-400px | 中等，图片为主 |
| ProjectCard | 自适应 | 详情页使用 |

### 全局样式

```css
/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #FAFAFA;
  color: #1D1D1F;
  -webkit-font-smoothing: antialiased;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
```

## 关键技术点

1. **数据驱动渲染** - 根据 categories 和 projects 数据自动生成页面，无需手动添加分类组件
2. **React Router 路由** - 首页 + 分类详情页的页面跳转
3. **Framer Motion 动画** - 实现苹果风格的滚动淡入、悬停效果
4. **响应式设计** - Tailwind CSS 实现移动端适配
5. **图片懒加载** - 使用原生 lazy load 或 React lazy loading
6. **组件复用** - 统一的 ProjectCard 组件保证所有项目展示一致

### 路由配置

```typescript
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
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
  coverImage: '/images/categories/new.jpg',  // 封面图
}
```

首页会自动渲染新的分类卡片，链接到 `/category/new-category`。

### 添加新项目

只需在 `data/projects.ts` 中添加：

```typescript
{
  id: 'new-project',
  categoryId: 'new-category',  // 关联分类
  title: '项目名称',
  description: '一句话描述',
  image: '/images/projects/new.jpg',
  techStack: ['React', 'TypeScript'],
  link: 'https://...',
}
```

项目会自动出现在对应分类的详情页中。

### 页面层级总结

```
首页 (/)
  ├── Hero（大区块）
  └── 分类卡片（硬件设计 / 软件学习 / AI 应用 / 探索中）
       ↓ 点击
  分类详情页 (/category/:id)
       ├── 该分类的所有项目卡片
       └── 点击项目链接
            ↓
       项目详情（外部链接）
```
