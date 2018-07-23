/**
 * @fileName: ExtBaseicTable.jsx
 * Created on 2017-11-23
 *
 * 折线图
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

class BaseEcharView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {style,option,data,xAxis,legend} = this.props;

        const dataOption = Object.assign(option, {
            series: data,
            legend: {
                data: legend,
            },
            xAxis: {
                type: 'category',
                data: xAxis,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    interval: 'auto',
                    lineStyle: {
                        color: ['#D4DFF5']
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#609ee9'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 10
                    }
                }
            }
        });

        return (
            <ReactEcharts
                option={dataOption}
                style={{ height: '280px', width: '100%' }}
                notMerge={true}
                lazyUpdate={true}
                className={'react_for_echarts'}
            />
        )
    }
}

export default BaseEcharView;