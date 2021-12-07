import React from 'react'
import cn from 'clsx'
import { ButtonWithRef } from './ButtonWithRef'

export interface Props extends React.ComponentPropsWithRef<typeof ButtonWithRef> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
}

function Button({ primary = true, size = 'medium', type = 'button', className, ...others }: Props) {
  return (
    <button
      type={type}
      className={cn(
        {
          'rounded-full focus:ring-4 disabled:opacity-50': true,
          'bg-regal-blue text-white': primary,
          'border-2 border-black': !primary,
          'px-2 py-1': size === 'small',
          'px-3 py-2': size === 'medium',
          'px-4 py-3': size === 'large',
        },
        className
      )}
      {...others}
    />
  )
}
export default Button
