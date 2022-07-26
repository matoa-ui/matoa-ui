/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { MatoaProvider } from '../../global-provider';

import 'typeface-inter';

const SystemWrapper: DecoratorFn = (storyFn) => (
  <MatoaProvider>{storyFn()}</MatoaProvider>
);

export default SystemWrapper;
