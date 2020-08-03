import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import styles from './weatherChart.module.scss';
import { Util } from '../../lib';

const colors = ['#64B5F6', '#FFB74D', '#81C784', '#FF8A65', '#9575CD', '#A1887F', '#F06292', '#90A4AE', '#DCE775', '#4DB6AC'];

const getPath = (x, y, width, height) => `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function WeatherCarousel(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let data = [];
        setData([]);
        props.chartData.map((item) => {
            let row = [];
            row['name'] = `${moment(item.dt_txt).format('h:mm')} ${moment(item.dt_txt).format('a')}`;
            row['temp'] = Util.getTemperature(item.main.temp, props.tempType, false);
            data.push(row);
        });
        setTimeout(() => {
            setData(data);
        }, 10);
    }, [props]);

    return (
        <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 50,
                        right: 20,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    <Bar dataKey="temp" fill="#9575CD" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
