import type { ReactRenderer, Args, Parameters } from '@storybook/react';
import type { ComponentAnnotations, Renderer } from '@storybook/types';
import type { ComponentProps, ComponentType } from 'react';

import type { WithParams } from './internal-types';
export type { StoryObj } from './StoryObj';

type BaseMeta<TRenderer extends Renderer, TCmpOrArgs = Args, TParametrers = Parameters> =
  TCmpOrArgs extends ComponentType<any>
    ? WithParams<ComponentAnnotations<TRenderer, ComponentProps<TCmpOrArgs>>, TParametrers>
    : WithParams<ComponentAnnotations<TRenderer, TCmpOrArgs>, TParametrers>;

/**
 * Storybook's React `Meta` type with an additional argument that changes `parameters` to be strongly typed.
 */
export type Meta<TCmpOrArgs = Args, TParametrers = Parameters> = BaseMeta<ReactRenderer, TCmpOrArgs, TParametrers>;
