import { actionTypes } from './actionTypes';
import { AppAPI } from '../../lib';

export const updateWeatherData = (data) => {
    return {
        type: actionTypes.UPDATE_WEATHER_DATA,
        payload: data,
    };
};

export const weatherAction = (data) => {
    return (dispatch, getState) =>
        new Promise(async (resolve, reject) => {
            AppAPI.forecast(data)
                .then((res) => {
                    const data = {
                        city: res.city,
                        forecast: res.list,
                    };
                    dispatch(updateWeatherData(data));
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
};
