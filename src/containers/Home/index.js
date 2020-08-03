import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { weatherAction } from '../../redux/core/actions';
import Loading from '../../components/Loading';
import WeatherCarousel from '../../components/WeatherCarousel';
import WeatherChart from '../../components/WeatherChart';
import TempCheckBox from '../../components/TempCheckBox';
import { Constant } from '../../constants';

import styles from './style.module.scss';

export default function Home() {
    const dispatch = useDispatch();
    const cityData = useSelector((state) => state.weatherData.city);
    const forecastData = useSelector((state) => state.weatherData.forecast);
    const [chartData, setChartData] = useState([]);
    const [temp, setTemp] = useState('F');
    const [loadingStatus, setLoadingStatus] = useState(true);

    useEffect(() => {
        _showLoading();
        _getWeatherData();
    }, []);

    const _getWeatherData = () => {
        const reqPayload = {
            q: 'Munich,de',
            APPID: Constant.openWeatherMapID,
            cnt: 40,
        };
        dispatch(weatherAction(reqPayload))
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const _showLoading = () => {
        setTimeout(() => {
            setLoadingStatus(false);
        }, 1500);
    };

    return (
        <div className={styles.main}>
            {forecastData.length > 0 && !loadingStatus ? (
                <Container>
                    <br />
                    <Grid container direction="row" justify="center" alignItems="center">
                        <TempCheckBox tempType={temp} tempCallback={(e) => setTemp(e)} />
                    </Grid>
                    <br />
                    <WeatherCarousel cityData={cityData} forecastData={forecastData} chartData={(e) => setChartData(e)} tempType={temp} />
                    {chartData.length > 0 && <WeatherChart chartData={chartData} tempType={temp} />}
                </Container>
            ) : (
                <Loading />
            )}
        </div>
    );
}
