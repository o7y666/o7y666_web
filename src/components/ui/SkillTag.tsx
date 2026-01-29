import React from 'react';

/**
 * 技能标签组件
 * 
 * 用于展示技能、工具名称的小标签
 * 
 * @example
 * <SkillTag name="React" color="blue" />
 * <SkillTag name="ChatGPT" color="teal" size="sm" />
 */

export interface SkillTagProps {
  /** 标签名称 */
  name: string;
  /** 颜色变体 */
  color?: 'yellow' | 'teal' | 'blue' | 'dark' | 'default';
  /** 尺寸 */
  size?: 'sm' | 'md';
  /** 自定义类名 */
  className?: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({
  name,
  color = 'default',
  size = 'md',
  className = '',
}) => {
  // 颜色类名映射
  const colorClasses = {
    yellow: 'bg-duck-yellow text-text-primary',
    teal: 'bg-duck-teal text-white',
    blue: 'bg-sql-blue text-white',
    dark: 'bg-ai-dark text-white',
    default: 'bg-white text-text-primary',
  };

  // 尺寸类名
  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-1.5',
  };

  // 边框类名（default 颜色需要边框）
  const borderClasses = color === 'default' ? 'border-2 border-text-primary' : '';

  return (
    <span
      className={`
        inline-block
        font-hand
        font-medium
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${borderClasses}
        hand-border
        shadow-hand
        tilt-1
        ${className}
      `}
    >
      {name}
    </span>
  );
};

export default SkillTag;
