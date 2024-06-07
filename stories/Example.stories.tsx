import * as React from 'react';
import { Meta, StoryObj } from '../src/types';
import { Args } from '@storybook/types';

interface StoryParameters {
  cookies: string;
}

type HeaderProps = { knownProperty: number };
const Header = (props: HeaderProps) => <div>Header</div>;

type Story = StoryObj<typeof Header, StoryParameters>;

const meta: Meta<typeof Header, StoryParameters> = {
  title: 'Header',
  component: Header,
  args: {
    knownProperty: 1,

    // Will show "does not exist in type HeaderProps" error
    unknownProperty: 1,
  },
};

export default meta;

export const JohnLoggedIn: Story = {
  args: {
    knownProperty: 1,

    // Will show "does not exist in type HeaderProps" error
    unknownProperty: 1,
  },
  //
  // Will show missing `cookies` property error
  //
  parameters: {},
};

export const JaneLoggedOut: Story = {
  parameters: {
    //
    // Strongly typed `cookies` property
    //
    cookies: '123',
  },
};
