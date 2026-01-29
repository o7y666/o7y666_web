# 产品需求文档 (PRD) - o7y666 个人网站

> 版本：v1.0  
> 日期：2026-01-29  
> 状态：规划中

---

## 1. 产品概述

### 1.1 产品名称
**o7y666's AI Lab**（o7y666 的 AI 实验室）

### 1.2 产品定位
一个温暖、有趣的手绘风格个人网站，用于记录和展示 o7y666 在 AI 领域的探索历程。网站本身即是"用 AI 创造"的最佳示范。

### 1.3 产品口号
> "记录用 AI 创造的过程"

### 1.4 核心价值
| 价值点 | 说明 |
|--------|------|
| **真实** | 非程序员用 AI 做项目的真实记录 |
| **实用** | 每个项目都有完整的过程分享 |
| **开源** | 所有项目代码开源，可学习复用 |
| **温暖** | 手绘风格设计，亲和友好 |

---

## 2. 目标用户

### 2.1 用户画像

#### 主要用户：AI 初学者（占比 50%）
- **特征**：刚接触 AI，想学但不知从何开始
- **需求**：看到真实的学习路径，获取入门灵感
- **痛点**：网上教程太技术化，找不到同龄人经验

#### 次要用户：同行探索者（占比 30%）
- **特征**：也在用 AI 做项目，寻找灵感和方法
- **需求**：了解新工具、新项目思路
- **痛点**：不知道 AI 还能做什么有趣的东西

#### 潜在用户：合作方/招聘方（占比 20%）
- **特征**：想了解 o7y666 的能力
- **需求**：快速判断技术水平和创造力
- **痛点**：GitHub 太冷清，需要更好的展示方式

### 2.2 用户场景

| 场景 | 用户行为 | 网站响应 |
|------|---------|----------|
| 初次访问 | 从社交媒体链接进入 | Hero 区块清晰传达定位，引导查看项目 |
| 浏览项目 | 在项目列表中挑选感兴趣的内容 | 卡片式展示，悬停效果吸引人点击 |
| 深入了解 | 进入项目详情页 | 完整的故事 + 演示 + 源码链接 |
| 想要交流 | 寻找联系方式 | GitHub 链接 prominently displayed |

---

## 3. 功能需求

### 3.1 功能清单

#### P0 - 必须实现（MVP）
- [x] 首页 - Hero 区块
- [x] 首页 - About 区块
- [x] 首页 - Projects 区块（项目卡片列表）
- [x] 项目详情页
- [x] 导航栏（Logo + 链接）
- [x] 响应式布局（移动端适配）
- [x] 手绘风格视觉设计

#### P1 - 重要功能（v1.1）
- [ ] 项目筛选/分类标签
- [ ] 搜索功能
- [ ] 深色/浅色主题切换
- [ ] 返回顶部按钮
- [ ] 页面加载动画

#### P2 - 增强功能（v2.0）
- [ ] 博客/文章功能
- [ ] 评论系统（GitHub Issues）
- [ ] 访问量统计
- [ ] 多语言支持（中英双语）
- [ ] RSS 订阅

---

## 4. 页面详细设计

### 4.1 首页（Home）

#### 结构概览
```
┌─────────────────────────────────────────────┐
│  导航栏 (Navigation)                        │
├─────────────────────────────────────────────┤
│                                             │
│  Hero 区块                                  │
│  - 大标题 "o7y666"                          │
│  - 副标题 "AI 技术探索者"                    │
│  - 简介文字                                 │
│  - CTA 按钮                                 │
│  - 装饰元素（云朵、吉祥物）                   │
│                                             │
├─────────────────────────────────────────────┤
│  About 区块                                 │
│  - 头像 + 手绘边框                           │
│  - 个人故事                                 │
│  - GitHub 链接                              │
│                                             │
├─────────────────────────────────────────────┤
│  Projects 区块                              │
│  - 标题 "AI 实验室"                          │
│  - 项目卡片网格（3/2/1 列）                  │
│  - 每个卡片：封面+标题+简介+标签             │
│                                             │
├─────────────────────────────────────────────┤
│  Footer                                     │
│  - 版权信息                                 │
│  - 社交链接                                 │
└─────────────────────────────────────────────┘
```

#### 4.1.1 Hero 区块

**布局**：全屏高度（100vh 或 min-h-screen），内容垂直居中

**内容规格**：

