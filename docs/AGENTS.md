# AI 开发指令 (AGENTS.md) - o7y666 个人网站

> 本文档是给 AI 的"工作手册"，规范开发行为和代码风格

---

## 1. 项目概述

### 1.1 基本信息
| 项目 | 内容 |
|------|------|
| **项目名称** | o7y666's AI Lab |
| **项目类型** | 个人作品集网站 |
| **技术栈** | React + TypeScript + Vite + Tailwind CSS + Framer Motion |
| **设计风格** | MotherDuck 风格 + 手绘元素 |
| **目标用户** | AI 初学者、同行探索者 |

### 1.2 核心特点
- **温暖手绘风**：不规则边框、轻微旋转、硬边阴影
- **非程序员背景**：网站主人是 AI 探索者，不是程序员
- **项目展示为主**：每个项目有独立详情页
- **开源分享**：所有项目链接到 GitHub

### 1.3 参考文档
- `RESEARCH.md` - 需求研究
- `PRD.md` - 产品需求文档
- `TECH_DESIGN.md` - 技术设计文档（含 CSS 代码）

**开发前必读**：TECH_DESIGN.md 中的 `hand-drawn.css` 包含了所有手绘风格实现，必须严格遵循。

---

## 2. 开发规范

### 2.1 技术规范

#### 必须使用 TypeScript
```typescript
// ✅ 正确 - 定义接口
interface Project {
  id: string;
  title: string;
  description: string;
}

// ✅ 正确 - 组件使用类型
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return <div>{project.title}</div>;
};

// ❌ 错误 - 不使用 any
const ProjectCard = ({ project }: any) => { ... }
```

#### 必须使用函数式组件 + Hooks
```typescript
// ✅ 正确
import { useState, useEffect } from 'react';

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // 副作用
  }, []);
  
  return <div>{count}</div>;
};

// ❌ 错误 - 不使用类组件
class MyComponent extends React.Component { ... }
```

#### 文件结构规范
```
src/
  components/
    ui/           # 基础组件
    layout/       # 布局组件
    sections/     # 页面区块
  pages/          # 页面组件
  hooks/          # 自定义 Hooks
  data/           # 数据文件
  styles/         # 样式文件
  types/          # 类型定义
```

### 2.2 代码风格

#### 命名规范
| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `HandDrawnCard.tsx` |
| 函数 | camelCase | `useScrollAnimation` |
| 常量 | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| 变量 | camelCase | `projectList` |
| 类型/接口 | PascalCase | `ProjectProps` |
| 文件 | PascalCase（组件）/ camelCase（工具） | `HandDrawnCard.tsx` / `formatDate.ts` |

#### 代码格式
```typescript
// ✅ 正确 - 使用单引号，2空格缩进
const greeting = 'Hello';

// ✅ 正确 - 对象和数组换行
const project = {
  id: '1',
  title: 'My Project',
  tags: ['AI', 'React'],
};

// ✅ 正确 - 箭头函数
const handleClick = () => {
  console.log('clicked');
};

// ✅ 正确 - 条件渲染
{isLoading ? <Loading /> : <Content />}

// ✅ 正确 - 列表渲染
{projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
```

#### 注释规范
```typescript
/**
 * 手绘卡片组件
 * 用于展示项目、技能等内容，带有手绘风格边框
 * 
 * @example
 * <HandDrawnCard variant={1} tilt={2}>
 *   <h3>卡片标题</h3>
 *   <p>卡片内容</p>
 * </HandDrawnCard>
 */
interface HandDrawnCardProps {
  /** 边框样式变体 1-3 */
  variant?: 1 | 2 | 3;
  /** 旋转角度 1-4 */
  tilt?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}
```

---

## 3. 设计风格强制执行

### 3.1 手绘风格必选项

⚠️ **重要**：以下规则必须严格遵守，不得偏离！

#### 规则 1：所有卡片必须使用手绘边框
```tsx
// ✅ 正确
<div className="hand-border tilt-1 shadow-hand bg-white p-6">
  内容
</div>

// ❌ 错误 - 使用普通圆角
<div className="rounded-lg border p-6">
  内容
</div>
```

#### 规则 2：每个卡片/按钮必须有旋转角度
```tsx
// ✅ 正确 - 使用 tilt 类
<HandDrawnCard tilt={1}>...</HandDrawnCard>
<HandDrawnCard tilt={2}>...</HandDrawnCard>
<HandDrawnCard tilt={3}>...</HandDrawnCard>

// ❌ 错误 - 无旋转
<HandDrawnCard>...</HandDrawnCard>
```

#### 规则 3：阴影必须使用硬边阴影
```tsx
// ✅ 正确
<div className="shadow-hand">...</div>
<div className="shadow-hand-yellow">...</div>

// ❌ 错误 - 使用软阴影
<div className="shadow-lg">...</div>
<div className="shadow-md">...</div>
```

