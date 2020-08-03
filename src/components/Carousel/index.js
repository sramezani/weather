import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './carousel.module.scss';
import WindowDimensions from '../WindowDimensions';

const useStyles = makeStyles((theme) => ({
    arrow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'transform ease-in .1s',
        top: '45%',
        position: 'absolute',
        right: '25px',
        zIndex: '999',
        color: '#fff',
    },
    nextArrow: {
        right: '25px',
    },
    backArrow: {
        left: '25px',
    },
}));

export default function Carousel(props) {
    const classes = useStyles();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
    const [itemCount, setItemCount] = useState(3);
    const [width, setWidth] = useState(null);
    const slideRef = useRef();
    const { sHeight, sWidth } = WindowDimensions();

    const _setItemCount = (size) => {
        if (size > 640) {
            return 3;
        } else if (size > 420) {
            return 2;
        } else {
            return 1;
        }
    };

    useEffect(() => {
        setItemCount(_setItemCount(sWidth));

        const handleResize = () => {
            const newItemCount = _setItemCount(window.innerWidth);
            setItemCount(newItemCount);

            setWidth(slideRef.current.offsetWidth);
            setTranslateValue(-(currentIndex * (slideRef.current.offsetWidth / newItemCount)));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [slideRef, currentIndex]);

    const goToPrevSlide = () => {
        if (currentIndex === 0) return;

        setCurrentIndex(currentIndex - 1);
        setTranslateValue(translateValue + slideWidth());
    };

    const goToNextSlide = () => {
        if (currentIndex === props.children.length - itemCount) {
            return;
        }

        setCurrentIndex(currentIndex + 1);
        setTranslateValue(translateValue - slideWidth());
    };

    const slideWidth = () => {
        return width / itemCount || document.querySelector('#slideWidth').clientWidth / itemCount;
    };

    const Slide = ({ item }) => {
        return (
            <div className={styles.slide} style={{ width: `calc(100% / ${itemCount})` }}>
                {item}
            </div>
        );
    };

    const LeftArrow = () => {
        return (
            <Fab
                size="medium"
                color="secondary"
                disabled={currentIndex === 0 ? true : false}
                className={[classes.arrow, classes.backArrow].join(' ')}
                onClick={goToPrevSlide}
            >
                <i className="material-icons">arrow_back</i>
            </Fab>
        );
    };

    const RightArrow = () => {
        return (
            <Fab
                size="medium"
                color="secondary"
                disabled={currentIndex === props.children.length - itemCount ? true : false}
                className={[classes.arrow, classes.nextArrow].join(' ')}
                onClick={goToNextSlide}
            >
                <i className="material-icons">arrow_forward</i>
            </Fab>
        );
    };

    return (
        <div className={styles.slider} id="slideWidth" ref={slideRef}>
            <div
                className={styles.sliderWrapper}
                style={{
                    transform: `translateX(${translateValue}px)`,
                    transition: 'transform ease-out 0.30s',
                }}
            >
                {props.children.map((item, i) => (
                    <Slide key={i} item={item} />
                ))}
            </div>

            <LeftArrow goToPrevSlide={goToPrevSlide} />

            <RightArrow goToNextSlide={goToNextSlide} />
        </div>
    );
}
