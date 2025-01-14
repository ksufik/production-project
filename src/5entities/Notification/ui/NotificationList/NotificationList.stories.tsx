import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'

const meta = {
  title: 'entities/NotificationList',
  component: NotificationList,
  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs']

} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
