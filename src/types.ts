import { StoryContext, Args, Meta as MetaOrig, StoryObj as StoryObjOrig, Parameters } from '@storybook/react';

/**
 * Storybook's `Meta` type with a typed `parameters` property.
 */
export type Meta<T extends Args, TParameters extends Parameters = Parameters> = MetaOrig<T> & {
  parameters?: TParameters;
};

/**
 * Storybook's `StoryObj` type with a typed `parameters` property.
 */
export type StoryObj<T extends Args, TParameters extends Parameters = Parameters> = StoryObjOrig<T> & {
  parameters?: TParameters;
};
