import { get, isNil } from 'lodash';
import { css } from 'styled-components';
import colors from './colors';
import fonts from './fonts';

type TextProps = {
  color: string;
  isEmoji: string;
  family: string;
  mono: string;
  weight: string;
  size: string;
  letterSpacing: string;
  lineHeight: string;
  opacity: string;
  tabularNums: string;
  align: string;
  uppercase: string;
};

// function capitalizeFirstLetter(string: any) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function selectBestFontFit(mono: any, weight: any) {
//   if (weight) {
//     if (weight === 900) {
//       return 'Heavy';
//     }
//     if (weight >= 700) {
//       return 'Bold';
//     }
//     if (weight >= 500) {
//       return 'Semibold';
//     }
//     return weight <= 400
//       ? 'Regular'
//       : mono
//       ? 'Medium'
//       : capitalizeFirstLetter(weight);
//   } else {
//     return 'Regular';
//   }
// }

const buildTextStyles = css<TextProps>`
  /* Color */
  color: ${({ color, theme }) =>
    colors.get(color, theme.colors) || theme.colors.dark};
  /* Font Size */
  font-size: ${({ size = 'medium' }) =>
    typeof size === 'number' ? size : get(fonts, `size[${size}]`, size)};
  /* Font Weight */
  ${({ isEmoji, weight = 'regular' }) =>
    isEmoji || isNil(weight) || android
      ? ''
      : `font-weight: ${get(fonts, `weight[${weight}]`, weight)};`}
  /* Letter Spacing */
  ${({ letterSpacing = 'rounded' }) =>
    isNil(letterSpacing)
      ? ''
      : `letter-spacing: ${get(
          fonts,
          `letterSpacing[${letterSpacing}]`,
          letterSpacing
        )};`}
  /* Line Height */
  ${({ isEmoji, lineHeight }) =>
    isNil(lineHeight) || (isEmoji && android)
      ? ''
      : `line-height: ${get(fonts, `lineHeight[${lineHeight}]`, lineHeight)};`}
  /* Opacity */
  ${({ opacity }) => (isNil(opacity) ? '' : `opacity: ${opacity};`)}
  /* Tabular Numbers */
  ${({ tabularNums }) => (tabularNums ? 'font-variant: tabular-nums;' : '')}
  /* Text Align */
  ${({ align }) => (isNil(align) ? '' : `text-align: ${align};`)}
  /* Uppercase */
  ${({ uppercase }) => (uppercase ? 'text-transform: uppercase;' : '')}
`;

export default buildTextStyles;
