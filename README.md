# Strongly Typed Parameters for Storybook

This module only exports strongly TypeScript typings to assist with making [Storybook](https://storybook.js.org/)'s `Parameters` strongly typed.

## Install

```sh
yarn add -D @alexgorbatchev/storybook-parameters
```

## Example

```tsx
import { ComponentMeta, ComponentStoryObj } from '@alexgorbatchev/storybook-parameters';

interface StoryParameters {
  cookies: string;
}

const Header = () => <div>Header</div>;

type Story = ComponentStoryObj<typeof Header, StoryParameters>;

const meta: ComponentMeta<typeof Header, StoryParameters> = {
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

### Development scripts

- `yarn start` runs babel in watch mode and starts Storybook
- `yarn build` build and package your addon code
