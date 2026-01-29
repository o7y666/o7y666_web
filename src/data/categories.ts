import type { Category } from './types';

// 分类封面图：存放在 public/images/categories/
// 使用时直接写路径即可

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
