import React, {Component} from 'react';
import {Layout} from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import BaseSideCustom from './components/baseside/BaseSideCustom';
import HeaderCustom from './components/HeaderCustom';
import ExtSideCustom from './components/baseside/ExtSideCustom';
import DecisionsModel from './menu/DecisionsModel';
import {receiveData} from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const { Content, Footer } = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    componentWillMount() {
        const { receiveData } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("1111111111111111");
        user && receiveData(user, 'auth');
        const { router } = this.props;
        if (user == null) {
            router.push('/');
        }
        // receiveData({a: 213}, 'auth');
        // fetchData({funcName: 'admin', stateName: 'auth'});
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
            // console.log(document.body.clientWidth);
        }
    }

    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const { receiveData } = this.props;
        const clientWidth = document.body.clientWidth;
        console.log("111111" + clientWidth);
        receiveData({ isMobile: clientWidth <= 992 }, 'responsive');
    };
    //响应式
    toggle = () => {
        //this.setState({
        //    collapsed: !this.state.collapsed,
        //});
    };

    render() {
        console.log("auth 1 = " + JSON.stringify(this.props.auth));
        console.log(this.props.responsive);
        const { auth, router, responsive } = this.props;

        console.log("this.props.location.pathname = " + this.props.location.pathname);

        let de = new DecisionsModel();

        //左侧栏 decision 特殊处理
        let side_view;

        let patharry = this.props.location.pathname.split("/");

        if (this.props.location.pathname.indexOf("decision") > 0) {
            side_view = <BaseSideCustom menus={de.data.decision} path={this.props.location.pathname}
                                        collapsed={this.state.collapsed}/>;
        } else if (patharry.length > 2 && de.data[patharry[2]] != null) {
            side_view = <BaseSideCustom menus={de.data[patharry[2]]} path={this.props.location.pathname}
                                        collapsed={this.state.collapsed}/>;
        }

        return (
            <Layout>

                <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}}
                              router={router} path={this.props.location.pathname}/>

                <Layout style={{height:"90%"}}>
                    {!responsive.data.isMobile && side_view}
                    <Layout>
                        <Content style={{ margin: '0 10px', overflow: 'initial' }}>
                            {this.props.children}
                        </Content>


                    </Layout>

                </Layout>
                {
                    (   // 手机端对滚动很慢的处理
                        <style>
                            {`

                            .ant-card-wider-padding .ant-card-body {
                              padding: 16px 16px;
                            }

                            .ant-card-body {
                              padding: 14px;
                              zoom: 1;
                            }
                        `}
                        </style>
                    )
                }
            </Layout>
        );
    }
}


const mapStateToProps = state => {
    const { auth = { data: {} }, responsive = { data: {} } } = state.httpData;
    return { auth, responsive };
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
