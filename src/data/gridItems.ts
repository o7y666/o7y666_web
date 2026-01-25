import type { GridItem } from './types';

export const gridItems: GridItem[] = [
  {
    id: 'about',
    title: '关于我',
    description: '了解更多关于我的信息',
    link: '/about',
    icon: 'User',
  },
  {
    id: 'contact',
    title: '联系方式',
    description: '获取联系方式',
    link: '/contact',
    icon: 'Mail',
  },
  {
    id: 'skills',
    title: '技能展示',
    description: '查看我的技能栈',
    link: '/skills',
    icon: 'Code',
  },
  {
    id: 'more',
    title: '更多',
    description: '其他内容',
    link: '/more',
    icon: 'MoreHorizontal',
  },
];
