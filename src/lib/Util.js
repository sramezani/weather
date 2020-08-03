/* *
 * Global Util Functions

 * */

const Util = {
    getQueryString: (url, parameter) => {
        const myParameter = parameter.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${myParameter}(=([^&#]*)|&|#|$)`);
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },

    getTemperature: (temp, degree, withDegree = true) => {
        let res = 0;
        if (degree === 'F') {
            res = ((temp - 273.15) * 9) / 5 + 32;
            res = res.toFixed(2);
            res = withDegree ? `${res} \u00b0F` : res;
        } else if (degree === 'C') {
            res = temp - 273.15;
            res = res.toFixed(2);
            res = withDegree ? `${res} \u00b0C` : res;
        }
        return res;
    },
};

/* Export ================================ */
export default Util;
