import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '1app/providers/ThemeProvider'
import { ForbiddenPage } from './ForbiddenPage'

const meta = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  tags: ['autodocs']

} satisfies Meta<typeof ForbiddenPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: { }
}

export const Dark: Story = {
  args: { },
  decorators: [ThemeDecorator(Theme.DARK)]
}
