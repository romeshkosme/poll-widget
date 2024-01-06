import type { Meta, StoryObj } from '@storybook/react';
import PollListItem from "./PollListItem";
import "../styles.scss";

const meta: Meta<typeof PollListItem> = {
  component: PollListItem,
};

export default meta;
type Story = StoryObj<typeof PollListItem>;

export const Vote: Story = {
  args: {
    label: "One test",
  },
};

export const View: Story = {
    args: {
        label: "Two",
        percentage: 60,
        readOnly: true
    }
}