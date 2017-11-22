import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import SideLeftItem from '../widget/SideLeftItem';
const { Sider } = Layout;

/**
 * @fileName: ExtSideCustom.jsx
 * Created on 2017-11-22
 * 自定义左侧状态栏 三重一大
 *
 */
class ExtSideCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {menus} = this.props;

        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto'}}>

                <SideLeftItem pmsL={this.props} menusItem={menus}/>

            </Sider>
        );
    }

}
export default ExtSideCustom;