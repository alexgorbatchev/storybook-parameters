import { JSXElementConstructor } from 'react';

import {
    ComponentMeta as ComponentMetaOrig, ComponentStoryObj as ComponentStoryObjOrig, Parameters
} from '@storybook/react';

export type ComponentMeta<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  TParameters = Parameters,
> = ComponentMetaOrig<T> & {
  parameters?: TParameters;
};

export type ComponentStoryObj<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  TParameters = Parameters,
> = ComponentStoryObjOrig<T> & {
  parameters?: TParameters;
};
