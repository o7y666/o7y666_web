import React from 'react';

/**
 * 手绘卡片组件
 * 
 * 用于展示项目、技能等内容，带有手绘风格边框和阴影
 * 
 * @example
 * <HandDrawnCard variant={1} tilt={2} bgColor="white" shadow="default">
 *   <h3>卡片标题</h3>
 *   <p>卡片内容</p>
 * </HandDrawnCard>
 */

export interface HandDrawnCardProps {
  /** 卡片内容 */
  children: React.ReactNode;
  /** 边框样式变体 1-3 */
  variant?: 1 | 2 | 3;
  /** 旋转角度 1-4 */
  tilt?: 1 | 2 | 3 | 4;
  /** 背景色 */
  bgColor?: 'white' | 'cream' | 'dark' | 'transparent';
  /** 阴影类型 */
  shadow?: 'default' | 'yellow' | 'dark' | 'none';
  /** 是否启用悬停效果 */
  hover?: boolean;
  /** 自定义类名 */
  className?: string;
}

export const HandDrawnCard: React.FC<HandDrawnCardProps> = ({
  children,
  variant = 1,
  tilt = 1,
  bgColor = 'white',
  shadow = 'default',
  hover = true,
  className = '',
}) => {
  // 边框变体类名
  const borderClasses = {
    1: 'hand-border',
    2: 'hand-border-2',
    3: 'hand-border-3',
  };

  // 旋转变体类名
  const tiltClasses = {
    1: 'tilt-1',
    2: 'tilt-2',
    3: 'tilt-3',
    4: 'tilt-4',
  };

  // 背景色类名
  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-cream',
    dark: 'bg-ai-dark text-white',
    transparent: 'bg-transparent',
  };

  // 阴影类名
  const shadowClasses = {
    default: 'shadow-hand',
    yellow: 'shadow-hand-yellow',
    dark: 'shadow-hand-dark',
    none: '',
  };

  // 悬停效果类名
  const hoverClasses = hover ? 'card-hand cursor-pointer' : '';

  return (
    <div
      className={`
        ${borderClasses[variant]}
        ${tiltClasses[tilt]}
        ${bgClasses[bgColor]}
        ${shadowClasses[shadow]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default HandDrawnCard;
