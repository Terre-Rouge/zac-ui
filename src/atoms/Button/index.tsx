import React from 'react'
import cn from 'clsx'
import { ButtonWithRef } from './ButtonWithRef'

export interface Props extends React.ComponentPropsWithRef<typeof ButtonWithRef> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
}

function Button({
  primary = true,
  size = 'medium',
  type = 'button',
  className,
  children,
  ...others
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        {
          // global
          'relative disabled:opacity-50 text-sm py-4 rounded-lg focus:outline-none uppercase': true,
          // animation
          'after:transition-all delay-300 after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-primary/100 active:after:bg-red-400 hover:after:w-full after:rounded-lg':
            true,
          'active:bg-opacity-90': true,
          // primary
          'bg-primary/90 text-white focus:ring-4 focus:ring-primary focus:ring-opacity-25': primary,
          // other
          'border-2 border-black': !primary,
          // size
          'px-5': size === 'small',
          'w-60': size === 'medium',
          'w-80': size === 'large',
        },
        className
      )}
      {...others}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
export default Button
