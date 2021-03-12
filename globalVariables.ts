import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Platform } from 'react-native';

export default {
  android: Platform.OS === 'android',
  ios: Platform.OS === 'ios',
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
};
