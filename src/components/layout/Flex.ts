import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { buildFlexStyles } from '@crone/styles';

const flexPropTypes = {
  align: PropTypes.oneOf(['baseline', 'center', 'end', 'start', 'stretch']),
  direction: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]),
  flex: PropTypes.number,
  grow: PropTypes.number,
  justify: PropTypes.oneOf([
    'center',
    'end',
    'space-around',
    'space-between',
    'start',
  ]),
  self: PropTypes.oneOf(['center', 'end', 'start', 'stretch']),
  shrink: PropTypes.number,
  wrap: PropTypes.bool,
};

type FlexProps = PropTypes.InferProps<typeof flexPropTypes>;

const Flex = styled(View).withConfig<FlexProps>({
  // We need to prevent the buildFlexStyles-related props from being
  // passed to the root element because our namespace collides with some native props
  shouldForwardProp: (prop: any, defaultValidatorFn: any) =>
    !Object.keys(flexPropTypes).includes(prop) && defaultValidatorFn(prop),
})`
  ${buildFlexStyles};
`;

Flex.displayName = 'Flex';

// Flex.propTypes = flexPropTypes;

export default Flex;
