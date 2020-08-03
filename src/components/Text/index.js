import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import styles from './text.module.scss';

const useStyles = makeStyles((theme) => ({}));

export default function Text(props) {
    const classes = useStyles();

    return <Typography {...props} />;
}
