import type { Meta, StoryObj } from '@storybook/react';
import PollList from './PollList';
import "../styles.scss";

const meta: Meta<typeof PollList> = {
  component: PollList,
};

export default meta;
type Story = StoryObj<typeof PollList>;

export const Vote: Story = {
  args: {
    max: 4,
    options: [
        {
            "id": 0,
            "label": "Aztecs",
            "count": 4,
            "votedFor": false
        },
        {
            "id": 1,
            "label": "Incas",
            "count": 4,
            "votedFor": false
        },
        {
            "id": 2,
            "label": "Egyptians",
            "count": 4,
            "votedFor": false
        },
        {
            "id": 3,
            "label": "Sumerians",
            "count": 4,
            "votedFor": false
        }
    ],
  },
};

export const View: Story = {
    args: {
        max: 4,
        options: [
            {
                "id": 0,
                "label": "Aztecs",
                "count": 4,
                "percentage": 50,
                "votedFor": true
            },
            {
                "id": 1,
                "label": "Incas",
                "count": 4,
                "percentage": 15,
                "votedFor": false
            },
            {
                "id": 2,
                "label": "Egyptians",
                "count": 4,
                "percentage": 25,
                "votedFor": false
            },
            {
                "id": 3,
                "label": "Sumerians",
                "count": 4,
                "percentage": 10,
                "votedFor": false
            }
        ],
        readOnly: true
    }
}