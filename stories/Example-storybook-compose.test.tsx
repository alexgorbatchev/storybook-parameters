import * as React from 'react';

import * as stories from './Example.stories';

import { composeStories, composeStory } from '../src/react';

// Unknown should be an error
const { Unknown, JohnLoggedIn, JaneLoggedOut } = composeStories(stories);
const JaneLoggedOutOther = composeStory(stories.JaneLoggedOut, stories.default);

// Should work
JohnLoggedIn.args!.knownProperty = 1;

// Should not work
JohnLoggedIn.args!.invalidProperty = 1;

<JaneLoggedOut knownProperty={1} />;
<JohnLoggedIn />;
<JaneLoggedOutOther />;
