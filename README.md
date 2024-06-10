# Strongly Typed Parameters for Storybook

This module only exports TypeScript typings to assist with making [Storybook](https://storybook.js.org/)'s `Parameters`
strongly typed. Requires Storybook v8.

Why is this useful? For large projects that connect a number of global addons which expect own set of properties, it's very helpful to thave these properties to be strongly typed.

Currently only React is supported, however adding new render targets should be trivial. PRs welcome!

## Install

```sh
npm i --save-dev @alexgorbatchev/storybook-parameters
```

## Example Story

```tsx
import { Meta, StoryObj } from '@alexgorbatchev/storybook-parameters/react';

const Header = () => <div>Header</div>;

// These properties will be expected on the `parameters` in your stories.
interface StoryParameters {
  cookies: string;
}

// Strongly typed Story
type Story = StoryObj<typeof Header, StoryParameters>;

// Strongly typed Meta
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

## Example Test

```tsx
import * as React from 'react';
import { composeStories, composeStory } from '@storybook/react';
import { toCompose } from '@alexgorbatchev/storybook-parameters';

import * as stories from './Example.stories';

// `toCompose` helper has to be used because Storybook's methods
// don't work well with typed `parameters`.
const { JohnLoggedIn, JaneLoggedOut } = composeStories(toCompose(stories));
const JaneLoggedOutOther = composeStory(stories.JaneLoggedOut, toCompose(stories.default));
```

## Development Scripts

- `npm run build` builds the `dist` folder
