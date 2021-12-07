import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import Button, { Props } from './index'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign],
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<Props> = (args) => <Button {...args} />

// Reuse that template for creating different stories
export const Primary = Template.bind({})
Primary.args = { children: 'Primary 😃', primary: true, size: 'medium' }
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZPaISlA0sMryYWfrFAwDap/Terre-Rouge?node-id=8%3A2',
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  primary: false,
  children: 'Secondary 😇',
  className: 'bg-gray-300',
}
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZPaISlA0sMryYWfrFAwDap/Terre-Rouge?node-id=8%3A2',
  },
}

export const Disabled = Template.bind({})
Disabled.args = { ...Primary.args, children: 'Disabled', disabled: true }
Disabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZPaISlA0sMryYWfrFAwDap/Terre-Rouge?node-id=8%3A2',
  },
}
