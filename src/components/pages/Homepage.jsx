/**
 * Created by hao.cheng on 2017/5/7.
 */
import React from 'react';
import {Card, Col, Layout, Row} from 'antd';
import index1 from '../../style/imgs/index/1-1-up.png';
import index2 from '../../style/imgs/index/1-2-up.png';
import index3 from '../../style/imgs/index/1-3-up.png';
import index4 from '../../style/imgs/index/1-4-up.png';
import index5 from '../../style/imgs/index/2-1-up.png';
import index6 from '../../style/imgs/index/2-2-up.png';
import index7 from '../../style/imgs/index/2-3-up.png';
import index8 from '../../style/imgs/index/2-4-up.png';
import index9 from '../../style/imgs/index/3-1-up.png';
import index10 from '../../style/imgs/index/3-2-up.png';
import index11 from '../../style/imgs/index/3-3-up.png';

class Homepage extends React.Component {


    state = {
        animated: false,
        animatedOne: -1
    };
    animatedAll = (checked) => {
        checked && this.setState({ animated: true });
        !checked && this.setState({ animated: false });

    };
    animatedOne = (i) => {
        this.setState({ animatedOne: i });
    };
    animatedOneOver = () => {
        this.setState({ animatedOne: -1 });
    };

    vFunc = (v) => {
        if (typeof v.onclickFnc === "function") {
            v.onclickFnc();
        } else {
            console.log("onclickFnc is null");
        }
    };

    render() {
        const animations = [
            {
                animateId: 'headShake',
                imgsrc: index1,
                onclickFnc: () => {
                    console.log("go to 1");
                    this.props.router.push('/app/decision/readyIndex')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index2,
                onclickFnc: () => {
                    this.props.router.push('/app/comprehensive/collogate/make')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index3,
                onclickFnc: () => {
                    this.props.router.push('/app/persmag/selectcadre/motion')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index4,
                onclickFnc: () => {
                    this.props.router.push('/app/finance/budget/budgeting')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index5,
                onclickFnc: () => {
                    this.props.router.push('/app/inverstment/projectCollection')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index6,
                onclickFnc: () => {
                    this.props.router.push('/app/construction/qualityctrl')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index7,
                onclickFnc: () => {
                    this.props.router.push('/app/operation/waterquality')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index8,
                onclickFnc: () => {
                    this.props.router.push('/app/tender/tendermanger')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index9,
                onclickFnc: () => {
                    this.props.router.push('/app/contract/projectcontract')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index10,
                onclickFnc: () => {
                    this.props.router.push('/app/asset/config/configureAsset')
                }
            }, {
                animateId: 'headShake',
                imgsrc: index11,
                onclickFnc: () => {
                    this.props.router.push('/app/supervision/Lettersreport')
                }
            }
        ];

        return (
            <div className="flex-con">
                <div className="gutter-example  box-ba">

                    <Row gutter={14}>
                        {animations.map((v, i) => (
                            <Col className="gutter-row" md={6} key={i}>
                                <div className="gutter-box" style={{ cursor: 'pointer' }}>
                                    <Card
                                        bodyStyle={{ padding: 20 }}
                                        bordered={false}
                                        noHovering={true}
                                        className={`${this.state.animated || (this.state.animatedOne === i) ? 'animated' : ''} ${this.state.animated || (this.state.animatedOne === i) ? 'infinite' : ''} ${v.animateId}`}
                                        onMouseEnter={() => this.animatedOne(i)}
                                        onMouseLeave={() => this.animatedOneOver()}>
                                        <div className="custom-image">
                                            <img alt="example" width="100%" src={v.imgsrc}
                                                 onClick={() => this.vFunc(v)}/>
                                        </div>

                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <style>{`
                    .ant-card-bordered {
                        border: 0px solid #e9e9e9;
                    }
                    .ant-card {
                        background: transparent;
                    }
                `}</style>
                </div>

            </div>
        )
    }
}

export default Homepage;