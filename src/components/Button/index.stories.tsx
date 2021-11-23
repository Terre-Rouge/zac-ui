import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./index";
import { withDesign } from 'storybook-addon-designs'

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign],
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZPaISlA0sMryYWfrFAwDap/Terre-Rouge?node-id=8%3A2',
  },
}

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇"};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZPaISlA0sMryYWfrFAwDap/Terre-Rouge?node-id=8%3A2',
  },
}