import React, {Component} from 'react';
import {Layout} from 'antd';
import '../../style/index.less';
import {receiveData} from '../../action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderCustom from '../../components/HeaderCustom';

import indexBg from '../../style/imgs/bg_index.jpg';

const { Content, Footer } = Layout;

class PageIndex extends Component {

    state = {
        collapsed: false,
    };

    componentWillMount() {
        const { receiveData } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && receiveData(user, 'auth');
        // receiveData({a: 213}, 'auth');
        // fetchData({funcName: 'admin', stateName: 'auth'});
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
        }
    }

    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const { receiveData } = this.props;
        const clientWidth = document.body.clientWidth;
        console.log("22222" + clientWidth);
        receiveData({ isMobile: clientWidth <= 992 }, 'responsive');
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { auth, router } = this.props;
        return (
            <Layout>
                <Layout className="login_layout "
                        style={{ flexDirection: 'column' }}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}}
                                  router={router} path={this.props.location.pathname}/>
                    <div className='linear-gradient' style={{ height: '95%' }}>
                        <Content
                            style={{ overflow: 'initial', position: 'relative', height: '90%' }}>
                            {this.props.children}

                        </Content>
                        <Footer style={{ textAlign: 'center',color:'#6a8aee', background: 'transparent' }}>
                            V1.0.0 ©2017 Created by wyzk
                        </Footer>
                    </div>

                </Layout>

            </Layout>
        )
    }
}

const mapStateToProps = state => {
    const { auth = { data: {} }, responsive = { data: {} } } = state.httpData;
    return { auth, responsive };
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);

