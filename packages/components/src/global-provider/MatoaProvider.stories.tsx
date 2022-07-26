import * as React from 'react';
import { Button } from '../ui-components';
import { theme } from '../theme';
import MatoaProvider from './MatoaProvider';

export default {
  title: 'Core/Foundations/MatoaProvider',
  component: MatoaProvider,
  parameters: {
    jsx: { skip: 1 },
  },
};

export function ThemeProvider() {
  return (
    <MatoaProvider>
      <Button variant="primary">Button Primary</Button>
    </MatoaProvider>
  );
}

export function DefaultTheme() {
  return <pre>{JSON.stringify(theme, null, 2)}</pre>;
}
