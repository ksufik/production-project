import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Input } from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: 'text',
    placeholder: 'Введите текст'
  }

} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
  }
}

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
