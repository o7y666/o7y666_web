# 个人网站项目开发规划

> 基于 MotherDuck 手绘风格 + Vibe Coding 方法论

---

## 一、项目概述

### 1.1 项目目标
创建一个具有**手绘风格**的个人作品集网站，采用温暖、亲和、现代的设计语言，展示个人技能、项目和联系方式。

### 1.2 核心特点
- **手绘风格设计**：不规则边框、轻微旋转、硬边阴影
- **友好亲和**：温暖的配色、可爱的装饰元素
- **现代简洁**：大量留白、清晰的排版层次
- **响应式适配**：完美支持桌面、平板和移动端

### 1.3 设计风格参考
参考 MotherDuck 品牌设计语言，融入手绘元素：
- 米白/奶油色主背景 (`#F5F5F0`)
- 金黄色强调色 (`#FFD700`)
- 手绘字体（Caveat、Patrick Hand、Indie Flower）
- 不规则圆角边框
- 云朵、几何图形等装饰元素

---

## 二、开发流程总览

```
┌─────────────────────────────────────────────────────────────────┐
│                     5 步 Vibe Coding 流程                        │
├──────────┬──────────┬──────────┬──────────┬─────────────────────┤
│  步骤 1   │  步骤 2   │  步骤 3   │  步骤 4   │       步骤 5        │
│ 需求研究  │  产品定义 │  技术设计 │  AI 指令  │    实现与迭代       │
│          │          │          │          │                     │
│ RESEARCH │   PRD    │  TECH    │ AGENTS   │      BUILD          │
│   .md    │   .md    │ DESIGN   │   .md    │                     │
│          │          │   .md    │          │                     │
└──────────┴──────────┴──────────┴──────────┴─────────────────────┘
```

---

## 三、详细开发步骤

### 步骤 1：需求研究（Research Phase）

**目标**：明确网站目标、目标用户、核心功能和设计风格偏好。

#### 1.1 产出文件
- `RESEARCH.md` - 需求研究文档

#### 1.2 具体操作

**1.1.1 明确网站目标**
- [ ] 确定网站主要目的（求职/展示/接单/个人品牌）
- [ ] 定义目标用户群体（HR/面试官/客户/同行）
- [ ] 确定核心信息传递（技术栈/项目经验/个人特点）

**1.1.2 内容梳理**
- [ ] 整理个人简介（1-2句话简介 + 详细版本）
- [ ] 列出技能清单（技术栈、工具、软技能）
- [ ] 收集项目案例（项目名称、描述、技术栈、链接、截图）
- [ ] 准备联系方式（邮箱、GitHub、LinkedIn、Twitter等）
- [ ] 准备头像/个人照片

**1.1.3 设计偏好确认**
- [ ] 确认使用手绘风格（基于 style_guide）
- [ ] 选择配色方案（推荐：米白背景 + 金黄强调）
- [ ] 确认是否需要吉祥物/插图
- [ ] 收集喜欢的参考网站

#### 1.3 RESEARCH.md 模板

```markdown
# 个人网站需求研究

## 项目目标
- **主要目的**：展示个人技能和项目经验，用于求职
- **目标用户**：技术面试官、招聘HR
- **核心信息**：全栈开发能力、3年工作经验、3个重点项目

## 内容清单

### 个人简介
- **一句话简介**：热爱技术的全栈开发者，专注Web应用开发
- **详细简介**：[待补充]

### 技能清单
- 前端：React, TypeScript, Tailwind CSS
- 后端：Node.js, Python, PostgreSQL
- 工具：Git, Docker, Figma

### 项目案例（3个）
1. 电商后台管理系统
2. 个人博客平台
3. 数据可视化仪表盘

### 联系方式
- 邮箱：example@email.com
- GitHub：github.com/username
- LinkedIn：[待补充]

## 设计偏好
- **风格**：手绘风格 + MotherDuck 温暖配色
- **主色调**：米白背景 + 金黄强调色
- **字体**：Caveat（标题）+ Patrick Hand（正文）
- **特殊元素**：云朵装饰、轻微旋转卡片

## 参考网站
- [网站1] - 喜欢其配色
- [网站2] - 喜欢其布局
```

