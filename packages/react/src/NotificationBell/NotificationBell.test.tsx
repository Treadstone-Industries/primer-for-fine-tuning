import {render, fireEvent} from '@testing-library/react'
import React from 'react'
import NotificationBell from './NotificationBell'

describe('NotificationBell', () => {
  it('renders children', () => {
    const {getByText} = render(<NotificationBell unreadCount={1}>NotificationBell</NotificationBell>)
    expect(getByText('NotificationBell')).toBeInTheDocument()
  })

  it('renders button with unread count', () => {
    const {getByText} = render(<NotificationBell unreadCount={1}>NotificationBell</NotificationBell>)
    expect(getByText('NotificationBell')).toBeInTheDocument()
    expect(getByText('Notifications (1)')).toBeInTheDocument()
  })

  it('renders button with no unread count', () => {
    const {getByText} = render(<NotificationBell unreadCount={0}>NotificationBell</NotificationBell>)
    expect(getByText('NotificationBell')).toBeInTheDocument()
    expect(getByText('Notifications (0)')).toBeInTheDocument()
  })

  it('calls onClick when button is clicked', () => {
    const onClick = jest.fn()
    const {getByText} = render(<NotificationBell onClick={onClick} unreadCount={1} />)
    fireEvent.click(getByText('Notifications (1)'))
    expect(onClick).toHaveBeenCalled()
  })
})
