import type { Project } from './types';

// 项目封面图：存放在 public/images/projects/
// 使用时直接写路径即可

export const projects: Project[] = [
  // 硬件设计分类
  {
    id: 'hw-1',
    categoryId: 'hardware',
    title: 'STM32 嵌入式系统',
    description: '基于 STM32 的嵌入式系统设计',
    image: '/images/projects/hw-1.jpg',
    techStack: ['STM32', 'C语言', 'PCB'],
    link: '#',
  },
  {
    id: 'hw-2',
    categoryId: 'hardware',
    title: 'PCB 电路设计',
    description: '多层 PCB 电路设计实践',
    image: '/images/projects/hw-2.jpg',
    techStack: ['Altium', '硬件'],
    link: '#',
  },

  // 软件学习分类
  {
    id: 'sw-1',
    categoryId: 'software',
    title: '效率工具开发',
    description: '自研工作效率工具',
    image: '/images/projects/sw-1.jpg',
    techStack: ['React', 'TypeScript'],
    link: '#',
  },
  {
    id: 'sw-2',
    categoryId: 'software',
    title: '操作系统学习笔记',
    description: '操作系统原理学习与实践',
    image: '/images/projects/sw-2.jpg',
    techStack: ['C', '操作系统'],
    link: '#',
  },

  // AI 应用分类
  {
    id: 'ai-1',
    categoryId: 'ai',
    title: 'Vibe Coding 实践',
    description: '使用 AI 辅助开发个人网站',
    image: '/images/projects/ai-1.jpg',
    techStack: ['Claude', 'Vite', 'React'],
    link: '#',
  },
  {
    id: 'ai-2',
    categoryId: 'ai',
    title: 'AI 工作流探索',
    description: 'AI 辅助硬件设计工作流',
    image: '/images/projects/ai-2.jpg',
    techStack: ['AI', '硬件'],
    link: '#',
  },

  // 探索中分类
  {
    id: 'exp-1',
    categoryId: 'exploring',
    title: '新领域探索',
    description: '正在学习的新技术',
    image: '/images/projects/exp-1.jpg',
    techStack: ['学习中'],
    link: '#',
  },
];
