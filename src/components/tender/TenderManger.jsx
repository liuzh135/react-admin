/**
 * @fileName: Selectioncadre.jsx
 * Created on 2017-11-24
 *
 * 招标采购管理
 */
import React from "react";
import EcharCom from "../com/EcharCom";
import EcharBar from "../com/EcharBar";
import Bacecomstyle from "../Bacecomstyle";
import TableComs, {getStepString} from "../com/TableComs";
import {Card, Col, Icon, Layout, Row, Select, Steps} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import BreadcrumbCustom from '../BreadcrumbCustom';
import BaseEcharView from '../charts/BaseEcharView';

import {fetchData, receiveData} from '@/action';

import ExtBaseicTable from '../tables/ExtBaseicTable';
import {ExtBaseicTableList} from "../com/ExtBaseicTableList";
import HumpgDialog from "../com/HumpgDialog";
import MoreDetDialog from "../com/MoreDetDialog";

const Option = Select.Option;
const Step = Steps.Step;
class TenderManger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            echartsFlag: false,
            first: false,
            expand: false,
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
    funBack1 = () => {
        this.showMoreModal();
    };
    funBack2 = () => {
        this.showUpdateModal();
    };

    showUpdateModal = () => {
        this.setState({
            visibleUpdate: !this.state.visibleUpdate,
        });
    };
    showMoreModal = () => {
        this.setState({
            visibleMore: !this.state.visibleMore,
        });
    };

    handleChange = (v) => {

    };

    handleButton = () => {
        let state = this.state.expand || false;
        this.setState({
            expand: !state,
        });
    };


    getStep1 = () => {
        return getStepString([{
            key:1,
            value:"招标准备工作"
        },{
            key:2,
            value:"招标文件编制"
        },{
            key:3,
            value:"招标公告发布"
        },{
            key:4,
            value:"招标文件发售"
        },{
            key:5,
            value:"现场踏勘（或投标预备会）"
        }]);
    };

    getStep2 = () => {
        return getStepString([{
            key:6,
            value:"招标文件的澄清（或修改）"
        },{
            key:7,
            value:"开标"
        },{
            key:8,
            value:"评标委员会组建"
        },{
            key:9,
            value:"评标"
        },{
            key:10,
            value:"中标公示"
        }]);
    };
    getStep3 = () => {
        return getStepString([{
            key:11,
            value:"定标"
        },{
            key:12,
            value:"合同签订"
        }]);
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
                                                  style={{ height: '82%', width: '100%' }}/>;

        return (
            <div className="gutter-example button-demo " style={{ height: '100%' }}>
                <BreadcrumbCustom indexName="招标采购管理"/>
                <Row gutter={10} className=" scrollable-container " style={{ height: '95%' }}>
                    <Col className="gutter-row" md={24}
                         style={{ padding: '0px',   backgroundColor: '#fff' }}>
                        <div style={{ height: '100%' }}>
                            <div style={{ padding: '5px 10px' }}>
                                <Layout style={{ background: "#fff" }}>
                                    <div className="y-center justify-content">
                                        <div className="text-center" style={{ flex: "0.8" }}>
                                            <div className="pull-left " style={{ fontSize: "14px" }}>
                                                <Icon type="cloud" style={{ marginRight: "3px" }}/>
                                                <span style={{ fontSize: "13px" }}>风险防控</span>
                                            </div>

                                        </div>

                                        <div className="pull-right" style={{ flex: "2" }}>
                                            <span className="pull-right ">高风险 {tableComs.getStar1(3, "star")}
                                                中风险 {tableComs.getStar1(2, "star")} 低风险 {tableComs.getStar1(1, "star")}</span>
                                        </div>
                                    </div>
                                    {this.getStep1()}
                                    {this.getStep2()}
                                    {this.getStep3()}
                                </Layout>
                            </div>
                            <div style={{ height: '350px',overflowX:'hidden' }}>
                                <ExtBaseicTable {...(tableComs.tendering_and_bidding_manger(expand))} />
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={24}
                         style={{
                             height: '44%',
                             backgroundColor: "#fff",
                             borderTop: "1px solid #E9E9E9"
                         }}>
                        <div className="" style={{ width: "30%", height: '100%', float: "left" }}>
                            <div style={{ position: 'relative', height: '100%' }}>
                                <div style={{
                                    height: '14%',
                                    width: '100%',
                                    paddingLeft: '5px',
                                    position: 'relative'
                                }}>
                                    <div style={{ fontSize: "14px" }}>
                                        <Icon type="area-chart" style={{ marginRight: "3px" }}/>
                                        <span style={{ fontSize: "13px" }}>风险监控统计</span>
                                    </div>
                                </div>


                                {ecahrs}

                            </div>
                        </div>
                        <div className="" style={{ width: "70%",  float: "left" }}>
                            <Card bordered={false} noHovering={true} style={{ height: '100%' }}>
                                <ExtBaseicTableList
                                    func1={this.funBack1}
                                    func2={this.funBack2}/>
                            </Card>
                        </div>
                    </Col>

                </Row>
                <HumpgDialog
                    title="人工评估"
                    submitText="提交"
                    visible={this.state.visibleUpdate}/>

                <MoreDetDialog
                    title="详情"
                    visible={this.state.visibleMore}/>
                {
                    Bacecomstyle
                }
            </div>
        )
    }
}

const mapStateToPorps = state => {
    const { auth } = state.httpData;
    return { auth };
};

const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(TenderManger);