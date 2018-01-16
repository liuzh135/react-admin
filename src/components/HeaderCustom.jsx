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
        console.log("QueryString:" + QueryString);//第三方登录

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
        this.props.router.push('/pageIndex/homepage')
    }
    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };

    clear_user = () => {
        localStorage.removeItem("user");
    };

    handleVisibleChange = (visible) => {
        this.setState({visible});
    };

    render() {
        let user = this.state.user;
        let adminString = user.userName || '用户中心';
        return (
            <Header style={{ background: '#069FBF', padding: 0, height: 65 }} className="custom-theme">
                <div className="ui-flex justify-between between"
                     style={{height: '100%'}}>
                    <img src={imgs} style={{marginLeft:'30px'}} alt=""/>

                    <Menu
                        mode="horizontal"
                        style={{ lineHeight: '0px', background: '#069FBF'}}
                        onClick={this.menuClick}>
                        <Menu.Item key="admin">
                            <div className=" d-relative  text-center"><img style={{width:'80%',height:'80%'}}
                                                                           src={adminUp}
                                                                           alt="头像"/>
                                <p className="p-center"> {adminString}</p ></div>

                        </Menu.Item>
                        <Menu.Item key="index">
                            <div className=" d-relative  text-center" onClick={this.toIndex}><img
                                style={{width:'80%',height:'80%'}}
                                src={indexUp}
                                alt="主页"/>
                                <p className="p-center"> 主页</p ></div>
                        </Menu.Item>
                        <Menu.Item key="refresh">
                            <div className=" d-relative  text-center"><img
                                style={{width:'80%',height:'80%'}}
                                src={refreshUp}
                                alt="刷新"/>
                                <p className="p-center"> 刷新</p ></div>
                        </Menu.Item>
                        <Menu.Item key="clear">
                            <div className=" d-relative  text-center" onClick={this.clear_user}><img style={{width:'80%',height:'80%'}}
                                                                           src={clearUp}
                                                                           alt="清除"/>
                                <p className="p-center"> 清除</p ></div>
                        </Menu.Item>
                        <Menu.Item key="logout">
                            <div className=" d-relative  text-center "><img
                                style={{width:'80%',height:'80%'}}
                                src={logoutUp}
                                alt="退出登录"/>
                                <p className="p-center"> 退出登录</p ></div>
                        </Menu.Item>

                    </Menu>
                </div>


                <style>{`
                    .ant-layout p{
                        margin: 2px 0 10px 0;
                    }
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                    .ant-menu-item {
                        padding: 0 ;
                        height:100%;
                    }
                    .ant-menu-horizontal {
                        border-bottom: 0px;
                    }
                `}</style>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
};

export default connect(mapStateToProps)(HeaderCustom);