---

### 步骤 2：产品需求文档（PRD Phase）

**目标**：将需求整理成正式的产品规格文档，明确功能范围。

#### 2.1 产出文件
- `PRD.md` - 产品需求文档

#### 2.2 具体操作

**2.2.1 确定页面结构**
| 页面/区块 | 功能描述 | 优先级 |
|-----------|----------|--------|
| Hero | 大标题 + 简介 + CTA按钮 | P0 |
| About | 个人介绍 + 头像 | P0 |
| Skills | 技能分类展示 | P0 |
| Projects | 项目卡片网格 | P0 |
| Contact | 联系方式 + 表单 | P0 |
| Footer | 版权信息 + 社交链接 | P0 |

**2.2.2 定义功能需求**
- [ ] 手绘风格组件（卡片、按钮、标签）
- [ ] 滚动动画效果
- [ ] 响应式布局
- [ ] 主题切换（可选）

**2.2.3 确定内容细节**
- [ ] 每个区块的标题和文案
- [ ] 按钮文案和链接
- [ ] 项目卡片信息结构

#### 2.3 PRD.md 模板

```markdown
# 个人网站产品需求文档

## 产品概述
基于手绘风格的个人作品集网站，采用温暖的配色和亲和的设计语言。

## 目标用户
- 技术面试官
- 招聘HR
- 技术社区同行

## 页面结构

### 1. Hero 区块
**功能**：吸引用户注意，传达核心价值

**内容**：
- 大标题（手写风格）："你好，我是 [名字]"
- 副标题：一句话简介
- CTA按钮："查看作品"、"联系我"
- 装饰元素：云朵、几何图形

**设计要求**：
- 全屏高度或 80vh
- 大标题使用 Caveat 字体，72px+
- 轻微旋转的卡片装饰

### 2. About 区块
**功能**：介绍个人背景和经历

**内容**：
- 区块标题："关于我"
- 头像（手绘边框）
- 详细个人介绍（2-3段）
- 装饰云朵

**设计要求**：
- 左右布局（图文并排）
- 手绘风格边框包裹头像

### 3. Skills 区块
**功能**：展示技术能力

**内容**：
- 区块标题："技能栈"
- 技能分类卡片（前端/后端/工具）
- 每个技能用标签形式展示

**设计要求**：
- 三列卡片布局
- 每个卡片轻微不同旋转角度
- 技能标签使用对应颜色（SQL蓝、Python黄等）

### 4. Projects 区块
**功能**：展示项目经验

**内容**：
- 区块标题："项目作品"
- 项目卡片网格（每个项目包含）：
  - 项目截图
  - 项目名称
  - 简短描述
  - 技术栈标签
  - 项目链接

**设计要求**：
- 响应式网格（桌面3列、平板2列、移动1列）
- 卡片悬停效果（轻微上浮+旋转）
- 手绘风格边框

### 5. Contact 区块
**功能**：提供联系方式

**内容**：
- 区块标题："联系我"
- 邮箱地址
- 社交媒体图标链接
- 联系表单（可选）

**设计要求**：
- 深色背景（ai-dark #1E1E2E）形成对比
- 居中对齐

### 6. Footer
**功能**：版权信息和辅助链接

**内容**：
- Logo/名字
- 社交链接图标
- 版权文字

## 设计要求总结

### 配色方案
- 主背景：`#F5F5F0`（米白/奶油色）
- 强调色：`#FFD700`（金黄色）
- 主文字：`#1A1A1A`（深灰）
- 次要文字：`#666666`（中灰）
- 功能色：`#5B9BD5`（SQL蓝）、`#F7DF1E`（Python黄）
- 深色区块：`#1E1E2E`（AI深色）

