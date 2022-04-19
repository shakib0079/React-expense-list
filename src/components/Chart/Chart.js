import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const allValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...allValues);

    return (
        <div className='chart'>
            {props.dataPoint.map(dataPoint => 
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label}/>
            )}

        </div>
    )
}

export default Chart