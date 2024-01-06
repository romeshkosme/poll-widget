import type { Meta, StoryObj } from '@storybook/react';
import Poll from "./Poll";
import "../styles.scss";

const meta: Meta<typeof Poll> = {
  component: Poll,
};

export default meta;
type Story = StoryObj<typeof Poll>;

export const Vote: Story = {
  args: {
    max: 4,
    data: {
        "question": "Which ancient civilization built the iconic pyramids of Giza?",
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
        readonly: false
    }
  },
};

export const View: Story = {
    args: {
        max: 4,
        data: {
            "question": "Which ancient civilization built the iconic pyramids of Giza?",
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
            ]
        },
        readOnly: true
    }
}