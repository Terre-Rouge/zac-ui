import React from 'react'

type Props = React.ComponentPropsWithoutRef<'button'>

export type Ref = HTMLButtonElement

export const ButtonWithRef = React.forwardRef<Ref, Props>((props, ref) => (
  <button ref={ref} {...props} />
))
