/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Rate } from 'antd';

class TableComs {

    renderContent = (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        return obj;
    };

    objrender = (value, ind, start, len) => {
        const obj = {
            children: value,
            props: {},
        };
        if (ind === start) {
            obj.props.rowSpan = len;
        } else {
            for (let index = 0; index < len; index++) {
                obj.props.rowSpan = 0;
            }
        }

        return obj;
    };

    //行的合并 v 从行开始  len合并几项
    getScolumns = (v, len)=> {
        return [{
            title: '关键环节',
            dataIndex: 'steupName',
            render: this.renderContent
        }, {
            title: '涉及对象',
            dataIndex: 'objectM',
            render: this.renderContent
        }, {
            title: '廉政风险点及等级',
            dataIndex: 'f_level',
            render: this.renderContent
        }, {
            title: '防控措施',
            dataIndex: 'measures',
            render: this.renderContent
        }, {
            title: '责任主体',
            dataIndex: 'responsibility',
            render: (value, row, index) => {
                return this.objrender(value, index, v, len);
            }
        }]
    };

    //星星的图标显示
    getStar = (i, string)=> {
        return <Rate count={i} disabled defaultValue={i} style={{ color:"#00CC00",fontSize: 16 }}/>;
    };


    //默认表头 适配
    comIssue_columns = [
        {
            title: '关键环节',
            dataIndex: 'steupName',
            render: this.renderContent
        }, {
            title: '涉及对象',
            dataIndex: 'objectM',
            render: this.renderContent
        }, {
            title: '廉政风险点及等级',
            dataIndex: 'f_level',
            render: this.renderContent
        }, {
            title: '防控措施',
            dataIndex: 'measures',
            render: this.renderContent
        }, {
            title: '责任主体',
            dataIndex: 'responsibility',
            render: this.renderContent
        }
    ];

    //========================数据区===========================//
    readyIssue_data = [{
        key: '1',
        steupName: '议题研究',
        objectM: '主责部门负责人、公司分管领导',
        f_level:
            <span>{this.getStar(1, "★")}议题所依据的事实不清楚、数据不真实，存在明显倾向性；  <br/>{this.getStar(1, "★")}未对议题组织充分研究讨论。</span>,
        measures: <span>1.主责部门做好前期调查和研究工作，列明所依据的事实、数据来源并说明选取依据。<br/>2.分管领导指导相关业务事项，组织相关部门充分研究论证。</span>,
        responsibility: '主责部门'
    }, {
        key: '2',
        steupName: '征求意见',
        objectM: '主责部门负责人、公司分管领导',
        f_level: <span>{this.getStar(2, "★")}议题应履行而未履行征求意见程序（如选人用人征求纪检部门意见）；  <br/>{this.getStar(2, "★")}相关部门不认真履职，所提意见明显具有倾向性，或未提出负责任意见。</span>,
        measures: <span>1.未按规定程序征求意见的议题应暂缓决策； <br/>2.相关部门负责人不认真履职造成决策不当的，追究相关人员责任。 </span>,
        responsibility: '主责部门'
    }];

    reptIssue_data = [{
        key: '1',
        steupName: '议题研究',
        objectM: '主责部门负责人和相关工作人员',
        f_level: <span>{this.getStar(2, "★")}不请示报告重要业务事项，或不如实请示报告。</span>,
        measures: <span>1.健全规章制度，明确请示报告事项，未请示报告事项不得办理。
            <br/>2.报告请示相关工作时，拟稿人和审核人不得为同一人。
        </span>,
        responsibility: '主责部门'
    }];

