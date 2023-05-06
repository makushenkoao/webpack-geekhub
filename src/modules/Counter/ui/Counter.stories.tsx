import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from "./Counter";
import { StoreDecorator } from "lib/storybook/StoreDecorator";

const meta: Meta<typeof Counter> = {
  title: "Counter",
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      counter: {
        value: 10,
      },
    }),
  ],
};
