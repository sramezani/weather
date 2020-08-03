import React from 'react';
import ReactDOM from 'react-dom';
import WeatherChart from '../WeatherChart';

const data = [
    {
        dt: 1596499200,
        main: {
            temp: 286.68,
            feels_like: 286,
            temp_min: 286.65,
            temp_max: 286.68,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 948,
            humidity: 94,
            temp_kf: 0.03,
        },
        weather: [
            {
                id: 502,
                main: 'Rain',
                description: 'heavy intensity rain',
                icon: '10n',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 2.12,
            deg: 28,
        },
        visibility: 8020,
        pop: 1,
        rain: {
            '3h': 20.92,
        },
        sys: {
            pod: 'n',
        },
        dt_txt: '2020-08-04 00:00:00',
    },
];

test('WeatherChart', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherChart chartData={data} tempType="F" />, div);
});