    ourIssue_data = [{
        key: '1',
        steupName: '议题讨论',
        objectM: '公司领导',
        f_level: <span>{this.getStar(2, "★")}参会人员未到达规定人数，仍然召开会议；
            <br/>{this.getStar(2, "★")}“三重一大”事项未提交公司总经理办公会/党委会研究决定；
            <br/>{this.getStar(2, "★")}主要领导（或会议召集人）先行发表倾向性意见，导致其他与会人员跟随主要领导，不能或不愿发表真实意见，集体决策流于形式；
            <br/>{this.getStar(2, "★")}未执行回避制度，影响决策成效。
        </span>,
        measures: <span>1.严格执行决策制度，未达到与会规定人数，会议应推迟召开；
            <br/>2. 涉及“三重一大”事项必须经公司总经理办公会/党委会研究决定；
            <br/>3.主要领导（或会议召集人）原则上应末位发表意见；
            <br/>4.公司纪委（或监察审计部）负责人出席或列席会议进行监督，对应回避未回避情况及时提醒。
        </span>,
        responsibility: '公司领导班子'
    }, {
        key: '2',
        steupName: '会议决定',
        objectM: '会议召集人',
        f_level: <span>{this.getStar(2, "★")}不认真考虑与会人员不同意见，存在“一言堂”情况；
            <br/>{this.getStar(2, "★")}未根据讨论决策情况正确做出会议决定。
        </span>,
        measures: <span>1.落实民主集中制，会议表决实行一人一票，少数服从多数，对分歧明显，且人数接近的事项应暂缓做出决策；
            <br/>2.落实“三重一大”决策制度监督检查制度，对会议决策不规范的情况，公司纪委有权向会议召集人提出意见和建议。
        </span>,
        responsibility: '会议召集人'
    }];


    doIssue_data = [{
        key: '1',
        steupName: '会议记录',
        objectM: '会议记录人',
        f_level: <span>{this.getStar(1, "★")}会议记录不完整，不能真实反映参会人员表态性发言或不能体现追溯性。
        </span>,
        measures: <span>会议记录须经参会人员确认或留存会议录音。
        </span>,
        responsibility: '综合管理部、党委办公室'
    }, {
        key: '2',
        steupName: '会议文件签发',
        objectM: '会议召集人',
        f_level: <span>{this.getStar(1, "★")}未严格按照会议情况起草会议纪要，擅自更改决策内容。
        </span>,
        measures: <span>严格执行会议纪要审核批准制度。
        </span>,
        responsibility: '综合管理部、党委办公室'
    }, {
        key: '3',
        steupName: '执行会议决定',
        objectM: '执行会议决定',
        f_level: <span>{this.getStar(2, "★")}各部门不执行或者选择性执行会议决定。
        </span>,
        measures: <span>1.建立督查督导工作机制，及时跟踪会议决定落实情况；
            <br/>2.发现不执行或者选择性执行会议决定依据有关规定进行问责。
        </span>,
        responsibility: '综合管理部、党委办公室'
    }];

    //========================数据区===========================//


    //议题准备 数据适配
    readyIssue = {
        columns: this.getScolumns(0, 2),
        data: this.readyIssue_data,
        bordered: true,
        pagination: false
    };

    //请示报告 数据适配
    reptIssue = {
        columns: this.comIssue_columns,
        data: this.reptIssue_data,
        bordered: true,
        pagination: false
    };

    //集体决策 数据适配
    ourIssue = {
        columns: this.comIssue_columns,
        data: this.ourIssue_data,
        bordered: true,
        pagination: false
    };

    //落实执行 数据适配
    doIssue = {
        columns: this.getScolumns(0, 3),
        data: this.doIssue_data,
        bordered: true,
        pagination: false
    };


    data_columns = [{
        title: '责任人',
        dataIndex: 'liable',
    }, {
        title: '时间',
        dataIndex: 'date',
    }, {
        title: '事件描述',
        dataIndex: 'description',
    }, {
        title: '风险等级',
        dataIndex: 'risk',
    }, {
        title: '违规环节',
        dataIndex: 'link',
    }, {
        title: '违规说明',
        dataIndex: 'explain',
    }];


    getDatas = ()=> {
        let data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                liable: `刘振华`,
                date: '2016年04月05日',
                description: `详情`,
                risk: this.getStar(2, "★"),
                link: `议题研究`,
                explain: '未对议题充分研究讨论'
            });
        }

        return data;
    };

    dataIssue = {
        columns: this.data_columns,
        data: this.getDatas(),
        bordered: true,
        pagination: {pageSize: 5}
    };

}


export default TableComs;
