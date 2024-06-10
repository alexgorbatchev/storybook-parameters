import { Parameters } from '@storybook/react';
import { ComponentAnnotations, Renderer } from '@storybook/types';

export type WithParams<TMeta, TParameters extends Parameters> = Omit<TMeta, 'parameters'> & {
  parameters?: Partial<TParameters>;
};

export type RemoveWithParams<TStories, TRenderer extends Renderer> = TStories extends {
  default: WithParams<infer _, infer _>;
}
  ? { default: ComponentAnnotations<TRenderer, any> } & TStories
  : never;
