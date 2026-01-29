import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * 动画区块组件
 * 
 * 包装子元素，当进入视口时触发淡入动画
 * 
 * @example
 * <AnimatedSection delay={200}>
 *   <h2>标题</h2>
 *   <p>内容</p>
 * </AnimatedSection>
 */

export interface AnimatedSectionProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 动画延迟（毫秒） */
  delay?: number;
  /** 自定义类名 */
  className?: string;
  /** 触发动画的阈值（0-1） */
  threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
