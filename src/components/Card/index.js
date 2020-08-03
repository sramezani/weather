import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import moment from 'moment';

import Text from '../Text';
import styles from './card.module.scss';
import { Util } from '../../lib';

const useStyles = makeStyles((theme) => ({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: '#64B5F6',
        boxShadow: '#BBDEFB',
        border: 0,
        borderRadius: 3,
        color: 'white',
    },
    media: {
        height: 160,
        backgroundSize: 'auto',
        filter: 'brightness(0) invert(1)',
    },
}));

export default function CardView(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={props.onClick}>
            <CardActionArea>
                <CardContent>
                    <Text gutterBottom variant="h5" component="h2">
                        {moment(props.data.dt_txt).format('dddd')} <Text component="span">{moment(props.data.dt_txt).format('ll')}</Text>
                    </Text>
                    <Text gutterBottom variant="h5" component="h2">
                        Average temp: {Util.getTemperature(props.dailyAverage, props.tempType)}
                    </Text>
                    <CardMedia
                        className={classes.media}
                        image={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`}
                        title="Contemplative Reptile"
                    />
                    <Text gutterBottom variant="h5" component="h2">
                        {moment(props.data.dt_txt).format('h:mm')} <Text component="span">{moment(props.data.dt_txt).format('a')}</Text>
                    </Text>
                    <Text gutterBottom variant="h5" component="h2">
                        {Util.getTemperature(props.data.main.temp, props.tempType)}
                    </Text>
                    <Text gutterBottom variant="h5" component="h2">
                        {props.data.weather[0].description}
                    </Text>
                    <Text variant="body2" component="p" align="right">
                        More Details
                    </Text>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
