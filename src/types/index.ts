/**
 * 项目数据类型
 */
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  content?: string;
  coverImage: string;
  demoVideo?: string;
  gallery?: string[];
  tags: string[];
  tools: Tool[];
  githubUrl: string;
  demoUrl?: string;
  createdAt: string;
  updatedAt?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

/**
 * 工具/技能类型
 */
export interface Tool {
  name: string;
  icon?: string;
  color?: string;
  url?: string;
}

/**
 * 技能分类类型
 */
export interface SkillCategory {
  name: string;
  description: string;
  skills: Tool[];
}

/**
 * 社交媒体链接类型
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

/**
 * 站点配置类型
 */
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  githubUrl: string;
  socialLinks: SocialLink[];
}