#### 规则 4：标题必须使用手写字体
```tsx
// ✅ 正确
<h1 className="font-heading text-6xl">o7y666</h1>
<h2 className="font-heading text-4xl">关于我</h2>

// ❌ 错误 - 使用默认字体
<h1 className="text-6xl font-bold">o7y666</h1>
```

#### 规则 5：正文必须使用手写体
```tsx
// ✅ 正确
<p className="font-body text-lg">内容</p>

// ❌ 错误
<p className="text-lg">内容</p>
```

### 3.2 颜色使用规范

| 用途 | 类名/CSS 变量 | 使用场景 |
|------|--------------|----------|
| 主背景 | `bg-cream` / `#F5F5F0` | 页面背景 |
| 强调色 | `bg-duck-yellow` / `#FFD700` | 按钮、高亮 |
| 卡片背景 | `bg-white` | 卡片、内容区 |
| 深色区块 | `bg-ai-dark` / `#1E1E2E` | CTA 区域 |
| 主文字 | `text-text-primary` / `#1A1A1A` | 标题、正文 |
| 次要文字 | `text-text-secondary` / `#666666` | 描述、副标题 |

**⚠️ 警告**：不要引入新的颜色！严格使用上述颜色系统。

### 3.3 间距规范

使用 Tailwind 的间距类，基于 8px 基数：

```tsx
// ✅ 正确
<div className="p-6">...</div>     {/* 24px */}
<div className="p-8">...</div>     {/* 32px */}
<div className="py-20">...</div>   {/* 80px 垂直 */}
<div className="gap-6">...</div>   {/* 24px 间隙 */}

// ❌ 错误 - 随意数值
<div className="p-[25px]">...</div>
```

### 3.4 响应式规范

```tsx
// ✅ 正确 - 移动优先
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 移动端 1 列，平板 2 列，桌面 3 列 */}
</div>

<h1 className="text-4xl md:text-5xl lg:text-7xl">
  {/* 移动端 40px，平板 48px，桌面 72px */}
</h1>

// ❌ 错误 - 不使用响应式前缀
<div className="grid grid-cols-3">
  {/* 移动端也是 3 列，会溢出 */}
</div>
```

---

## 4. 组件开发规范

### 4.1 基础组件模板

```typescript
// src/components/ui/ComponentName.tsx

import React from 'react';

// 1. 定义 Props 接口
interface ComponentNameProps {
  /** 属性描述 */
  propName: string;
  /** 可选属性 */
  optionalProp?: number;
  /** 子元素 */
  children?: React.ReactNode;
  /** 自定义类名 */
  className?: string;
}

// 2. 组件实现
export const ComponentName: React.FC<ComponentNameProps> = ({
  propName,
  optionalProp = 0,  // 默认值
  children,
  className = '',
}) => {
  // 组件逻辑
  
  return (
    <div className={`base-classes ${className}`}>
      {children}
    </div>
  );
};

// 3. 默认导出
export default ComponentName;
```

### 4.2 Section 组件模板

```typescript
// src/components/sections/SectionName.tsx

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const SectionName: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      className={`py-20 lg:py-32 px-6 lg:px-12 ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* 内容 */}
      </div>
    </section>
  );
};

