import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { View } from 'react-native';

// import { useTheme } from '../../context/ThemeContext';
// eslint-disable-next-line import/no-unresolved
import { position } from '@crone/styles';

type PageElementStyleTypes = {
  color: string;
  bottomInset: string | number;
  topInset: string | number;
};
type PageElementTypes = {
  color: string;
  showBottomInset: string | number;
  showTopInset: string | number;
};

const PageElement = styled(View)<PageElementStyleTypes>`
  ${position.size('100%')};
  background-color: ${({ color }) => color || '#FFFFF'};
  padding-bottom: ${({ bottomInset }) => bottomInset};
  padding-top: ${({ topInset }) => topInset};
`;

const Page = (
  { color, showBottomInset, showTopInset, ...props }: PageElementTypes,
  ref: any
) => {
  const insets = useSafeAreaInsets();
  // const { colors } = useTheme();

  return (
    <PageElement
      {...props}
      bottomInset={showBottomInset ? insets.bottom : 0}
      color={color}
      ref={ref}
      topInset={showTopInset ? insets.top : 0}
    />
  );
};

export default React.forwardRef(Page);
