import * as React from 'react';

import * as stories from './Example.stories';

import { composeStories, composeStory } from '@storybook/react';
import { toCompose } from '../src/index';

// @ts-expect-error — Unknown is not an exported story
const { Unknown, JohnLoggedIn, JaneLoggedOut } = composeStories(toCompose(stories));
const JaneLoggedOutOther = composeStory(stories.JaneLoggedOut, toCompose(stories.default));

// Should work
JohnLoggedIn.args.knownProperty = 1;

// @ts-expect-error — invalidProperty does not exist in HeaderProps
JohnLoggedIn.args!.invalidProperty = 1;

<JaneLoggedOut knownProperty={1} />;
<JohnLoggedIn />;
<JaneLoggedOutOther />;
