import * as React from 'react';

import * as stories from './Example.stories';

import { composeStories, composeStory } from '../src/react';

// @ts-expect-error — Unknown is not an exported story
const { Unknown, JohnLoggedIn, JaneLoggedOut } = composeStories(stories);
const JaneLoggedOutOther = composeStory(stories.JaneLoggedOut, stories.default);

// Should work
JohnLoggedIn.args!.knownProperty = 1;

// @ts-expect-error — invalidProperty does not exist in HeaderProps
JohnLoggedIn.args!.invalidProperty = 1;

<JaneLoggedOut knownProperty={1} />;
<JohnLoggedIn />;
<JaneLoggedOutOther />;
