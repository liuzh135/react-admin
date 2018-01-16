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

        let show_day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        let time = new Date();
        let year = time.getYear();
        let month = time.getMonth();
        let date = time.getDate();
        let day = time.getDay();
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds();
        month < 10 ? month = '0' + month : month;
        month = month + 1;
        hour < 10 ? hour = '0' + hour : hour;
        minutes < 10 ? minutes = '0' + minutes : minutes;
        second < 10 ? second = '0' + second : second;
        let now_time = (1900 + year) + '年' + month + '月' + date + '日' + "  " + hour + ':' + minutes + ':' + second + '  ' + show_day[day];

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
            <div style={{ width:'100%' }}>
                <Breadcrumb separator=">" className="pull-left" style={{ margin: '3px 0' }}>
                    <Breadcrumb.Item><Icon type="mobile"/><span style={{ margin: '0px 12px' }}
                                                                className="nav-text">{indexName}</span></Breadcrumb.Item>
                    {first}
                    {second}
                </Breadcrumb>

                <div className="pull-right" style={{ margin: '3px 6px' , textAlign:'center'}}>
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
            </div>
        )
    }
}

export default BreadcrumbCustom;
