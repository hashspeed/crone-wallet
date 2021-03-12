import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { position } from '@crone/styles';
import { View } from 'react-native';

type InnerBorderTypes = {
  color: string;
  radius: number;
  width: number;
  opacity: number;
};

const InnerBorder = styled(View)
  .withConfig<InnerBorderTypes>({
    shouldForwardProp: (prop: any) => prop !== 'width',
  })
  .attrs({ pointerEvents: 'none' })`
  ${position.cover};
  border-color: ${({ color, theme: { colors } }) => color || colors.black};
  border-radius: ${({ radius }) => radius || 0};
  border-width: ${({ width }) => width || 0.5};
  opacity: ${({ opacity, theme: { isDarkMode } }) =>
    isDarkMode ? 0 : opacity || 0.06};
`;

export default InnerBorder;
