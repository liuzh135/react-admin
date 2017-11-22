/**
 * @fileName: CarCharge.jsx
 * Created on 2017-11-22
 *
 * 车辆加油管理页面
 */
import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsViews from '../dashboard/EchartsViews';
import EchartsProjects from '../dashboard/EchartsProjects';
import BasicTable from '../tables/BasicTable';
import b1 from '../../style/imgs/b1.jpg';


class CarCharge extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo ">
                <BreadcrumbCustom indexName="议题准备"/>

                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>


                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a className="card-tool"><Icon type="sync"/></a>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card title="基础表格" bordered={false}>
                                <BasicTable />
                            </Card>
                        </div>
                    </Col>

                </Row>

            </div>
        )
    }
}

export default CarCharge;