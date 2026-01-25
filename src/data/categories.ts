import type { Category } from './types';

// 分类封面图使用 Unsplash 占位图
// 后续可以替换成真实的项目封面

export const categories: Category[] = [
  {
    id: 'hardware',
    name: '硬件设计',
    description: '电路设计、PCB设计、嵌入式系统',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
  },
  {
    id: 'software',
    name: '软件学习',
    description: '操作系统、App应用、工具软件',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
  },
  {
    id: 'ai',
    name: 'AI 应用',
    description: 'AI 工具使用心得、应用实践',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80',
  },
  {
    id: 'exploring',
    name: '探索中',
    description: '持续学习中的新领域',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80',
  },
];