| 元素 | 文案 | 样式 | 动画 |
|------|------|------|------|
| **主标题** | o7y666 | font-heading (Caveat), 72-96px, 金黄色强调 | fade-in-up, 延迟 0ms |
| **副标题** | AI 技术探索者 | font-heading, 32-40px, 深灰色 | fade-in-up, 延迟 200ms |
| **简介** | 记录用 AI 创造的过程。我不是程序员，但 AI 让我能够创造出以前不敢想象的东西。 | font-body, 18-20px, 中灰色, 最大宽度 600px | fade-in-up, 延迟 400ms |
| **CTA 按钮** | "查看项目" / "了解更多" | 手绘风格按钮，金黄色背景 | fade-in-up, 延迟 600ms |

**装饰元素**：
- 左上角：☁️ 云朵（tilt-1）
- 右上角：🦆 吉祥物（tilt-2）
- 底部：滚动提示箭头（轻微上下浮动动画）

#### 4.1.2 About 区块

**布局**：两列布局（桌面端），移动端单列

| 区域 | 内容 | 规格 |
|------|------|------|
| **左列** | 头像 | 200x200px，手绘边框，tilt-1 |
| **右列** | 文字内容 | 标题 + 3段简介 |

**文案内容**：

*标题*："关于我"（带手绘下划线）

*正文*：
```
你好，我是 o7y666。

我不是一个程序员，但 AI 改变了一切。现在我可以设计网站、
制作应用、创作图像——这些都是以前我不敢想象的事情。

这个网站本身就是我用 AI 辅助打造的。在这里，我会记录我
的 AI 探索之旅，分享项目、经验和踩过的坑。如果你也对 AI
感兴趣，欢迎一起交流！
```

*GitHub 链接*：
- 图标 + 文字 "@o7y666"
- 链接：https://github.com/o7y666

#### 4.1.3 Projects 区块

**布局**：响应式网格
- 桌面端（>1024px）：3 列
- 平板端（768-1024px）：2 列
- 移动端（<768px）：1 列

**区块标题**：
- 主标题："AI 实验室"
- 副标题："用 AI 创造的一些东西"

**项目卡片规格**：

| 元素 | 样式 |
|------|------|
| **容器** | 手绘边框，白色背景，shadow-hand |
| **封面图** | 16:9 比例，圆角（手绘风格），悬停放大 |
| **标题** | font-heading, 24px, 深灰色 |
| **简介** | font-body, 16px, 中灰色，2行截断 |
| **标签** | 小标签，对应 AI 工具颜色 |
| **链接** | "查看详情 →" 文字链接 |

**旋转角度分配**（增加手绘感）：
- 卡片 1：tilt-1 (-1.5deg)
- 卡片 2：tilt-2 (1.2deg)
- 卡片 3：tilt-3 (-0.8deg)
- 卡片 4：tilt-4 (2deg)
- 以此类推循环...

**空状态设计**（当前无项目时）：
- 插图：🔧 或 🛠️ 施工中的图标
- 文字："项目筹备中...第一个作品即将上线！"
- CTA："先逛逛我的 GitHub"

---

### 4.2 项目详情页（Project Detail）

#### 路由结构
```
/projects/:project-slug

例如：
- /projects/ai-image-generator
- /projects/chatbot-assistant
```

#### 页面结构
```
┌─────────────────────────────────────────────┐
│  导航栏                                     │
├─────────────────────────────────────────────┤
│  ← 返回项目列表                             │
├─────────────────────────────────────────────┤
│                                             │
│  项目封面/演示区                             │
│  - 视频/GIF/动画                            │
│  - 或静态图片                               │
│                                             │
├─────────────────────────────────────────────┤
│  项目名称                                   │
│  [标签1] [标签2] [标签3]                    │
├─────────────────────────────────────────────┤
│                                             │
│  项目故事（长文）                            │
│  ├─ 为什么做这个项目？                       │
│  ├─ 使用了哪些 AI 工具？                     │
│  ├─ 过程中遇到什么挑战？                     │
│  └─ 最终成果如何？                          │
│                                             │
├─────────────────────────────────────────────┤
│  技术要点 / 工具清单                         │
│  - ChatGPT                                  │
│  - Midjourney                               │
│  - Cursor                                   │
│  ...                                        │
├─────────────────────────────────────────────┤
│                                             │
│  [查看源码] 按钮                             │
│  GitHub: github.com/o7y666/xxx               │
│                                             │
├─────────────────────────────────────────────┤
│  上一项目 / 下一项目  导航                   │
├─────────────────────────────────────────────┤
│  Footer                                     │
└─────────────────────────────────────────────┘
```

