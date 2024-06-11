import * as React from 'react';
import { Meta, StoryObj } from '../src/react';
import { StoryFn } from '@storybook/react';

interface StoryParameters {
  cookies: string;
}

type HeaderProps = {
  knownProperty: number;
  anotherKnownProperty: string;
};

const Header = (props: HeaderProps) => <div>Header</div>;

const HeaderWrapper: StoryFn<typeof Header> = ({ ...args }) => {
  return <Header {...args} />;
};

type Story = StoryObj<typeof Header, StoryParameters>;

const meta: Meta<typeof Header, StoryParameters> = {
  title: 'Header',
  component: Header,
  args: {
    knownProperty: 1,

    // Will show "does not exist in type HeaderProps" error
    unknownProperty: 1,
  },
  render: HeaderWrapper,
  parameters: {
    // Should work
    foo: 1,
  },
};

export default meta;

export const JohnLoggedIn: Story = {
  args: {
    knownProperty: 1,

    // Will show "does not exist in type HeaderProps" error
    unknownProperty: 1,
  },
  parameters: {},
};

export const JaneLoggedOut: Story = {
  args: {},
  parameters: {
    // Strongly typed `cookies` property
    cookies: '123',

    // Should work
    foo: 1,
  },
};
