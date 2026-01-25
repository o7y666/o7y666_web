# 个人作品集网站 AI 开发指令

## 项目概述

一个简洁优雅的个人作品集网站，参考 Apple 官网设计风格。

**页面结构**：
- 首页：Hero 首屏（大区块）+ 分类卡片列表
- 分类详情页：展示该分类的所有项目

**设计特点**：
- Hero 首屏比分类区块更大（60-80vh）
- 分类卡片以图片为主，可点击进入详情页
- 浅色系配色，苹果风格动画

## 开发规范

- 使用函数式组件 + Hooks
- 使用 TypeScript，确保类型安全
- 使用 Tailwind CSS 编写样式
- 使用 React Router 实现页面路由
- 组件要可复用、有注释
- 遵循单一职责原则

## 代码风格

- 组件名使用 PascalCase（如 `ProjectCard`、`CategoryCard`）
- 函数名使用 camelCase（如 `handleSubmit`）
- 常量使用 UPPER_SNAKE_CASE
- 文件名使用 camelCase（如 `heroSection.tsx`）
- CSS 类名使用 kebab-case

## 设计要求

- **浅色系主题**（参考 Apple 官网浅色版）
- 主色调：白色 #FFFFFF、浅灰 #F5F5F7
- 强调色：蓝色 #007AFF
- 背景色：浅米色 #FAFAFA
- 文字色：深灰 #1D1D1F

### 区块尺寸规范

| 区块 | 高度 | 说明 |
|------|------|------|
| Hero 首屏 | 60-80vh | 最大，首屏视觉焦点 |
| CategoryCard | 300-400px | 中等，图片为主 |
| ProjectCard | 自适应 | 详情页使用 |

### 组件要求

**Hero 组件**：
- 高度要大，比分类区块更醒目
- 居中布局，大字号
- 包含：头像、姓名、slogan、CTA 按钮

**CategoryCard 组件**：
- 以封面图片为主要视觉元素
- 包含：分类名称、简短描述
- **整个卡片可点击，链接到 /category/:id**
- 悬停时有放大或蒙层效果

**CategoryDetail 页面**：
- 根据 URL 参数 `:id` 获取分类信息
- 展示该分类的所有项目
- 包含返回首页按钮

## 动画效果（Framer Motion）

- 滚动进入视口时的淡入效果
- 卡片悬停时的缩放效果
- 页面切换过渡动画

## 性能要求

- 图片使用懒加载
- 避免不必要的重新渲染
- 代码分割优化加载速度

## 注意事项

- 保持代码简洁，避免过度设计
- 优先实现核心功能
- 确保所有外部链接可点击
- 测试移动端显示效果
- 每次修改前保存代码版本
- 不要修改未指定的文件
- 新分类只需修改数据文件，无需新建组件

## 开发环境

- 操作系统：Windows
- 终端：PowerShell / CMD / Git Bash
- 请使用 Windows 兼容的命令

## Git 使用规范

每完成一个功能后提交代码：
```bash
git add .
git commit -m "描述你完成的功能"
```

## 文件修改规则

修改文件时，请：
1. 仅修改指定文件
2. 保持现有代码风格一致
3. 不要破坏现有功能
4. 添加必要的类型定义

## 禁止事项

- 不要添加未在 PRD 中描述的功能
- 不要修改文件结构而不告知
- 不要使用未授权的第三方库

## 路由结构

| 路径 | 页面 |
|------|------|
| `/` | Home（首页） |
| `/category/:id` | CategoryDetail（分类详情页） |
| `*` | NotFound（404） |

## 数据文件结构

```
src/data/
  categories.ts    # 分类数据（id, name, description, coverImage）
  projects.ts      # 项目数据（categoryId 关联分类）
  personal.ts      # 个人信息
  social.ts        # 社交链接
```
