import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import styles from './tcb.module.scss';

const useStyles = makeStyles((theme) => ({}));

export default function TempCheckBox(props) {
    const classes = useStyles();
    const [temp, setTemp] = useState(props.tempType || 'F');

    const _chnageTemp = (temp) => {
        setTemp(temp);
        props.tempCallback(temp);
    };

    return (
        <ButtonGroup disableElevation size="large" color="secondary">
            <Button variant={temp === 'C' ? 'contained' : 'outlined'} onClick={() => _chnageTemp('C')}>
                Celsius
            </Button>
            <Button variant={temp === 'F' ? 'contained' : 'outlined'} onClick={() => _chnageTemp('F')}>
                Fahrenheit
            </Button>
        </ButtonGroup>
    );
}
