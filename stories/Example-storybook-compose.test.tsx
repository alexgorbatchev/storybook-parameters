import * as React from 'react';

import * as stories from './Example.stories';

import { composeStories, composeStory } from '../src/react';

const { JohnLoggedIn, JaneLoggedOut } = composeStories(stories);
const JaneLoggedOutOther = composeStory(stories.JaneLoggedOut, stories.default);

console.log(<JaneLoggedOut />);
console.log(<JohnLoggedIn />);
console.log(<JaneLoggedOutOther />);
