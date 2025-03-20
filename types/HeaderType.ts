import { MouseEventHandler, ReactNode } from "react"

export interface HeaderTopNavListType {
  id: number,
  icon: ReactNode | null,
  title: string | null,
  path: string
} 

export interface ButtonType {
  exrtaClass?: string,
  children: ReactNode,
  icon?: ReactNode,
  iconPosition?: string,
  onclick?: MouseEventHandler<HTMLButtonElement>,
  bage?: number
}