/**
 * @fileName: Decisionour.jsx
 * Created on 2017-11-22
 *
 * 集体决策
 */
import React from 'react';
import { Layout } from 'antd';
import { Row, Col, Card, Button, Icon, Select} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import BreadcrumbCustom from '../BreadcrumbCustom';
import BaseEcharView from '../charts/BaseEcharView';
import EcharCom from '../com/EcharCom';

import { fetchData, receiveData } from '@/action';
import TableComs from '../com/TableComs';

import ExtBaseicTable from '../tables/ExtBaseicTable';
import EcharBar from '../com/EcharBar';

const Option = Select.Option;

class Decisionour extends React.Component {

    constructor(props) {
        super(props);
        let d = new Date();
        this.state = {
            echartsFlag: false,
            first: false,
            expand: false,
            queryParam: {
                'activityId': 1,//活动ID
                'statisDate': d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate(),//查询日期默认当天
                'userType': 1,//
            }
        }
    }

    //调用action中的ajax方法，获取数据
    componentWillMount() {
        const { receiveData } = this.props;
        receiveData(null, 'auth');
        console.log("auth +++++" + JSON.stringify(this.props.auth));

        const { fetchData } = this.props;
        //调用 http请求 获取网络数据
        //fetchData({funcName: 'admin', stateName: 'auth'});
    }

    componentDidMount() {
        let first = this.state.first || false;
        if (!first) {
            this.setState({
                first: true
            });
        }
    }

    //获取网络数据 渲染UI
    componentWillReceiveProps(nextProps) {

    }

    handleChange = (v) => {

    };

    handleButton = () => {
        let state = this.state.expand || false;
        this.setState({
            expand: !state,
        });
    };


    render() {
        let tableComs = new TableComs();
        let echarCom = new EcharCom();

        let datalist = [];
        let xlist = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        let legend = ["高风险", "中风险", "低风险"];

        datalist.push(new EcharBar('高风险', 'line', 'circle', 4, [120, 300, 402, 180, 590, 620, 200], '#35C9CB', 6));
        datalist.push(new EcharBar('中风险', 'line', 'circle', 4, [220, 100, 302, 280, 590, 220, 420], '#B9A6DF', 6));
        datalist.push(new EcharBar('低风险', 'line', 'circle', 4, [320, 400, 102, 80, 290, 320, 120], '#5EB3EF', 6));
        let expand = this.state.expand || false;
        //刷新2次  解决echars 的宽度问题
        let first = this.state.first || false;
        let ecahrs = !first ? "" : <BaseEcharView option={echarCom.option} legend={legend} xAxis={xlist} data={datalist}
                                                  style={{ height: '320px', width: '100%' }}/>;
        return (
            <div className="gutter-example button-demo ">
                <BreadcrumbCustom first="集体决策" indexName="'三重一大'决策管理"/>

                <Row gutter={10} className=" scrollable-container ">
                    <Col className="gutter-row" md={24} style={{ padding: '0px' }}>
                        <div className="">
                            <Card bordered={false} noHovering={true}>
                                <Layout style={{ background: "#fff" }}>
                                    <div className="y-center justify-content">
                                        <div className="text-center" style={{ flex: "1" }}>
                                            <div className=" pull-left">
                                                <Button size="default" onClick={this.handleButton}>风险防控(展开)</Button>
                                            </div>
                                        </div>

                                        <div className="pull-right" style={{ flex: "2" }}>
                                            <span className="pull-right ">高风险 {tableComs.getStar(3, "star")}
                                                中风险 {tableComs.getStar(2, "star")} 低风险 {tableComs.getStar(1, "star")}</span>
                                        </div>
                                    </div>
                                </Layout>
                                <ExtBaseicTable {...(tableComs.ourIssue(expand))} />
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={24} style={{ paddingTop: '10px', backgroundColor: "#fff",borderTop:"1px solid #E9E9E9"}}>
                        <div className="" style={{ width: "30%", float: "left" }}>
                            <Card bordered={false} style={{ height: '100%' }} noHovering={true}>
                                <div className="pb-m">
                                    <h3>风险监控统计</h3>
                                </div>

                                <div className="card-tool">
                                    <Select defaultValue="week" style={{ width: 120, color: "#256" }}
                                            onChange={this.handleChange}>
                                        <Option value="week">一周以内</Option>
                                        <Option value="month">一个月以内</Option>
                                        <Option value="thmonth">三个月以内</Option>
                                    </Select>
                                </div>

                                {ecahrs}

                            </Card>
                        </div>
                        <div className="" style={{ width: "70%", float: "left" }}>
                            <Card bordered={false} noHovering={true}>
                                <ExtBaseicTable style={{ margin: "5px" }}{...tableComs.dataIssue}/>

                            </Card>
                        </div>
                    </Col>

                </Row>
                {
                    (
                        <style>
                            {`
                                .ant-steps .ant-steps-head-inner {
                                  width: 18px;
                                  height: 18px;
                                  line-height: 16px;
                                  font-size: 12px;
                                }
                                .ant-steps .ant-steps-title {
                                    font-size: 12px;
                                    line-height: 20px;
                                }
                                .ant-table table{
                                    letter-spacing:1px;
                                }
                                .ul-text{
                                   list-style-type: decimal;
                                   list-style-position:outside;
                                   padding-left:15px;
                                }
                                .ant-table-tbody > tr > td {
                                    padding: 10px 8px;
                                }
                                .ant-btn {
                                    border-radius: 0px;
                                    border-bottom: 0px;
                                }
                        `}
                        </style>
                    )
                }
            </div>
        )
    }
}

const mapStateToPorps = state => {
    const { auth } = state.httpData;
    return {auth};
};

const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Decisionour);