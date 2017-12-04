/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * @fileName: BaseSideCustom.jsx
 * Created on 2017-11-22
 * 默认左边栏样式
 */
class BaseSideCustom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            openKey: '',
            selectedKey: '',
            firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        };
        this.menu = [];
    }

    componentDidMount() {
        this.setMenuOpen(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps)
    }

    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);
        const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };

    createMenu = v => {
        let submenu = [];

        this.menu = [];
        if (v != null) {
            for (var index in v) {
                let menuitem = v[index];
                if (menuitem.submenu != null) {
                    submenu = menuitem.submenu;
                    let submenuView = [];
                    for (var suni in submenu) {
                        let subItem = submenu[suni];
                        submenuView.push(<Menu.Item key={subItem.path}><Link
                            to={subItem.path}>{subItem.title}</Link></Menu.Item>);
                    }
                    this.menu.push(<SubMenu
                        key={menuitem.menu}
                        title={<span><Icon type="scan" /><span className="nav-text">{menuitem.title}</span></span>}
                    >{submenuView}</SubMenu>);
                } else {
                    this.menu.push(<Menu.Item key={menuitem.menu}>
                        <Link to={menuitem.menu}><Icon type="mobile"/><span className="nav-text">{menuitem.title}</span></Link>
                    </Menu.Item>);
                }
            }
        }
        return this.menu;
    };

    render() {
        const {menus} = this.props;

        let baseMenuView = this.createMenu(menus);
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto',background:"#f4f4f4"}}
            >
                {/*<div className="logo"/>*/}

                <Menu
                    onClick={this.menuClick}
                    mode="inline"
                    theme="light"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.openMenu}>
                    {baseMenuView}
                </Menu>
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}


export default BaseSideCustom;