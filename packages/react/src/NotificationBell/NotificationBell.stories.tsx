import NotificationBell from '../NotificationBell'
import type {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/NotificationBell',
  component: NotificationBell,
} as Meta<ComponentProps<typeof NotificationBell>>

export const Playground: StoryFn<ComponentProps<typeof NotificationBell>> = args => (
  <NotificationBell {...args}>NotificationBell</NotificationBell>
)

Playground.args = {
  unreadCount: 1,
}

export const Default = () => <NotificationBell unreadCount={1}>NotificationBell</NotificationBell>
