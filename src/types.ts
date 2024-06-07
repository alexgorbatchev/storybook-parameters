import { ComponentProps, JSXElementConstructor } from 'react';
import { Args, Meta as MetaOrig, StoryObj as StoryObjOrig, Parameters } from '@storybook/react';

/**
 * Storybook's `Meta` type with a typed `parameters` property.
 */
export interface Meta<
  TCmp extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  TParameters extends Parameters = Parameters,
> extends MetaOrig {
  args?: Partial<ComponentProps<TCmp>>;
  parameters?: TParameters;
}

/**
 * Storybook's `StoryObj` type with a typed `parameters` property.
 */
export type StoryObj<T extends Args, TParameters extends Parameters = Parameters> = StoryObjOrig<T> & {
  parameters?: TParameters;
};
