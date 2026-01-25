import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  /** 按钮变体：primary 是蓝色填充，secondary 是蓝色文字 */
  variant?: 'primary' | 'secondary';
  /** 按钮内容 */
  children: ReactNode;
  /** 点击事件 */
  onClick?: () => void;
  /** 额外的样式类 */
  className?: string;
  /** 按钮类型 */
  type?: 'button' | 'submit' | 'reset';
  /** 是否禁用 */
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  // 基础样式
  const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-3
    text-base font-medium
    rounded-full
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // 变体样式
  const variantStyles = {
    primary: 'bg-[#007AFF] text-white hover:bg-[#0066d6] focus:ring-[#007AFF]',
    secondary: 'text-[#007AFF] hover:underline focus:ring-[#007AFF]',
  };

  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );

  // 为 primary 按钮添加动画
  if (variant === 'primary') {
    return (
      <motion.div
        whileHover={!disabled ? { scale: 1.02 } : undefined}
        whileTap={!disabled ? { scale: 0.98 } : undefined}
        transition={{ duration: 0.15 }}
      >
        {buttonContent}
      </motion.div>
    );
  }

  return buttonContent;
}
