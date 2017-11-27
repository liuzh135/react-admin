/**
 * @fileName: Selectioncadre.jsx
 * Created on 2017-11-24
 *
 * 合同管理-合同立项
 */
import React from 'react';
import { Layout } from 'antd';
import { Steps, Row, Col, Card, Timeline, Icon, Select} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsViews from '../dashboard/EchartsViews';
import EchartsProjects from '../dashboard/EchartsProjects';
import BasicTable from '../tables/BasicTable';
import BaseEcharView from '../charts/BaseEcharView';
import EcharCom from '../com/EcharCom';

import { fetchData, receiveData } from '@/action';
import TableComs from '../com/TableComs';

import ExtBaseicTable from '../tables/ExtBaseicTable';
import EcharBar from '../com/EcharBar';

const Option = Select.Option;
const Step = Steps.Step;
class Projectcontract extends React.Component {

    constructor(props) {
        super(props);
        let d = new Date();
        this.state = {
            echartsFlag: false,
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

    //获取网络数据 渲染UI
    componentWillReceiveProps(nextProps) {

    }

    handleChange = (v)=> {

    };

    render() {
        let tableComs = new TableComs();
        let echarCom = new EcharCom();

        let datalist = [];
        let xlist = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        let legend = ["高风险", "中风险", "低风险"];

        datalist.push(new EcharBar('高风险', 'line', 'circle', 4, [120, 300, 402, 180, 590, 620, 200], '#7DFFFD', 8));
        datalist.push(new EcharBar('中风险', 'line', 'circle', 4, [220, 100, 302, 280, 590, 220, 420], '#FFBCFB', 8));
        datalist.push(new EcharBar('低风险', 'line', 'circle', 4, [320, 400, 102, 80, 290, 320, 120], '#CAFF99', 8));

        return (
            <div className="gutter-example button-demo ">
                <BreadcrumbCustom first="合同立项" indexName="合同管理"/>

                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Steps current={1} style={{marginBottom:"15px"}}>
                                    <Step status="wait" title="立项申请"/>
                                    <Step status="wait" title="相关部门会签"/>
                                    <Step status="wait" title="财务部、计划资产部审核"/>
                                    <Step status="wait" title="公司领导审批"/>
                                </Steps>

                                <Layout style={{background:"#fff"}}>
                                    <div className="y-center">
                                        <div className="pull-left mr-m">
                                            <Icon type="cloud" className="text-2x"/>
                                        </div>
                                        <div className="clear" style={{width:"60px "}}>
                                            <h4 >风险防控</h4>
                                        </div>

                                        <div style={{width:"100%"}}>
                                            <span className="pull-right text mr-m">高风险{tableComs.getStar(3, "★")}
                                                中风险{tableComs.getStar(2, "★")} 低风险{tableComs.getStar(1, "★")}</span>
                                        </div>
                                    </div>


                                </Layout>
                                <ExtBaseicTable {...tableComs.project_setting_manger}/>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false} style={{height: '100%'}}>
                                <div className="pb-m">
                                    <h3>风险监控统计</h3>
                                </div>

                                <div className="card-tool">
                                    <Select defaultValue="week" style={{ width: 120 ,color:"#256"}}
                                            onChange={this.handleChange}>
                                        <Option value="week">一周以内</Option>
                                        <Option value="month">一个月以内</Option>
                                        <Option value="thmonth">三个月以内</Option>
                                    </Select>
                                </div>
                                <BaseEcharView option={echarCom.option} legend={legend} xAxis={xlist} data={datalist}
                                               style={{height: '370px', width: '100%'}}/>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <ExtBaseicTable style={{margin:"5px"}}{...tableComs.dataIssue}/>
                            </Card>
                        </div>
                    </Col>

                </Row>

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


export default connect(mapStateToPorps, mapDispatchToProps)(Projectcontract);