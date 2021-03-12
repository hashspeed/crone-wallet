import { isUndefined } from 'lodash';
import styled from 'styled-components';
import { View } from 'react-native';

type FlexItemTypes = {
  flex: string | number;
  grow: string | number;
  shrink: string | number;
};

const FlexItem = styled(View)<FlexItemTypes>`
  flex: ${({ flex, grow, shrink }) =>
    isUndefined(flex) && isUndefined(grow) && isUndefined(shrink) ? 1 : flex};
  ${({ grow }) => (grow !== undefined ? `flex-grow: ${grow};` : '')}
  ${({ shrink }) => (shrink !== undefined ? `flex-shrink: ${shrink};` : '')}
`;

export default FlexItem;
