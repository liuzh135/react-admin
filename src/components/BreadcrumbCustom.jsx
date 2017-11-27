/**
 * Created by hao.cheng on 2017/4/22.
 */
import React from 'react';
import { Breadcrumb, Switch, Icon } from 'antd';
import { Link } from 'react-router';
import themes from '../style/theme';

class BreadcrumbCustom extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            switcherOn: false,
            theme: null,
            date: '',
            timeid: null,
            themes: JSON.parse(localStorage.getItem('themes')) || [
                {type: 'info', checked: false},
                {type: 'grey', checked: false},
                {type: 'danger', checked: false},
                {type: 'warn', checked: false},
                {type: 'white', checked: false},
            ]
        };

    }

    componentDidMount() {
        this.state.themes.forEach(val => {
            val.checked && this.setState({
                theme: themes['theme' + val.type] || null
            });
        })
        this.getNowFormatDate();
    };

    switcherOn = () => {
        this.setState({
            switcherOn: !this.state.switcherOn
        })
    };
    themeChange = (v) => {
        this.setState({
            themes: this.state.themes.map((t, i) => {
                (t.type === v.type && (t.checked = !t.checked)) || (t.checked = false);
                return t;
            }),
            theme: (v.checked && themes['theme' + v.type]) || null
        }, () => {
            localStorage.setItem('themes', JSON.stringify(this.state.themes));
        })
    };

    getNowFormatDate = () => {

        var show_day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var time = new Date();
        var year = time.getYear();
        var month = time.getMonth();
        var date = time.getDate();
        var day = time.getDay();
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var second = time.getSeconds();
        month < 10 ? month = '0' + month : month;
        month = month + 1;
        hour < 10 ? hour = '0' + hour : hour;
        minutes < 10 ? minutes = '0' + minutes : minutes;
        second < 10 ? second = '0' + second : second;
        var now_time = (1900 + year) + '年' + month + '月' + date + '日' + "  " + hour + ':' + minutes + ':' + second + '  ' + show_day[day];

        this.setState({
            date: now_time,
            timeid: setTimeout(()=> {
                this.getNowFormatDate();
            }, 1000)
        });
    };

    componentWillUnmount() {
        clearTimeout(this.state.timeid)
    }

    render() {

        let date = this.state.date || "";
        const themesTag = this.state.themes.map((v, i) => (
            <div className="pull-left y-center mr-m mb-s" key={i}>
                <i className={`w-24 mr-s b-a ${v.type}`}/>
                <Switch checked={v.checked} onChange={() => this.themeChange(v)}/>
            </div>
        ));
        const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
        const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';

        const {indexName} = this.props || "首页";
        return (
            <span>
                <Breadcrumb className="pull-left" style={{ margin: '6px 0' }}>
                    <Breadcrumb.Item><Icon type="mobile"/><span style={{ margin: '0px 12px' }}
                                                                className="nav-text">{indexName}</span></Breadcrumb.Item>
                    {first}
                    {second}
                </Breadcrumb>

                <div className="pull-right" style={{ margin: '6px 6px' }}>
                    <span className="spandate">{date}</span>
                </div>
                <style>{`
                    ${this.state.theme ?
                    `
                    .custom-theme {
                        background: ${this.state.theme.header.background} !important;
                        color: #fff !important;
                    }
                    .custom-theme .ant-menu {
                        background: ${this.state.theme.header.background} !important;
                        color: #fff !important;
                    }
                    .custom-theme .ant-menu-item-group-title {
                        color: #fff !important;
                    }
                    ` : ''
                    }
                `}</style>
            </span>
        )
    }
}

export default BreadcrumbCustom;
