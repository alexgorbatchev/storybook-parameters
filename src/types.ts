import { JSXElementConstructor } from 'react';

import { Meta as MetaOrig, StoryObj as StoryObjOrig, Parameters } from '@storybook/react';

/**
 * Storybook's `Meta` type with a typed `parameters` property.
 */
export type Meta<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  TParameters = Parameters,
> = MetaOrig<T> & {
  parameters?: TParameters;
};

/**
 * Storybook's `StoryObj` type with a typed `parameters` property.
 */
export type StoryObj<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  TParameters = Parameters,
> = StoryObjOrig<T> & {
  parameters?: TParameters;
};
