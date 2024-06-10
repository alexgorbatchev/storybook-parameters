import type { Store_CSFExports } from '@storybook/types';
import type { RemoveWithParams } from './internal-types';

/**
 * Convert a CSF story object that uses strongly typed `Meta` back to a regular CSF story object with original `Meta`
 * without typed `parameters` which can be used with `composeStories` and `composeStory`.
 */
export function toCompose<
  TStories,
  TResult = TStories extends Store_CSFExports<infer TRenderer, infer _> ? RemoveWithParams<TStories, TRenderer> : never,
>(stories: TStories) {
  return stories as any as TResult;
}
