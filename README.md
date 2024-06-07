# Strongly Typed Parameters for Storybook (React)

This module only exports TypeScript typings to assist with making [Storybook](https://storybook.js.org/)'s `Parameters` strongly typed. Requires
Storybook v8.

## Install

```sh
npm i --save-dev @alexgorbatchev/storybook-parameters
```

## Example Story

```tsx
import { Meta, StoryObj } from '@alexgorbatchev/storybook-parameters';

interface StoryParameters {
  cookies: string;
}

const Header = () => <div>Header</div>;

type Story = StoryObj<typeof Header, StoryParameters>;

const meta: Meta<typeof Header, StoryParameters> = {
  title: 'Header',
  component: Header,
};

export default meta;

export const JohnLoggedIn: Story = {
  // Will show missing `cookies` property error
  parameters: {},
};

export const JaneLoggedIn: Story = {
  parameters: {
    // strongly typed `cookies` property
    cookies: '123',
  },
};
```

## Development Scripts

- `npm run build` builds the `dist` folder
