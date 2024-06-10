import * as React from 'react';

import * as stories from './Example.stories';

import { composeStories, composeStory } from '@storybook/react';
import { toCompose } from '../src/index';

const { JohnLoggedIn, JaneLoggedOut } = composeStories(toCompose(stories));
const JaneLoggedOutOther = composeStory(stories.JaneLoggedOut, toCompose(stories.default));

console.log(<JaneLoggedOut />);
console.log(<JohnLoggedIn />);
console.log(<JaneLoggedOutOther />);
