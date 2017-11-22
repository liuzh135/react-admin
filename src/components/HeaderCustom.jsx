/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import screenfull from 'screenfull';
import { gitOauthToken, gitOauthInfo } from '../axios';
import { queryString } from '../utils';
import avater from '../style/imgs/b1.jpg';
import SiderCustom from './SiderCustom';
import { connect } from 'react-redux';
import imgs from '../style/imgs/top_text.png';
import adminUp from '../style/imgs/admin-up.png';
import indexUp from '../style/imgs/index_up.png';
import clearUp from '../style/imgs/clear_up.png';
import refreshUp from '../style/imgs/refresh_up.png';
import logoutUp from '../style/imgs/logout_up.png';
import settingUp from '../style/imgs/setting_up.png';


const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HeaderCustom extends Component {
    state = {
        user: '',
        visible: false,
    };

    componentDidMount() {
        const QueryString = queryString();
        // if (QueryString.hasOwnProperty('code')) {
        //     console.log(QueryString);
        //     const _user = JSON.parse(localStorage.getItem('user'));
        //     !_user && gitOauthToken(QueryString.code).then(res => {
        //         console.log(res);
        //         gitOauthInfo(res.access_token).then(info => {
        //             this.setState({
        //                 user: info
        //             });
        //             localStorage.setItem('user', JSON.stringify(info));
        //         });
        //     });
        //     _user && this.setState({
        //         user: _user
        //     });
        // }
        const _user = JSON.parse(localStorage.getItem('user')) || '测试';
        if (!_user && QueryString.hasOwnProperty('code')) {
            gitOauthToken(QueryString.code).then(res => {
                gitOauthInfo(res.access_token).then(info => {
                    this.setState({
                        user: info
                    });
                    localStorage.setItem('user', JSON.stringify(info));
                });
            });
        } else {
            this.setState({
                user: _user
            });
        }
    };

    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request();
        }

    };
    menuClick = e => {
        console.log(e);
        e.key === 'logout' && this.logout();
    };
    logout = () => {
        localStorage.removeItem('user');
        this.props.router.push('/login')
    };

    toIndex = (e) => {
        console.log("1111"+e);
        this.props.router.push('/')
    }
    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    };

    render() {
        const { responsive, path } = this.props;
        return (
            <Header style={{ background: '#069FBF', padding: 0, height: 65 }} className="custom-theme">

                <img src={imgs} alt="" className="pull-left be-header"/>

                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', background: '#069FBF',float: 'right' }}
                    onClick={this.menuClick}>
                    <Menu.Item key="admin">
                        <img src={adminUp} alt="用户中心" style={{ height: '100%' }}/>
                    </Menu.Item>
                    <Menu.Item key="index" onClick={this.toIndex}>
                        <img src={indexUp} alt="主页" onClick={this.toIndex}/>
                    </Menu.Item>
                    <Menu.Item key="refresh">
                        <img src={refreshUp} alt="刷新"/>
                    </Menu.Item>
                    <Menu.Item key="clear">
                        <img src={clearUp} alt="清除"/>
                    </Menu.Item>
                    <Menu.Item key="logout" onClick={this.logout}>
                        <img src={logoutUp} alt="退出登录" onClick={this.logout}/>
                    </Menu.Item>

                </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                    .ant-menu-item {
                        padding: 0 ;
                        height:100%;
                    }
                `}</style>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = { data: {} } } = state.httpData;
    return { responsive };
};

export default connect(mapStateToProps)(HeaderCustom);
