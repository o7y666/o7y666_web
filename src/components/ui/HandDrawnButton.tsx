import React from 'react';

/**
 * 手绘按钮组件
 * 
 * 带有手绘风格边框、阴影和交互效果的按钮
 * 
 * @example
 * <HandDrawnButton variant="primary" size="md" tilt={1}>
 *   点击我
 * </HandDrawnButton>
 * 
 * <HandDrawnButton variant="secondary" href="https://example.com">
 *   外部链接
 * </HandDrawnButton>
 */

export interface HandDrawnButtonProps {
  /** 按钮内容 */
  children: React.ReactNode;
  /** 按钮变体 */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 旋转角度 1-4 */
  tilt?: 1 | 2 | 3 | 4;
  /** 外部链接（有 href 时渲染为 a 标签） */
  href?: string;
  /** 点击事件 */
  onClick?: () => void;
  /** 自定义类名 */
  className?: string;
  /** 是否在新窗口打开 */
  target?: '_blank' | '_self';
  /** 是否禁用 */
  disabled?: boolean;
}

export const HandDrawnButton: React.FC<HandDrawnButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  tilt = 1,
  href,
  onClick,
  className = '',
  target = '_self',
  disabled = false,
}) => {
  // 旋转变体类名
  const tiltClasses = {
    1: 'tilt-1',
    2: 'tilt-2',
    3: 'tilt-3',
    4: 'tilt-4',
  };

  // 变体类名
  const variantClasses = {
    primary: 'btn-hand btn-hand-primary',
    secondary: 'btn-hand btn-hand-secondary',
    ghost: 'btn-hand btn-hand-ghost',
  };

  // 尺寸类名
  const sizeClasses = {
    sm: 'px-4 py-2 text-base',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  // 禁用状态类名
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // 组合类名
  const combinedClassName = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${tiltClasses[tilt]}
    ${disabledClasses}
    ${className}
  `;

  // 如果是外部链接，渲染为 a 标签
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={combinedClassName}
        onClick={disabled ? undefined : onClick}
      >
        {children}
      </a>
    );
  }

  // 否则渲染为 button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default HandDrawnButton;
