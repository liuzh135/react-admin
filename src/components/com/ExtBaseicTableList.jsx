import React from "react";
import {Icon, DatePicker} from "antd";
import moment from "moment/moment";
import ExtBaseicTable from "../tables/ExtBaseicTable";

const { RangePicker } = DatePicker;

export class ExtBaseicTableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devicelist: [],
            pagination: {},
            loading: false,
            startDate: this.getDay(-3),
            endDate: this.getDay(0),
        };

        this.data_columns = [{
            title: '责任人',
            dataIndex: 'liable',
            width: 100,
        }, {
            title: '时间',
            dataIndex: 'date',
            width: 150,
        }, {
            title: '环节',
            dataIndex: 'hdata',
            width: 150,
        }, {
            title: '风险评估',
            dataIndex: 'risk',
            width: 100,
        }, {
            title: '详情',
            dataIndex: 'description',
            width: 100,
            render: () => this.renderStateContent(),
        }, {
            title: '操作',
            dataIndex: 'link',
            width: 150,
            render: () => this.renderOperationContent(),
        }];
    }

    getDay = (day) => {
        let today = new Date();

        let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;

        today.setTime(targetday_milliseconds); //注意，这行是关键代码

        let tYear = today.getFullYear();
        let tMonth = today.getMonth();
        let tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tYear + "-" + tMonth + "-" + tDate;
    };

    doHandleMonth = (month) => {
        let m = month;
        if (month.toString().length === 1) {
            m = "0" + month;
        }
        return m;
    };

    renderStateContent = (value, row, index) => {
        return <div className=" flex-center">
            <div style={{ cursor: 'pointer', }}>
                <Icon onClick={this.funBack1} type={"book"} style={{ margin: '3px', color: '#1ABC9C' }}/>
            </div>
        </div>;
    };
    renderOperationContent = (value, row, index) => {
        return <div className=" flex-center">
            <a style={{ marginRight: '4px' }} onClick={this.funBack2}>人工评估</a>
        </div>;
    };

    funBack1 = (stringId) => {
        const { func1 } = this.props;
        if (typeof func1 === "function") {
            func1("111111");
        }
    };
    funBack2 = (stringId) => {
        const { func2 } = this.props;
        if (typeof func2 === "function") {
            func2("22222");
        }
    };

    getDatas = () => {
        let data = [];
        for (let i = 0; i < 18; i++) {
            data.push({
                key: i,
                liable: `李广`,
                date: '2016年04月05日',
                hdata: "印章刻制",
                description: `详情`,
                risk: this.getStar(2, "star"),
            });
        }
        return data;
    };

    //星星的图标显示
    getStar = (i, string) => {
        // return <Rate count={i} disabled defaultValue={i} style={{ color:"#00CC00",fontSize: 16 }}/>;
        let iconView = [];
        let colorString = string == null ? "star" : string;

        for (let j = 0; j < i; j++) {
            iconView.push(<Icon type={"star"} key={j + i} style={{ margin: '3px', color: '#0fb0f0' }}/>);
        }
        for (let j = 0; j < 3 - i; j++) {
            iconView.push(<Icon type="star-o" key={j + 3 - i} style={{ margin: '3px', color: '#0fb0f0' }}/>);
        }
        return <span>{iconView}</span>;
    };

    //星星的图标显示
    getStar1 = (i, string) => {
        // return <Rate count={i} disabled defaultValue={i} style={{ color:"#00CC00",fontSize: 16 }}/>;
        let iconView = [];
        let colorString = string == null ? "star" : string;

        for (let j = 0; j < i; j++) {
            iconView.push(<Icon type="star" key={j} style={{ margin: '3px', color: '#0fb0f0' }}/>);
        }
        return <span>{iconView}</span>;
    };

    handOnChangeTime = () => {

    };


    render() {
        const dateFormat = 'YYYY-MM-DD';

        let startDate = this.state.startDate;
        let endDate = this.state.endDate;

        return (
            <div>
                <div className='device_text' style={{ width: '100%', textAlign: 'center' }}>
                    <RangePicker
                        style={{ float: 'right' }}
                        defaultValue={[moment(startDate, dateFormat), moment(endDate, dateFormat)]}
                        format={dateFormat}
                        onChange={this.handOnChangeTime}
                        dateRender={(current) => {
                            const style = {};
                            if (current.date() === 1) {
                                style.border = '1px solid #1890ff';
                                style.borderRadius = '50%';
                            }
                            return (
                                <div className="ant-calendar-date" style={style}>
                                    {current.date()}
                                </div>
                            );
                        }}
                    />
                    <span className="device_text"
                          style={{
                              height: '100%',
                              marginRight: '20px',
                              marginTop: '5px',
                              float: 'right'
                          }}>根据时间查询 : </span>
                </div>
                <div style={{ float: 'right', width: '100%' }}>
                    <ExtBaseicTable columns={this.data_columns}
                                    data={this.getDatas()}
                                    pagination={{ pageSize: 6 }}
                                    scroll={{ y: 210 }}
                                    bordered={true}
                                    size="small"
                                    style={{ margin: "5px", height: '100%' }}/>
                </div>


            </div>
        );
    }
}