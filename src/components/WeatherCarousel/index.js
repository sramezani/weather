import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import Carousel from '../Carousel';
import Card from '../Card';

import styles from './wcs.module.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        //   flexGrow: 1,
    },
}));

export default function WeatherCarousel(props) {
    const classes = useStyles();
    const [forecastDataByDateCard, setForecastDataByDateCard] = useState([]);
    const [forecastDataByDateChart, setForecastDataByDateChart] = useState({});
    const [dailySum, setDailySum] = useState({});

    useEffect(() => {
        let forecastDataByDateChart = {};
        let forecastDataByDateCard = [];
        let dailySumTemp = {};
        let dailySum = [];
        props.forecastData.map((item) => {
            const key = moment(item.dt_txt).format('DD-MM-YYYY');
            if (!forecastDataByDateChart[key]) {
                dailySumTemp['tempSum'] = item.main.temp;
                dailySumTemp['tempcount'] = 1;
                dailySum[key] = dailySumTemp;
                dailySumTemp = {};
                forecastDataByDateChart[key] = Array(item);
                forecastDataByDateCard.push(item);
            } else {
                dailySum[key]['tempSum'] += item.main.temp;
                dailySum[key]['tempcount'] += 1;
                forecastDataByDateChart[key].push(item);
            }
        });
        setForecastDataByDateCard(forecastDataByDateCard);
        setForecastDataByDateChart(forecastDataByDateChart);
        setDailySum(dailySum);
    }, [props]);

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Carousel>
                    {forecastDataByDateCard.map((item, i) => (
                        <div key={i} className={styles.slide}>
                            <Card
                                data={item}
                                tempType={props.tempType}
                                dailyAverage={
                                    dailySum[moment(item.dt_txt).format('DD-MM-YYYY')].tempSum /
                                    dailySum[moment(item.dt_txt).format('DD-MM-YYYY')].tempcount
                                }
                                onClick={() => props.chartData(forecastDataByDateChart[moment(item.dt_txt).format('DD-MM-YYYY')])}
                            />
                        </div>
                    ))}
                </Carousel>
            </Grid>
        </div>
    );
}
