import * as React from 'react';

import * as stories from './Example.stories';

import { composeStories as composeStoriesOrig } from '@storybook/react';

const { JohnLoggedIn, JaneLoggedOut } = composeStoriesOrig(stories);

console.log(<JaneLoggedOut />);
console.log(<JohnLoggedIn />);
