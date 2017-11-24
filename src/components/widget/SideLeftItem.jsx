import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router';
/**
 * @fileName: BaseSideCustom.jsx
 * Created on 2017-11-22
 * 默认左边栏样式  方便扩展和修改
 */
class SideLeftItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.menu = [];
    }

    createMenu = v => {
        this.menu = [];
        if (v != null) {
            for (var index in v) {
                let menuitem = v[index];

                let li_class = "ant-menu-item";
                const {pmsL} = this.props;
                if (pmsL.path === menuitem.menu) {
                    li_class = "ant-menu-item ant-menu-item-selected"
                }
                this.menu.push(<li className={li_class}
                                   style={{paddingLeft:"24px"}}><Link to={menuitem.menu}>
                    <i className="anticon anticon-mobile"></i><span className="nav-text">{menuitem.title}</span></Link>
                </li>);
            }
        }
        return this.menu;
    };

    render() {
        const {menusItem} = this.props;

        let baseMenuView = this.createMenu(menusItem);


        return (
            <Layout className="ant-layout-sider">
                <div className="logo"/>
                <ul className="ant-menu ant-menu-inline ant-menu-dark ant-menu-root" role="menu"
                    aria-activedescendant=""
                    tabindex="0">
                    {baseMenuView}
                </ul>
            </Layout>
        );
    }
}

export default SideLeftItem;