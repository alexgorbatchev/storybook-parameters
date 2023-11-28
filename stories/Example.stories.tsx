import { ComponentMeta, ComponentStoryObj } from '../src/types';

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
