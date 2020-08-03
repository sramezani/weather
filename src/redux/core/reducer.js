import { actionTypes } from './actionTypes';

const initialState = {
    weatherData: {
        city: {},
        forecast: [],
    },
};

export default function core(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_WEATHER_DATA:
            if (!action.payload) return state;

            return {
                ...state,
                weatherData: {
                    ...state.weatherData,
                    ...action.payload,
                },
            };

        default:
            return { ...state };
    }
}
