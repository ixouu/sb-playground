import { Button } from './Button';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'UI/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}; 

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
