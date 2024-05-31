import * as React from 'react';
import { Meta, StoryObj } from '../src/types';

interface StoryParameters {
  cookies: string;
}

type HeaderProps = { foo: number };
const Header = (props: HeaderProps) => <div>Header</div>;

type Story = StoryObj<typeof Header, StoryParameters>;

const meta: Meta<typeof Header, StoryParameters> = {
  title: 'Header',
  component: Header,
};

export default meta;

export const JohnLoggedIn: Story = {
  //
  // Will show missing `cookies` property error
  //
  parameters: {},
};

export const JaneLoggedOut: Story = {
  parameters: {
    // strongly typed `cookies` property
    cookies: '123',
  },
};
