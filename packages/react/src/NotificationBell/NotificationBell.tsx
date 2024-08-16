import React, {type ReactNode} from 'react'
import {Button} from '../Button'

export type NotificationBellProps = {
  children?: ReactNode
  onClick?: () => void
  unreadCount: number
}

export function NotificationBell({children, onClick, unreadCount}: NotificationBellProps) {
  return (
    <>
      <Button onClick={onClick}>Notifications ({unreadCount})</Button>
      {children}
    </>
  )
}

NotificationBell.displayName = 'NotificationBell'

export default NotificationBell