export default SectionName;
```

### 4.3 动画使用规范

```typescript
// ✅ 正确 - 使用 Framer Motion
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30, rotate: 1 },
  animate: { opacity: 1, y: 0, rotate: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

<motion.div {...fadeInUp}>
  内容
</motion.div>

// ✅ 正确 - 使用 CSS 类（简单场景）
<div className="scroll-animate visible">
  内容
</div>
```

---

## 5. 开发流程和提示词模板

### 5.1 初始化项目

**提示词**：
```
请根据 TECH_DESIGN.md 的规范，初始化 o7y666 个人网站项目：

1. 使用 Vite 创建 React + TypeScript 项目
2. 安装并配置 Tailwind CSS
3. 安装 framer-motion、lucide-react、react-router-dom
4. 创建 tailwind.config.js，添加自定义颜色和字体
5. 创建 src/styles/hand-drawn.css，包含 TECH_DESIGN.md 中的 CSS 代码
6. 创建 src/styles/globals.css，导入字体和基础样式
7. 创建基础文件夹结构

完成后告诉我项目结构，并确认所有配置正确。
```

### 5.2 创建基础组件

**提示词**：
```
根据 PRD.md 和 TECH_DESIGN.md，创建以下基础 UI 组件：

1. HandDrawnCard（src/components/ui/HandDrawnCard.tsx）
   - 支持 variant（1-3）边框样式
   - 支持 tilt（1-4）旋转角度
   - 支持 bgColor、shadow 等变体
   - 使用 hand-drawn.css 中的类名

2. HandDrawnButton（src/components/ui/HandDrawnButton.tsx）
   - 支持 variant（primary/secondary/ghost）
   - 支持 size（sm/md/lg）
   - 支持 href 或 onClick
   - 悬停和点击效果

3. SkillTag（src/components/ui/SkillTag.tsx）
   - 显示技能/工具名称
   - 手绘风格小标签
   - 不同颜色变体

每个组件都要有完整的 TypeScript 类型定义和注释。
```

### 5.3 创建页面区块

**提示词**：
```
创建 Hero 区块（src/components/sections/Hero.tsx）：

内容要求（来自 PRD.md）：
- 主标题："o7y666"（font-heading, 72px+）
- 副标题："AI 技术探索者"
- 简介："记录用 AI 创造的过程。我不是程序员，但 AI 让我能够创造出以前不敢想象的东西。"
- CTA 按钮："查看项目"、"了解更多"

设计要求：
1. 使用手绘风格
2. 主标题使用金黄色强调
3. 添加云朵装饰（使用 cloud-decoration 类）
4. 添加入场动画（fade-in-up）
5. 确保移动端显示正常

参考 TECH_DESIGN.md 中的 CSS 类名。
```

### 5.4 修改现有代码

**提示词**：
```
请修改 src/components/sections/Projects.tsx：

修改内容：
1. 添加项目卡片悬停效果（上浮 + 阴影变化）
2. 保持现有的手绘边框和旋转角度
3. 确保响应式布局不变
4. 不要改动其他文件

参考现有代码的风格和类名。
```

---

## 6. 常见错误和避免方法

### ❌ 错误 1：忘记使用手绘边框
```tsx
// 错误
<div className="bg-white p-6 rounded-lg shadow-lg">
  
// 正确
<div className="hand-border tilt-1 shadow-hand bg-white p-6">
```

### ❌ 错误 2：使用默认字体
```tsx
// 错误
<h1 className="text-6xl font-bold">

// 正确
<h1 className="font-heading text-6xl">
```

### ❌ 错误 3：软阴影
```tsx
// 错误
<div className="shadow-lg">

// 正确
<div className="shadow-hand">
```

### ❌ 错误 4：忘记旋转角度
```tsx
// 错误
<HandDrawnCard variant={1}>

// 正确
<HandDrawnCard variant={1} tilt={2}>
```

### ❌ 错误 5：不使用响应式
```tsx
// 错误
<div className="grid grid-cols-3">

// 正确
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### ❌ 错误 6：硬编码颜色
```tsx
// 错误
<div className="bg-[#F5F5F0]">

// 正确
<div className="bg-cream">
```

### ❌ 错误 7：没有 TypeScript 类型
```tsx
// 错误
const Component = ({ data }) => {

// 正确
interface ComponentProps {
  data: DataType;
}
const Component: React.FC<ComponentProps> = ({ data }) => {
```

---

## 7. 代码审查清单

每次提交代码前，检查以下项目：

### 7.1 设计一致性
- [ ] 所有卡片使用手绘边框（hand-border）
- [ ] 所有卡片有旋转角度（tilt-1/2/3/4）
- [ ] 使用硬边阴影（shadow-hand）
- [ ] 标题使用手写字体（font-heading）
- [ ] 正文使用手写体（font-body）
- [ ] 使用正确的颜色变量

### 7.2 代码质量
- [ ] TypeScript 类型完整
- [ ] 组件有 Props 接口
- [ ] 函数有返回类型
- [ ] 无 `any` 类型
- [ ] 无 `console.log`（调试代码）

### 7.3 响应式
- [ ] 移动端布局正确
- [ ] 字体大小适配
- [ ] 间距适配
- [ ] 网格列数正确

### 7.4 性能
- [ ] 图片有 lazy loading
- [ ] 动画使用 GPU 加速
- [ ] 无重复渲染

---

## 8. 紧急处理指南

### 8.1 如果样式不生效
1. 检查 `hand-drawn.css` 是否正确导入
2. 检查 Tailwind 配置是否正确
3. 检查类名拼写（hand-border 不是 handBorder）

### 8.2 如果动画不生效
1. 检查 Framer Motion 是否安装
2. 检查 CSS 动画类名是否正确
3. 检查 Intersection Observer 是否正确使用

### 8.3 如果字体不显示
1. 检查 Google Fonts 链接是否在 index.html 中
2. 检查字体类名（font-heading / font-body）
3. 检查网络连接

### 8.4 如果路由不工作
1. 检查 React Router 配置
2. 检查 Vercel/部署平台的重写规则
3. 检查链接路径

---

## 9. 开发优先级提醒

按以下顺序开发，不要跳过步骤：

1. **项目初始化**（配置、依赖、基础样式）
2. **基础组件**（HandDrawnCard、HandDrawnButton）
3. **布局组件**（Header、Footer、Layout）
4. **页面区块**（Hero → About → Projects）
5. **项目详情页**
6. **动画优化**
7. **响应式适配**
8. **部署上线**

**每完成一个步骤，都要测试验证后再进行下一步。**

---

## 10. 联系和反馈

如果在开发过程中有疑问：
1. 查阅 `TECH_DESIGN.md` 的技术细节
2. 查阅 `PRD.md` 的产品需求
3. 检查本文档的"常见错误"章节
4. 向用户确认设计细节

---

**记住：手绘风格是核心特色，严格遵守设计规范！**

---

*文档结束*
