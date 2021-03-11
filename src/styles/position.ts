import { upperFirst } from 'lodash';
import { StyleSheet } from 'react-native';
import buildLayoutStyles from './buildLayoutStyles';

interface Options {
  cover: string;
  centered: string;
  centeredAsObject: object;
  coverAsObject: any;
  layout: Function;
  size: Function;
  sizeAsObject: Function;
  maxSize: Function;
  minSize: Function;
  maxSizeAsObject: Function;
  minSizeAsObject: Function;
}

const position = {} as Options;

position.cover = `
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

position.centered = `
  align-items: center;
  justify-content: center;
`;

position.centeredAsObject = {
  alignItems: 'center',
  justifyContent: 'center',
};

position.coverAsObject = StyleSheet.absoluteFillObject;

position.layout = (...args: any[]) => buildLayoutStyles(args);

const buildSizeKey = (prefix: string, key: any) =>
  prefix ? upperFirst(key) : key;

position.size = (size: any, prefix = '') => `
  ${prefix}${buildSizeKey(prefix, 'height')}: ${size};
  ${prefix}${buildSizeKey(prefix, 'width')}: ${size};
`;

position.sizeAsObject = (size: string | number, prefix = '') => ({
  [`${prefix}${buildSizeKey(prefix, 'height')}`]: size,
  [`${prefix}${buildSizeKey(prefix, 'width')}`]: size,
});

position.maxSize = (size: string | number) => position.size(size, 'max');
position.minSize = (size: string | number) => position.size(size, 'min');

position.maxSizeAsObject = (size: string | number) =>
  position.sizeAsObject(size, 'max');
position.minSizeAsObject = (size: string | number) =>
  position.sizeAsObject(size, 'min');

export default position;
