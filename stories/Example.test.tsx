import * as React from 'react';

import * as stories from './Example.stories';

import { composeStories } from '../src/composeStories';

const { JohnLoggedIn, JaneLoggedOut } = composeStories(stories);

console.log(<JaneLoggedOut />);
console.log(<JohnLoggedIn />);
