import type { Project } from './types';

// 项目封面图使用 Unsplash 占位图
// 后续可以替换成真实的项目截图

export const projects: Project[] = [
  // 硬件设计分类
  {
    id: 'hw-1',
    categoryId: 'hardware',
    title: 'STM32 嵌入式系统',
    description: '基于 STM32 的嵌入式系统设计',
    image: 'https://images.unsplash.com/photo-1555664424-778a6902201b?w=800&q=80',
    techStack: ['STM32', 'C语言', 'PCB'],
    link: '#',
  },
  {
    id: 'hw-2',
    categoryId: 'hardware',
    title: 'PCB 电路设计',
    description: '多层 PCB 电路设计实践',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    techStack: ['Altium', '硬件'],
    link: '#',
  },

  // 软件学习分类
  {
    id: 'sw-1',
    categoryId: 'software',
    title: '效率工具开发',
    description: '自研工作效率工具',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    techStack: ['React', 'TypeScript'],
    link: '#',
  },
  {
    id: 'sw-2',
    categoryId: 'software',
    title: '操作系统学习笔记',
    description: '操作系统原理学习与实践',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    techStack: ['C', '操作系统'],
    link: '#',
  },

  // AI 应用分类
  {
    id: 'ai-1',
    categoryId: 'ai',
    title: 'Vibe Coding 实践',
    description: '使用 AI 辅助开发个人网站',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    techStack: ['Claude', 'Vite', 'React'],
    link: '#',
  },
  {
    id: 'ai-2',
    categoryId: 'ai',
    title: 'AI 工作流探索',
    description: 'AI 辅助硬件设计工作流',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    techStack: ['AI', '硬件'],
    link: '#',
  },

  // 探索中分类
  {
    id: 'exp-1',
    categoryId: 'exploring',
    title: '新领域探索',
    description: '正在学习的新技术',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    techStack: ['学习中'],
    link: '#',
  },
];
