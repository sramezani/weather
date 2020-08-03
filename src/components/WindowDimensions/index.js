import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: sWidth, innerHeight: sHeight } = window;
    return {
        sWidth,
        sHeight,
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
