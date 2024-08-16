import NotificationBell from '../NotificationBell'
import type {Meta} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/NotificationBell/Features',
  component: NotificationBell,
} as Meta<ComponentProps<typeof NotificationBell>>

export const WithChildren = () => <NotificationBell unreadCount={1}>Children of NotificationBell</NotificationBell>

export const HasUnread = () => <NotificationBell unreadCount={1} />

export const AllRead = () => <NotificationBell unreadCount={0} />
