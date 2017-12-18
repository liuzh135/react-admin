/**
 * @fileName: EcharsLine.jsx
 * Created on 2017-11-23
 *
 * 基础数据类型
 */
import echarts from 'echarts';

class EcharsLine {
    constructor(name, type, symbol, symbolSize, data, color) {
        this.name = name || '';
        this.type = type || 'line';
        this.smooth = true;
        this.symbol = symbol || 'circle';
        this.symbolSize = symbolSize || 4;
        this.data = data || [];
        this.itemStyle = {
            normal: {
                color: color || '#B8CFE1',
                label: {
                    show: true,
                    textStyle: {
                        color: '#848484'
                    }
                }
            }

        };

        this.markPoint = {
            data: [
                {type: 'max', name: '最大值'},
            ]
        };
        this.lineStyle = {
            normal: {
                width: 3
            }
        };
    }
}

export default EcharsLine;