**内容区块详细规格**：

| 区块 | 内容要求 | 样式 |
|------|---------|------|
| **返回按钮** | "← 返回项目列表" | 文字链接，悬停下划线 |
| **演示区** | 视频/GIF 自动播放，静音循环 | 手绘边框，最大高度 500px |
| **标题** | 项目名称 | font-heading, 40-48px |
| **标签** | AI 工具名称 | 小标签，工具对应颜色 |
| **故事区** | 富文本内容 | font-body, 18px, 1.8 行高 |
| **工具清单** | 图标 + 名称 网格 | 4 列网格，图标 48px |
| **源码按钮** | "在 GitHub 上查看" | 手绘按钮，深色背景 |
| **项目导航** | 上一个/下一个项目 | 卡片预览 + 箭头 |

---

## 5. 设计要求

### 5.1 设计风格总览

**关键词**：温暖、手绘、亲和、创意、探索

**感觉**：像一本精心设计的探险笔记，记录着 AI 世界的奇妙发现。

### 5.2 色彩系统

```css
:root {
  /* 主色调 */
  --color-bg-primary: #F5F5F0;      /* 米白/奶油色 - 主背景 */
  --color-bg-secondary: #FFFFFF;     /* 纯白 - 卡片背景 */
  --color-accent: #FFD700;           /* 金黄色 - 强调色 */
  
  /* 文字色 */
  --color-text-primary: #1A1A1A;     /* 深灰 - 标题、正文 */
  --color-text-secondary: #666666;   /* 中灰 - 描述文字 */
  --color-text-muted: #999999;       /* 浅灰 - 辅助文字 */
  
  /* 功能色 */
  --color-ai-dark: #1E1E2E;          /* AI 深色区块背景 */
  --color-teal: #4ECDC4;             /* 青色 - 装饰 */
  --color-sql: #5B9BD5;              /* SQL 蓝 - 工具标签 */
  --color-python: #F7DF1E;           /* Python 黄 - 工具标签 */
}
```

**使用规则**：
- 80% 背景使用米白色
- 15% 强调使用金黄色
- 5% 使用深色区块（CTA 区域）

### 5.3 字体系统

| 用途 | 字体 | 大小 | 字重 | 行高 |
|------|------|------|------|------|
| **H1 标题** | Caveat | 72-96px | 700 | 1.1 |
| **H2 区块标题** | Caveat | 40-48px | 600 | 1.2 |
| **H3 卡片标题** | Caveat | 24-32px | 600 | 1.3 |
| **正文** | Patrick Hand | 16-20px | 400 | 1.8 |
| **标签/小字** | Patrick Hand | 14px | 500 | 1.4 |
| **代码/工具名** | JetBrains Mono | 14px | 400 | 1.5 |

### 5.4 手绘风格规范

#### 不规则边框
```css
/* 变体 1 - 最常用 */
.hand-border {
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  border: 2.5px solid #1A1A1A;
}

/* 变体 2 */
.hand-border-2 {
  border-radius: 15px 225px 15px 255px / 255px 15px 225px 15px;
  border: 2.5px solid #1A1A1A;
}

/* 变体 3 */
.hand-border-3 {
  border-radius: 25px 200px 25px 200px / 200px 25px 200px 25px;
  border: 2.5px solid #1A1A1A;
}
```

#### 旋转角度
```css
.tilt-1 { transform: rotate(-1.5deg); }
.tilt-2 { transform: rotate(1.2deg); }
.tilt-3 { transform: rotate(-0.8deg); }
.tilt-4 { transform: rotate(2deg); }
```

#### 硬边阴影
```css
.shadow-hand {
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.15);
}

.shadow-hand-yellow {
  box-shadow: 4px 4px 0 #FFD700;
}

.shadow-hand-dark {
  box-shadow: 4px 4px 0 #1A1A1A;
}
```

#### 手绘下划线
```css
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
  background: #FFD700;
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
  transform: rotate(-1deg);
}
```

### 5.5 间距系统

基于 8px 基数：

