import React from 'react';
import { Meta, Story } from '@storybook/react';
import { styled, getFontStyle } from '../src';

const meta: Meta = {
  title: 'Basic/Typography',
};

export default meta;

const fontWeights = ['light', 'regular', 'medium', 'bold'];

const StyledText = styled.p`
  ${({ size, weight, lineHeight }) =>
    getFontStyle({ size, weight, lineHeight })}
`;

export const FontWeights = _ => (
  <div>
    {fontWeights.map(weight => (
      <StyledText key={weight} size="xxLarge" weight={weight}>
        Lorem ipsum dolor sit amet [{weight}]
      </StyledText>
    ))}
  </div>
);

const fontSizes = [
  'xSmall',
  'small',
  'medium',
  'large',
  'xLarge',
  'xxLarge',
  'xxxLarge',
];

export const FontSizes = _ => (
  <div>
    {fontSizes.map(size => (
      <StyledText key={size} size={size}>
        Lorem ipsum dolor sit amet [{size}]
      </StyledText>
    ))}
  </div>
);
