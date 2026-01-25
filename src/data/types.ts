// 数据类型定义

export interface Category {
  id: string;
  name: string;
  description?: string;
  coverImage: string;
  buttonText?: string;
}

export interface Project {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  github?: string;
  featured?: boolean;
}

export interface GridItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  link: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  avatar: string;
  slogan: string;
  bio: string;
  email: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}
