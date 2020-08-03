import React from 'react';

import Util from '../Util';

import { render } from '@testing-library/react';

jest.setTimeout(15000);

test('Get Temperature 1', () => {
    const value = Util.getTemperature(300, 'C');
    expect(value).toBe('26.85 °C');
});

test('Get Temperature 2', () => {
    const value = Util.getTemperature(300, 'F');
    expect(value).not.toBe('26.85 °C');
});

test('Get Temperature 3', () => {
    const value = Util.getTemperature(300, 'F', false);
    expect(value).toBe('80.33');
});
