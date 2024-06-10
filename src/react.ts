import { composeStories as composeStoriesOrig, composeStory as composeStoryOrig } from '@storybook/react';

import type { Args, Parameters, ReactRenderer } from '@storybook/react';
import type { ComponentProps, ComponentType } from 'react';
import type { ProjectAnnotations, Store_CSFExports } from '@storybook/types';
import type {
  ComponentAnnotations,
  ComposedStoryFn,
  Renderer,
  StoriesWithPartialProps,
  StoryAnnotationsOrFn,
} from '@storybook/types';

import type { ToCSFExport, ToStoryAnnotationsOrFn, WithParams } from './internal-types';
export type { StoryObj } from './StoryObj';
import { toCompose } from './toCompose';

type TypedCSFExport<TParameters> = { default: ComponentAnnotations<ReactRenderer, TParameters> };

type BaseMeta<TRenderer extends Renderer, TCmpOrArgs = Args, TParametrers = Parameters> =
  TCmpOrArgs extends ComponentType<any>
    ? WithParams<ComponentAnnotations<TRenderer, ComponentProps<TCmpOrArgs>>, TParametrers>
    : WithParams<ComponentAnnotations<TRenderer, TCmpOrArgs>, TParametrers>;

/**
 * Storybook's React `Meta` type with an additional argument that changes `parameters` to be strongly typed.
 */
export type Meta<TCmpOrArgs = Args, TParametrers = Parameters> = BaseMeta<ReactRenderer, TCmpOrArgs, TParametrers>;

/**
 * Equivalent to `composeStories` from `@storybook/react`, but with a simplified type signature that works with this
 * package.
 */
export function composeStories<
  TTypedCSFExport extends TypedCSFExport<TTypedCSFExport extends TypedCSFExport<infer A> ? A : never>,
  TCompatCSFExport extends Store_CSFExports<ReactRenderer, any> = ToCSFExport<
    ReactRenderer,
    ToStoryAnnotationsOrFn<ReactRenderer, TTypedCSFExport>
  >,
>(
  csfExports: TTypedCSFExport,
  projectAnnotations?: ProjectAnnotations<ReactRenderer>,
): Omit<StoriesWithPartialProps<ReactRenderer, TCompatCSFExport>, keyof Store_CSFExports> {
  return composeStoriesOrig(toCompose(csfExports), projectAnnotations);
}

/**
 * Equivalent to `composeStory` from `@storybook/react`, but with a simplified type signature that works with this
 * package.
 */
export function composeStory<TArgs extends Args = Args>(
  story: StoryAnnotationsOrFn<ReactRenderer, TArgs>,
  componentAnnotations: Meta<TArgs, unknown>,
  projectAnnotations?: ProjectAnnotations<ReactRenderer>,
  exportsName?: string,
): ComposedStoryFn<ReactRenderer, Partial<TArgs>> {
  return composeStoryOrig(story, toCompose(componentAnnotations), projectAnnotations, exportsName);
}
