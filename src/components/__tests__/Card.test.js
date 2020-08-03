import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card';

import { render } from '@testing-library/react';

jest.setTimeout(15000);

const data = {
    dt: 1596477600,
    main: {
        temp: 288.22,
        feels_like: 285.88,
        temp_min: 287.49,
        temp_max: 288.22,
        pressure: 996,
        sea_level: 1007,
        grnd_level: 947,
        humidity: 88,
        temp_kf: 0.73,
    },
    weather: [
        {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10d',
        },
    ],
    clouds: {
        all: 100,
    },
    wind: {
        speed: 4.72,
        deg: 304,
    },
    visibility: 3617,
    pop: 1,
    rain: {
        '3h': 5.12,
    },
    sys: {
        pod: 'd',
    },
    dt_txt: '2020-08-03 18:00:00',
};

test('Card', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card data={data} />, div);
});

test('renders Card Average temp', () => {
    const { getByText } = render(<Card data={data} />);
    const linkElement = getByText(/Average temp/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Card More Details', () => {
    const { getByText } = render(<Card data={data} />);
    const linkElement = getByText(/More Details/i);
    expect(linkElement).toBeInTheDocument();
});
