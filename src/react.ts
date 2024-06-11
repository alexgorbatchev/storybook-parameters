import { composeStories as composeStoriesOrig, composeStory as composeStoryOrig } from '@storybook/react';

import type { Args, Parameters, ReactRenderer } from '@storybook/react';
import type {
  ComponentAnnotations,
  ComposedStoryFn,
  ProjectAnnotations,
  Renderer,
  Store_CSFExports,
  StoriesWithPartialProps,
  StoryAnnotationsOrFn,
} from '@storybook/types';
import type { ComponentProps, ComponentType } from 'react';

import type { ToCSFExport, ToStoryAnnotationsOrFn, TypedCSFExport, WithParams } from './internal-types';
import { toCompose } from './toCompose';
export type { StoryObj } from './StoryObj';

type BaseMeta<TRenderer extends Renderer, TCmpOrArgs = Args, TParametrers = Parameters> =
  TCmpOrArgs extends ComponentType<any>
    ? WithParams<TRenderer, ComponentAnnotations<TRenderer, ComponentProps<TCmpOrArgs>>, TParametrers>
    : WithParams<TRenderer, ComponentAnnotations<TRenderer, TCmpOrArgs>, TParametrers>;

/**
 * Storybook's React `Meta` type with an additional argument that changes `parameters` to be strongly typed.
 */
export type Meta<TCmpOrArgs = Args, TParametrers = Parameters> = BaseMeta<ReactRenderer, TCmpOrArgs, TParametrers>;

/**
 * Equivalent to `composeStories` from `@storybook/react`, but with a simplified type signature that works with this
 * package.
 */
export function composeStories<
  TTypedCSFExport extends TypedCSFExport<
    ReactRenderer,
    TTypedCSFExport extends TypedCSFExport<ReactRenderer, infer A> ? A : never
  >,
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
