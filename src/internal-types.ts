import { ComponentAnnotations, Parameters, Renderer, StoryAnnotationsOrFn } from '@storybook/types';

export type WithParams<
  TRenderer extends Renderer,
  TStory extends ComponentAnnotations<TRenderer, TStory extends ComponentAnnotations<TRenderer, infer A> ? A : never>,
  TParameters extends Parameters,
> = TStory & {
  parameters?: Partial<TParameters>;
};

export type WithoutParams<TRenderer extends Renderer, TStoryWithParams> =
  TStoryWithParams extends WithParams<TRenderer, infer TStoryWithoutParams, unknown> ? TStoryWithoutParams : never;

export type ToStoryAnnotationsOrFn<TRenderer extends Renderer, TModule> = {
  [K in keyof TModule as TModule[K] extends WithoutParams<TRenderer, TModule[K]> ? K : never]: StoryAnnotationsOrFn<
    TRenderer,
    TModule[K] extends ComponentAnnotations<TRenderer, infer TArgs> ? TArgs : never
  >;
};

export type TypedCSFExport<TRenderer extends Renderer, TParameters> = {
  default: ComponentAnnotations<TRenderer, TParameters>;
};

export type ToCSFExport<TRenderer extends Renderer, TStories> = TStories extends {
  default: WithParams<TRenderer, infer _, infer _>;
}
  ? TypedCSFExport<TRenderer, any> & TStories
  : never;