| Token | 值 | 用途 |
|-------|-----|------|
| xs | 8px | 小间距 |
| sm | 16px | 元素间距 |
| md | 24px | 组件内边距 |
| lg | 48px | 区块内部距 |
| xl | 80px | 区块间距 |
| 2xl | 120px | 大区块间距 |

**容器规格**：
- 最大宽度：1200px
- 水平内边距：24px（移动）/ 48px（平板）/ 80px（桌面）

### 5.6 动画规范

#### 入场动画
```css
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

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

#### 悬停效果
```css
/* 卡片悬停 */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.2);
}

/* 按钮悬停 */
.btn-hover {
  transition: all 0.2s ease;
}
.btn-hover:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #1A1A1A;
}
.btn-hover:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #1A1A1A;
}
```

#### 滚动触发
- 使用 Intersection Observer
- 阈值：0.1（10% 可见时触发）
- 触发后添加 `visible` 类，播放动画

---

## 6. 组件清单

### 6.1 基础 UI 组件

#### HandDrawnCard（手绘卡片）
```typescript
interface HandDrawnCardProps {
  children: React.ReactNode;
  variant?: 1 | 2 | 3;        // 边框样式变体
  tilt?: 1 | 2 | 3 | 4;       // 旋转角度
  bgColor?: string;           // 背景色
  shadow?: 'default' | 'yellow' | 'dark' | 'none';
  className?: string;
}
```

#### HandDrawnButton（手绘按钮）
```typescript
interface HandDrawnButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  tilt?: 1 | 2 | 3 | 4;
  onClick?: () => void;
  href?: string;              // 有 href 时渲染为 a 标签
}
```

#### SkillTag（技能标签）
```typescript
interface SkillTagProps {
  name: string;
  color?: 'blue' | 'yellow' | 'teal' | 'default';
  size?: 'sm' | 'md';
}
```

#### CloudDecoration（云朵装饰）
```typescript
interface CloudDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  position: { top?: string; left?: string; right?: string; bottom?: string };
  tilt?: 1 | 2 | 3 | 4;
}
```

### 6.2 业务组件

#### ProjectCard（项目卡片）
```typescript
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
  };
  tiltVariant?: 1 | 2 | 3 | 4;
}
```

#### ProjectDetail（项目详情）
```typescript
interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    description: string;
    content: string;          // Markdown 格式内容
    coverImage: string;
    demoVideo?: string;       // 视频/GIF URL
    tags: string[];
    tools: string[];          // 使用的工具列表
    githubUrl: string;
    createdAt: string;
  };
}
```

---

## 7. 数据模型

### 7.1 项目数据结构

```typescript
// types/project.ts

interface Project {
  id: string;                    // 唯一标识，用于 URL
  slug: string;                  // URL 友好名称，如 "ai-image-generator"
  title: string;                 // 项目标题
  subtitle?: string;             // 副标题/一句话描述
  description: string;           // 简短描述（卡片展示用）
  content: string;               // 详细内容（Markdown）
  
  // 媒体
  coverImage: string;            // 封面图 URL
  demoVideo?: string;            // 演示视频/GIF URL
  gallery?: string[];            // 图片画廊
  
  // 分类
  tags: string[];                // 标签，如 ["AI绘画", "ChatGPT"]
  tools: Tool[];                 // 使用的工具
  
  // 链接
  githubUrl: string;             // GitHub 仓库地址
  demoUrl?: string;              // 在线演示地址（如有）
  
  // 元数据
  createdAt: string;             // 创建日期
  updatedAt?: string;            // 更新日期
  featured?: boolean;            // 是否精选
  status: 'completed' | 'in-progress' | 'planned';
}

interface Tool {
  name: string;                  // 工具名称
  icon?: string;                 // 图标 URL
  color?: string;                // 主题色
  url?: string;                  // 工具官网
}
```

### 7.2 示例数据

```typescript
// data/projects.ts

