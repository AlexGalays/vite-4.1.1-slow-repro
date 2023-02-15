import { clsx } from "clsx"

import React from 'react'

import {
  type ReactNode,
  createContext,
  forwardRef,
  useContext,
  useMemo
} from "react"

import type * as buttonStyles from "./Button.css"
import * as buttonGroupStyles from "./ButtonGroup.css"

// Fake circular dep
import {Button} from "./Button"

type ButtonGroupProps = Partial<ButtonGroupContextValue> &
  Readonly<{
    children?: ReactNode
    className?: string
    density?: keyof typeof buttonGroupStyles.density
  }>

type ButtonGroupContextValue = Readonly<{
  disabled?: boolean
  size: keyof typeof buttonStyles.size
  variant: keyof typeof buttonStyles.variant
}>

const ButtonGroupContext = createContext<ButtonGroupContextValue | undefined>(
  undefined
)

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(props, ref) {
    const buttonGroup = useButtonGroup()
    const {
      children,
      className,
      density = "regular",
      disabled = buttonGroup?.disabled,
      size = buttonGroup?.size ?? "medium",
      variant = buttonGroup?.variant ?? "primary",
      ...otherProps
    } = props
    const value = useMemo(
      () => ({ disabled, size, variant }),
      [disabled, size, variant]
    )
    return (
      <ButtonGroupContext.Provider value={value}>
        <div
          {...otherProps}
          className={clsx(
            buttonGroupStyles.root,
            buttonGroupStyles.density[density],
            className
          )}
          ref={ref}
        >
          {children}
          <Button />
        </div>
      </ButtonGroupContext.Provider>
    )
  }
)

export function useButtonGroup(): ButtonGroupContextValue | undefined {
  return useContext(ButtonGroupContext)
}
