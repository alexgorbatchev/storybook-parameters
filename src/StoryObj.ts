import type { Args, Parameters, StoryObj as StoryObjOrig } from '@storybook/react';

/**
 * Storybook's `StoryObj` type with an additional argument that changes `parameters` to be strongly typed.
 */
export type StoryObj<T extends Args, TParameters extends Parameters = Parameters> = StoryObjOrig<T> & {
  parameters?: Partial<TParameters>;
};