### 字体系统
- 标题：Caveat, cursive（手写风格）
- 正文：Patrick Hand 或 Indie Flower
- 代码/标签：JetBrains Mono

### 手绘风格规范
- 不规则边框：`border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px`
- 边框粗细：2.5-3px solid #1A1A1A
- 阴影：`box-shadow: 4px 4px 0 rgba(0,0,0,0.15)`
- 旋转角度：-2deg 到 2deg 之间随机

### 动画效果
- 滚动入场：fade-in-up + 轻微旋转
- 悬停效果：上浮 + 阴影变化
- 过渡时长：200-300ms

## 后续扩展功能
- [ ] 深色/浅色主题切换
- [ ] 博客文章列表
- [ ] 多语言支持（中英文）
- [ ] 访问统计分析
```

---

### 步骤 3：技术设计（Tech Design Phase）

**目标**：确定技术栈、项目架构和开发规范。

#### 3.1 产出文件
- `TECH_DESIGN.md` - 技术设计文档

#### 3.2 技术栈选择

**推荐方案**：
| 层级 | 技术 | 说明 |
|------|------|------|
| 框架 | React + TypeScript | 组件化开发，类型安全 |
| 构建工具 | Vite | 快速开发服务器 |
| 样式 | Tailwind CSS | 原子化CSS，快速开发 |
| 动画 | Framer Motion | React动画库 |
| 图标 | Lucide React | 轻量级图标库 |
| 部署 | Vercel | 静态网站托管 |

#### 3.3 项目结构

```
my-portfolio/
├── public/
│   ├── images/
│   │   ├── avatar.jpg          # 个人头像
│   │   └── projects/           # 项目截图
│   └── favicon.ico
├── src/
│   ├── components/             # 可复用组件
│   │   ├── ui/                 # 基础UI组件
│   │   │   ├── HandDrawnCard.tsx    # 手绘卡片
│   │   │   ├── HandDrawnButton.tsx  # 手绘按钮
│   │   │   └── SkillTag.tsx         # 技能标签
│   │   ├── layout/             # 布局组件
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/           # 页面区块
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   ├── data/                   # 数据文件
│   │   ├── projects.ts         # 项目数据
│   │   ├── skills.ts           # 技能数据
│   │   └── social.ts           # 社交链接
│   ├── styles/                 # 样式文件
│   │   └── hand-drawn.css      # 手绘风格CSS
│   ├── hooks/                  # 自定义Hooks
│   │   └── useScrollAnimation.ts
│   ├── types/                  # TypeScript类型
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

#### 3.4 手绘风格实现方案

**CSS 变量定义** (`src/styles/hand-drawn.css`):

```css
:root {
  /* 颜色 */
  --color-bg-primary: #F5F5F0;
  --color-bg-secondary: #FFFFFF;
  --color-accent: #FFD700;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-sql: #5B9BD5;
  --color-python: #F7DF1E;
  --color-ai-bg: #1E1E2E;
  --color-teal: #4ECDC4;
  
  /* 手绘边框 */
  --hand-border-1: 255px 15px 225px 15px / 15px 225px 15px 255px;
  --hand-border-2: 15px 225px 15px 255px / 255px 15px 225px 15px;
  --hand-border-3: 25px 200px 25px 200px / 200px 25px 200px 25px;
  --hand-border-width: 2.5px;
  
  /* 阴影 */
  --shadow-hand: 4px 4px 0 rgba(0,0,0,0.15);
  --shadow-hand-yellow: 4px 4px 0 #FFD700;
}

/* 手绘边框类 */
.hand-border {
  border-radius: var(--hand-border-1);
  border: var(--hand-border-width) solid var(--color-text-primary);
}

.hand-border-2 {
  border-radius: var(--hand-border-2);
  border: var(--hand-border-width) solid var(--color-text-primary);
}

.hand-border-3 {
  border-radius: var(--hand-border-3);
  border: var(--hand-border-width) solid var(--color-text-primary);
}

/* 旋转角度 */
.tilt-1 { transform: rotate(-1.5deg); }
.tilt-2 { transform: rotate(1.2deg); }
.tilt-3 { transform: rotate(-0.8deg); }
.tilt-4 { transform: rotate(2deg); }

/* 手绘阴影 */
.shadow-hand {
  box-shadow: var(--shadow-hand);
}

.shadow-hand-yellow {
  box-shadow: var(--shadow-hand-yellow);
}
```

