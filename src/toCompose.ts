import type { Store_CSFExports } from '@storybook/types';
import type { ToCSFExport } from './internal-types';

/**
 * Convert a CSF story object that uses strongly typed `Meta` back to a regular CSF story object with original `Meta`
 * without typed `parameters` which can be used with `composeStories` and `composeStory`.
 *
 * This helper is renderer agnostic.
 */
export function toCompose<
  TStories,
  TResult = TStories extends Store_CSFExports<infer TRenderer, infer _> ? ToCSFExport<TRenderer, TStories> : never,
>(stories: TStories) {
  return stories as unknown as TResult;
}