export const projects: Project[] = [
  {
    id: '1',
    slug: 'first-ai-project',
    title: '我的第一个 AI 项目',
    subtitle: '用 ChatGPT 和 Midjourney 创建的某个有趣东西',
    description: '这个项目展示了如何用 AI 工具快速实现一个创意想法...',
    content: `
## 项目背景

我一直想做一个...（正文内容）

## 使用工具

- ChatGPT: 用于生成代码和文案
- Midjourney: 用于生成图像素材

## 实现过程

1. 首先...
2. 然后...
3. 最后...

## 成果展示

[图片/视频]

## 经验总结

这次项目中我学到了...
    `,
    coverImage: '/images/projects/project-1-cover.png',
    tags: ['AI绘画', 'ChatGPT', '初学者'],
    tools: [
      { name: 'ChatGPT', color: '#10A37F' },
      { name: 'Midjourney', color: '#1A1A1A' },
    ],
    githubUrl: 'https://github.com/o7y666/first-ai-project',
    createdAt: '2026-02-01',
    status: 'planned',
  },
  // 更多项目...
];
```

---

## 8. 路由设计

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | Home | 首页，包含 Hero + About + Projects |
| `/projects` | Projects | 项目列表（与首页 Projects 区块相同，可独立访问）|
| `/projects/:slug` | Project Detail | 项目详情页 |
| `/about` | About | 关于我（可选，与首页 About 内容相同）|
| `*` | 404 | 404 页面，手绘风格 |

---

## 9. 响应式设计

### 9.1 断点定义

```css
/* Tailwind 默认断点 */
sm: 640px   /* 手机横屏 */
md: 768px   /* 平板竖屏 */
lg: 1024px  /* 平板横屏/小桌面 */
xl: 1280px  /* 标准桌面 */
```

### 9.2 各断点适配

#### 移动端（< 768px）
- 导航栏：Logo + 汉堡菜单
- Hero：标题缩小至 48-56px，单列布局
- About：头像在上，文字在下
- Projects：单列卡片
- 简化旋转效果（性能考虑）
- 按钮全宽

#### 平板端（768px - 1024px）
- 导航栏：全部链接可见
- Projects：双列网格
- 其他同桌面端

#### 桌面端（> 1024px）
- 完整布局
- Projects：三列网格
- 全部动画效果启用

---

## 10. 性能要求

### 10.1 加载性能
- 首屏加载时间 < 3s
- Lighthouse 性能分数 > 90
- 图片使用 WebP 格式，启用懒加载
- 字体使用 font-display: swap

### 10.2 运行性能
- 动画使用 transform 和 opacity（GPU 加速）
- 避免布局抖动
- 移动端减少同时运行的动画数量

### 10.3 可访问性
- 图片必须包含 alt 文本
- 按钮和链接有明确的 focus 状态
- 颜色对比度符合 WCAG AA 标准
- 支持键盘导航

---

## 11. 交付标准

### 11.1 功能完成检查表

- [ ] Hero 区块完整显示，动画正常
- [ ] About 区块内容完整，头像显示正确
- [ ] Projects 列表正确渲染
- [ ] 项目详情页能正常访问
- [ ] 导航链接都能正确跳转
- [ ] GitHub 链接可点击且正确
- [ ] 响应式布局在各设备正常

### 11.2 设计完成检查表

- [ ] 配色符合规范
- [ ] 字体正确加载
- [ ] 手绘边框效果一致
- [ ] 动画流畅不卡顿
- [ ] 无明显的视觉 bug

### 11.3 内容完成检查表

- [ ] 所有文案无错别字
- [ ] 项目数据正确
- [ ] 链接地址正确
- [ ] 图片正常显示

---

## 12. 附录

### 12.1 参考资源

- **设计风格参考**：MotherDuck (https://motherduck.com/)
- **手绘字体**：
  - Caveat: https://fonts.google.com/specimen/Caveat
  - Patrick Hand: https://fonts.google.com/specimen/Patrick+Hand
  - Indie Flower: https://fonts.google.com/specimen/Indie+Flower
- **图标库**：Lucide React (https://lucide.dev/)

### 12.2 待决策事项

| 事项 | 选项 | 建议 |
|------|------|------|
| 吉祥物形象 | 🦆鸭子 / 🤖机器人 / 🎨画笔 / 🚀火箭 | 推荐鸭子，可爱且与探索主题契合 |
| 头像风格 | 真实照片 / AI 插画 / 卡通形象 | 推荐 AI 插画风格，与整体设计统一 |
| 项目详情页视频 | 自动播放 / 点击播放 | 推荐点击播放，避免自动播放打扰 |
| 404 页面 | 简单文字 / 有趣插图 | 推荐有趣插图，保持手绘风格 |

### 12.3 版本历史

| 版本 | 日期 | 变更 |
|------|------|------|
| v1.0 | 2026-01-29 | 初版完成 |

---

*文档结束*
