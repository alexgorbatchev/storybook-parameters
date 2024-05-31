import { ReactRenderer, composeStories as composeStoriesOrig } from '@storybook/react';
import { ComponentAnnotations, ProjectAnnotations, Store_CSFExports, StoriesWithPartialProps } from '@storybook/types';

export type SimpleCSFExport<T> = { default: ComponentAnnotations<ReactRenderer, T> };

/**
 * Equivalent to `composeStories` from `@storybook/react`, but with a simplified type signature that works with this
 * package.
 *
 * Function that will receive a stories import (e.g. `import * as stories from './Button.stories'`) and optionally
 * projectAnnotations (e.g. `import * as projectAnnotations from '../.storybook/preview`) and will return an object
 * containing all the stories passed, but now as a composed component that has all args/parameters/decorators/etc
 * combined and applied to it.
 *
 *
 * It's very useful for reusing stories in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStories } from '@storybook/react';
 * import * as stories from './Button.stories';
 *
 * const { Primary, Secondary } = composeStories(stories);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param csfExports - e.g. (import * as stories from './Button.stories')
 * @param [projectAnnotations] - e.g. (import * as projectAnnotations from '../.storybook/preview') this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 */
export function composeStories<TModule extends SimpleCSFExport<TModule extends SimpleCSFExport<infer A> ? A : never>>(
  csfExports: TModule,
  projectAnnotations?: ProjectAnnotations<ReactRenderer>,
): Omit<StoriesWithPartialProps<ReactRenderer, TModule>, keyof Store_CSFExports> {
  return composeStoriesOrig(csfExports, projectAnnotations);
}
