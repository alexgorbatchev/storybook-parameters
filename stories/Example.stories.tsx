import * as React from 'react';
import { Meta, StoryObj } from '../src/types';

interface StoryParameters {
  cookies: string;
}

type HeaderProps = {
  knownProperty: number;
  anotherKnownProperty: string;
};

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
  args: {},
  parameters: {
    //
    // Strongly typed `cookies` property
    //
    cookies: '123',
  },
};