#### 3.5 Tailwind 配置扩展

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5F0',
        'cream-light': '#FAFAF5',
        'duck-yellow': '#FFD700',
        'duck-teal': '#4ECDC4',
        'sql-blue': '#5B9BD5',
        'python-yellow': '#F7DF1E',
        'ai-dark': '#1E1E2E',
      },
      fontFamily: {
        hand: ['Patrick Hand', 'cursive'],
        heading: ['Caveat', 'cursive'],
        body: ['Indie Flower', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) rotate(1deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

### 步骤 4：AI 代理指令（AGENTS Phase）

**目标**：创建 AI 开发工作手册，确保开发风格一致性。

#### 4.1 产出文件
- `AGENTS.md` - AI 开发指令文档

#### 4.2 AGENTS.md 内容

```markdown
# 个人网站 AI 开发指令

## 项目概述
使用 React + TypeScript + Tailwind CSS 开发的手绘风格个人作品集网站。

## 设计风格规范

### 配色系统
- 主背景：`#F5F5F0`（米白/奶油色）
- 强调色：`#FFD700`（金黄色）
- 主文字：`#1A1A1A`（深灰）
- 深色区块：`#1E1E2E`（用于CTA区块）

### 字体规范
- 大标题：font-heading (Caveat), 48-72px
- 正文：font-body (Patrick Hand/Indie Flower), 16-20px
- 标签/代码：font-mono (JetBrains Mono)

### 手绘风格必选项
1. **边框**：所有卡片、按钮必须使用不规则圆角
   - 使用 `hand-border`、`hand-border-2`、`hand-border-3` 类
   - 边框粗细：2.5-3px
   - 边框颜色：`#1A1A1A`

2. **旋转**：给元素添加轻微随机旋转
   - 使用 `tilt-1`、`tilt-2`、`tilt-3`、`tilt-4` 类
   - 旋转范围：-2deg 到 2deg

3. **阴影**：使用硬边阴影营造手绘感
   - 使用 `shadow-hand` 或 `shadow-hand-yellow` 类
   - 阴影偏移：4px 4px 0

4. **间距**：保持呼吸感
   - 区块间距：80-120px (py-20 lg:py-32)
   - 容器最大宽度：max-w-6xl
   - 卡片内边距：32-48px (p-8 lg:p-12)

## 开发规范

### 组件规范
- 使用函数式组件 + Hooks
- 所有组件必须使用 TypeScript 类型
- Props 必须定义接口
- 组件名使用 PascalCase

### 样式规范
- 使用 Tailwind CSS 工具类
- 复杂样式使用 CSS 模块或 styled-components
- 手绘风格样式统一使用 hand-drawn.css 中定义的变量

### 响应式规范
- 移动优先设计
- 断点：sm(640px)、md(768px)、lg(1024px)、xl(1280px)
- 移动端简化动画和装饰元素

## 性能要求
- 图片必须压缩优化
- 使用懒加载加载图片
- 动画使用 transform 和 opacity（GPU加速）

## 开发步骤提示

### 创建手绘卡片组件
```
创建 HandDrawnCard 组件：
1. 支持自定义旋转角度（tilt-1 到 tilt-4）
2. 支持多种边框变体
3. 支持自定义背景色
4. 添加悬停效果（轻微上浮）
```

### 创建区块组件
```
创建 [区块名] 组件：
1. 使用手绘风格设计
2. 添加滚动入场动画
3. 确保响应式布局
4. 使用 PRD.md 中的内容
```

## 注意事项
- ⚠️ 不要过度使用黄色，仅作为强调色
- ⚠️ 保持大量留白，不要拥挤
- ⚠️ 移动端不使用过于复杂的旋转效果
- ⚠️ 确保文字始终可读（与背景对比度）
- ⚠️ 每次修改后手动检查视觉效果
```

---

### 步骤 5：实现与迭代（Build Phase）

**目标**：逐步实现网站功能，小步快跑，持续验证。

#### 5.1 迭代计划

| 迭代 | 内容 | 预计时间 |
|------|------|----------|
| 迭代 1 | 项目初始化 + 基础组件 | 30分钟 |
| 迭代 2 | Hero + About 区块 | 1小时 |
| 迭代 3 | Skills + Projects 区块 | 1.5小时 |
| 迭代 4 | Contact + Footer | 30分钟 |
| 迭代 5 | 动画优化 + 细节调整 | 1小时 |
| 迭代 6 | 响应式适配 + 性能优化 | 1小时 |

#### 5.2 详细迭代步骤

**迭代 1：项目初始化**

提示词模板：
```
请根据以下要求初始化项目：

1. 使用 Vite 创建 React + TypeScript 项目
2. 安装并配置 Tailwind CSS
3. 安装依赖：framer-motion、lucide-react
4. 配置 tailwind.config.js，添加自定义颜色和字体
5. 创建基础文件夹结构
6. 创建 hand-drawn.css 样式文件

参考 TECH_DESIGN.md 中的配置。
```

**迭代 2：基础 UI 组件**

提示词模板：
```
创建以下基础组件（位于 src/components/ui/）：

1. HandDrawnCard.tsx
   - 支持 children 内容
   - 支持 variant 属性（1-3 种边框样式）
   - 支持 tilt 属性（1-4 种旋转角度）
   - 支持背景色和阴影自定义

2. HandDrawnButton.tsx
   - 支持 variant（primary/secondary）
   - 手绘边框和阴影
   - 悬停和点击效果

3. SkillTag.tsx
   - 根据技能类型显示不同颜色
   - 手绘风格标签

确保所有组件都有 TypeScript 类型定义。
```

**迭代 3：Hero 区块**

提示词模板：
```
创建 Hero 组件（src/components/sections/Hero.tsx）：

内容要求：
1. 大标题："你好，我是 [名字]"
2. 副标题：一句话简介
3. 两个 CTA 按钮
4. 装饰云朵和几何图形

设计要求：
- 使用 font-heading 字体（Caveat）
- 标题 72px+，添加手绘下划线效果
- 全屏高度，内容垂直居中
- 添加入场动画（fade-in-up + 轻微旋转）

参考 PRD.md 中的 Hero 区块设计。
```

**迭代 4：About 区块**

提示词模板：
```
创建 About 组件（src/components/sections/About.tsx）：

内容要求：
1. 区块标题："关于我"（带手绘下划线）
2. 头像图片（使用手绘边框包裹）
3. 2-3段个人介绍文字
4. 装饰云朵

设计要求：
- 左右布局（图文并排）
- 移动端改为上下布局
- 头像使用不规则边框和旋转
```

**迭代 5：Skills 区块**

提示词模板：
```
创建 Skills 组件（src/components/sections/Skills.tsx）：

内容要求：
1. 区块标题："技能栈"
2. 三个技能卡片（前端/后端/工具）
3. 每个卡片内使用标签展示具体技能

设计要求：
- 三列网格布局
- 每个卡片使用不同的 tilt 角度
- 技能标签使用对应颜色
- 使用 HandDrawnCard 组件

数据从 src/data/skills.ts 导入。
```

**迭代 6：Projects 区块**

提示词模板：
```
创建 Projects 组件（src/components/sections/Projects.tsx）：

内容要求：
1. 区块标题："项目作品"
2. 项目卡片网格

每个项目卡片包含：
- 项目截图
- 项目名称
- 简短描述
- 技术栈标签
- 项目链接按钮

设计要求：
- 响应式网格（3/2/1列）
- 卡片使用手绘风格
- 悬停效果：上浮 + 旋转变化

数据从 src/data/projects.ts 导入。
```

**迭代 7：Contact + Footer**

提示词模板：
```
创建 Contact 和 Footer 组件：

Contact 区块：
1. 深色背景（ai-dark）形成对比
2. 标题："联系我"
3. 邮箱地址
4. 社交媒体图标链接
5. 居中对齐

Footer：
1. Logo/名字
2. 社交链接
3. 版权信息
4. 手绘风格分割线
```

**迭代 8：动画与优化**

提示词模板：
```
优化网站动画效果：

1. 添加滚动触发动画
   - 使用 Intersection Observer
   - 元素进入视口时触发动画
   - 动画：fade-in-up + 轻微旋转

2. 优化性能
   - 图片懒加载
   - 动画使用 GPU 加速

3. 细节调整
   - 检查所有边框一致性
   - 检查颜色使用规范
   - 检查字体大小层次
```

**迭代 9：响应式适配**

提示词模板：
```
完成响应式适配：

1. 移动端优化
   - 标题字体缩小
   - 简化旋转效果
   - 全宽按钮
   - 减少装饰元素

2. 平板端适配
   - 调整网格列数
   - 适当间距

3. 测试各断点显示效果
```

---

## 四、文档清单模板

项目根目录应包含以下文档：

```
my-portfolio/
├── RESEARCH.md          # 需求研究（步骤1产出）
├── PRD.md               # 产品需求文档（步骤2产出）
├── TECH_DESIGN.md       # 技术设计文档（步骤3产出）
├── AGENTS.md            # AI 开发指令（步骤4产出）
├── PROJECT_PLAN.md      # 本规划文档
└── CHANGELOG.md         # 变更记录（开发过程中更新）
```

---

## 五、开发检查清单

### 开发前检查
- [ ] RESEARCH.md 已完成
- [ ] PRD.md 已完成
- [ ] TECH_DESIGN.md 已完成
- [ ] AGENTS.md 已完成
- [ ] 所有内容素材已准备（头像、项目截图等）

### 每轮迭代检查
- [ ] 代码符合 AGENTS.md 规范
- [ ] 组件有 TypeScript 类型
- [ ] 手绘风格正确应用
- [ ] 响应式适配完成
- [ ] 提交 Git 版本

### 上线前检查
- [ ] 所有链接可点击
- [ ] 图片正常加载
- [ ] 移动端显示正常
- [ ] 动画流畅不卡顿
- [ ] 无 console 报错

---

## 六、部署上线

### 6.1 推送到 GitHub
```bash
git init
git add .
git commit -m "Initial commit: 手绘风格个人网站"
git remote add origin <你的仓库地址>
git push -u origin main
```

### 6.2 部署到 Vercel
1. 登录 [Vercel](https://vercel.com)
2. 导入 GitHub 仓库
3. 配置构建命令（Vite 项目通常自动识别）
4. 点击部署
5. 绑定自定义域名（可选）

---

## 七、关键要点总结

1. **规划先行**：严格按照 5 步流程执行，文档是 AI 理解的基石
2. **风格一致**：手绘风格是核心特色，确保所有组件遵循规范
3. **小步迭代**：每次只实现一个功能，频繁验证效果
4. **版本控制**：每完成一个迭代就提交 Git
5. **内容为王**：设计风格服务于内容，确保信息清晰传达

---

## 八、参考资源

- `ref/style_guide.md` - MotherDuck 风格设计指南
- `ref/demo-handdrawn.html` - 手绘风格 Demo 实现
- `ref/个人网站 Vibe Coding 开发流程.md` - Vibe Coding 方法论
