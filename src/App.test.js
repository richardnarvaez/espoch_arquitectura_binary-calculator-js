import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { convertToDecimal, convertOneToOther } from './lib/bCalculator'

test('calular Decimal de BINARIO', () => {
  expect(convertToDecimal("10", 10)).toBe(10);
});

test('calular binario', () => {
  expect(convertOneToOther("10", 10, 2, 0)).toBe("1010");
});

test('calular hexadecimal', () => {
  expect(convertToDecimal("0", 2)).toBe(0);
});

test('calular octal', () => {
  expect(convertToDecimal("0", 2)).toBe(0);
});