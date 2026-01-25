# o7y666_web

个人作品集网站，基于 React + TypeScript + Vite + Tailwind CSS 构建。

## 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite 7
- **样式方案**: Tailwind CSS v4
- **动画库**: Framer Motion
- **路由**: React Router v7
- **图标**: Lucide React

## 功能特性

- 首页展示个人信息和项目分类
- 分类详情页展示项目列表
- 联系页面（表单 + 信息）
- 关于页面（个人简介）
- 技能展示页面
- 响应式设计（适配移动端）
- 页面过渡动画
- 滚动到顶部组件

## 页面结构

```
/                   - 首页
/category/:id       - 分类详情页
/contact            - 联系页面
/about              - 关于页面
/skills             - 技能展示页
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查
npm run type-check

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署

### Vercel（推荐）

1. 安装 Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 或者直接通过 GitHub 导入：
   - 访问 [Vercel](https://vercel.com)
   - 点击 "Add New..." → "Project"
   - 导入 GitHub 仓库 `o7y666/o7y666_web`
   - Vercel 会自动检测 Vite 项目并配置

3. 部署命令（CLI）：
   ```bash
   vercel --prod
   ```

### 手动部署

```bash
# 构建
npm run build

# 上传 dist 文件夹到服务器
```

## 项目结构

```
o7y666_web/
├── src/
│   ├── components/     # 组件
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── GridCard.tsx
│   │   ├── Hero.tsx
│   │   ├── PageTransition.tsx
│   │   ├── ProjectCard.tsx
│   │   └── CategorySection.tsx
│   ├── pages/          # 页面
│   │   ├── Home.tsx
│   │   ├── CategoryDetail.tsx
│   │   ├── Contact.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   └── NotFound.tsx
│   ├── data/           # 数据层
│   │   ├── types.ts
│   │   ├── categories.ts
│   │   ├── projects.ts
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── docs/               # 开发文档
├── dist/               # 构建输出
└── vercel.json         # Vercel 配置
```

## 自定义

### 修改个人信息

编辑 `src/data/personal.ts`：
```typescript
export const personal = {
  name: '你的名字',
  avatar: '头像图片 URL',
  slogan: '你的座右铭',
  bio: '个人简介',
  email: 'your@email.com',
};
```

### 添加分类

编辑 `src/data/categories.ts`：
```typescript
export const categories = [
  {
    id: 'new-category',
    name: '新分类',
    description: '分类描述',
    coverImage: '图片 URL',
  },
];
```

### 添加项目

编辑 `src/data/projects.ts`：
```typescript
export const projects = [
  {
    id: 'new-project',
    categoryId: 'new-category',
    title: '项目名称',
    description: '项目描述',
    image: '图片 URL',
    techStack: ['React', 'TypeScript'],
    link: '项目链接',
  },
];
```

## 许可证

MIT License

## 作者

- GitHub: [@o7y666](https://github.com/o7y666)
