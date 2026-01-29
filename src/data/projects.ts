import type { Project } from '../types';

/**
 * 项目数据
 * 初始为空，后续逐步添加
 */
export const projects: Project[] = [
  // 示例项目结构，用于开发测试
  {
    id: '1',
    slug: 'first-ai-project',
    title: '我的第一个 AI 项目',
    subtitle: '正在筹备中...',
    description: '第一个用 AI 辅助完成的项目，即将上线！',
    content: '## 项目背景\n\n正在用 AI 开发第一个项目，敬请期待！',
    coverImage: '/images/projects/placeholder.svg',
    tags: ['筹备中', '即将上线'],
    tools: [
      { name: 'ChatGPT', color: '#10A37F' },
    ],
    githubUrl: 'https://github.com/o7y666',
    createdAt: '2026-02-01',
    status: 'planned',
  },
];

/**
 * 获取精选项目
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * 根据 slug 获取项目
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export default projects;
