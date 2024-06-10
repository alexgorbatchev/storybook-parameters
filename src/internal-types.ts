import { ComponentAnnotations, Parameters, Renderer, StoryAnnotationsOrFn } from '@storybook/types';

export type WithParams<TStory, TParameters extends Parameters> = Omit<TStory, 'parameters'> & {
  parameters?: Partial<TParameters>;
};

export type ToStoryAnnotationsOrFn<TRenderer extends Renderer, TModule> = {
  [K in keyof TModule as TModule[K] extends WithParams<infer _, infer _> ? K : never]: StoryAnnotationsOrFn<
    TRenderer,
    TModule[K]
  >;
};

export type ToCSFExport<TRenderer extends Renderer, TStories> = TStories extends {
  default: WithParams<infer _, infer _>;
}
  ? TStories & { default: ComponentAnnotations<TRenderer, any> }
  : never;
