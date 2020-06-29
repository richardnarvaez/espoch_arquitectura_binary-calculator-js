import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { convertToDecimal, convertOneToOther } from './lib/bCalculator'

test('calular BINARIO a Decimal', () => {
  expect(convertToDecimal("101", 2)).toBe(5);
});

test('calular DECIMAL a BINARIO', () => {
  expect(convertOneToOther("15", 10, 2, 2)).toBe("1111.00");
});

test('calular hexadecimal a Decimal', () => {
  expect(convertToDecimal("AA", 16)).toBe(170);
});

test('calular octal', () => {
	expect(convertOneToOther("56",10,8,0)).toBe("70");
});