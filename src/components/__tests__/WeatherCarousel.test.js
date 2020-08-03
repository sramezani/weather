import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCarousel from '../WeatherCarousel';

import { render } from '@testing-library/react';

jest.setTimeout(15000);

test('WeatherCarousel', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherCarousel />, div);
});
