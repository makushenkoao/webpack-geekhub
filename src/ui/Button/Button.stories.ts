import type { Meta, StoryObj } from "@storybook/react";

import { Button, EButtonVariant } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: EButtonVariant.primary,
    children: "Button",
  },
  name: "Primary Button",
};

export const Secondary: Story = {
  args: {
    variant: EButtonVariant.secondary,
    children: "Button",
  },
  name: "Secondary Button",
};
