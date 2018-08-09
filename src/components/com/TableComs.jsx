/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import {Icon} from 'antd';

export const getStepString = (steps = []) => {
    let stepView = [];
    steps.map((step, index) => {
        let subView = <div className="ant-steps-item ant-steps-status-process"
                           style={{ width: '20%', marginRight: '-14px' }}>
            <div className="ant-steps-tail" style={{ paddingRight: '14px' }}><i></i></div>
            <div className="ant-steps-step">
                <div className="ant-steps-head">
                    <div className="ant-steps-head-inner"><span className="ant-steps-icon">{step.key}</span></div>
                </div>
                <div className="ant-steps-main">
                    <div className="ant-steps-title">{step.value}</div>
                </div>
            </div>
        </div>;
        stepView.push(subView);
    });
    return <div className="ant-steps ant-steps-horizontal ant-steps-label-horizontal"
                style={{ margin: '6px' }}>{stepView}</div>;
};

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

            for (let index = start + 1; index < start + len; index++) {
                if (ind === index) {
                    obj.props.rowSpan = 0;
                }
            }
        }
        return obj;
    };


    isArray = (obj) => {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };


    //行的合并 v 从行开始  len合并几项
    get6Scolumns = (v, len) => {
        return [{
            title: '流程',
            dataIndex: 'liuc',
            width: 100,
            render: (value, row, index) => {
                return this.objrender(value, index, v, len);
            }
        }, {
            title: '关键环节',
            dataIndex: 'steupName',
            width: 150,
            render: this.renderContent
        }, {
            title: '涉及对象',
            dataIndex: 'objectM',
            width: 150,
            render: (value, row, index) => {
                return this.objrender(value, index, v, len);
            }
        }, {
            title: '廉政风险点及等级',
            dataIndex: 'f_level',
            width: 350,
            render: (value, row, index) => {
                return this.objrender(value, index, v, len);
            }
        }, {
            title: '防控措施',
            dataIndex: 'measures',
            width: 350,
            render: (value, row, index) => {
                return this.objrender(value, index, v, len);
            }
        }, {
            title: '责任主体',
            dataIndex: 'responsibility',
            width: 150,
            render: (value, row, index) => {
                return this.objrender(value, index, v, len);
            }
        }]
    };


    //星星的图标显示
    getStar = (i, string) => {
        // return <Rate count={i} disabled defaultValue={i} style={{ color:"#00CC00",fontSize: 16 }}/>;
        let iconView = [];
        let colorString = string == null ? "star" : string;

        for (let j = 0; j < i; j++) {
            iconView.push(<Icon type={"star"} key={j + i} style={{ margin: '3px', color: '#0fb0f0' }}/>);
        }
        for (let j = 0; j < 3 - i; j++) {
            iconView.push(<Icon type="star-o" key={j + 3 - i} style={{ margin: '3px', color: '#0fb0f0' }}/>);
        }
        return <span>{iconView}</span>;
    };

    //星星的图标显示
    getStar1 = (i, string) => {
        // return <Rate count={i} disabled defaultValue={i} style={{ color:"#00CC00",fontSize: 16 }}/>;
        let iconView = [];
        let colorString = string == null ? "star" : string;

        for (let j = 0; j < i; j++) {
            iconView.push(<Icon type="star" key={j} style={{ margin: '3px', color: '#0fb0f0' }}/>);
        }
        return <span>{iconView}</span>;
    };

    getFLevel = (flevels, maxlen, expand) => {
        let firstLi;
        let nextLi;
        let FleveView = [];
        let clsName = "fleft-3m";
        for (let i = 0; i < flevels.length; i++) {
            if (i == 0) {
                firstLi = <div key={i}>
                    <div className={clsName}>
                        {this.getStar(flevels[i].star, "star")}
                    </div>
                    <div className="fleft-10m">
                        <span>{flevels[i].span}</span>
                    </div>
                </div>;
                FleveView.push(firstLi);
            } else {
                nextLi = <div key={i} className="clear-float margin-top">
                    <div className={clsName}>
                        {this.getStar(flevels[i].star, "star")}
                    </div>
                    <div className="fleft-10m">
                        <span> {flevels[i].span}</span>
                    </div>
                </div>;
                FleveView.push(nextLi);
            }
        }
        // }
        return <div>{FleveView}</div>;

    };

    getMeasures = (measures, expand) => {
        let measuresView = [];
        let contentLi;
        // if (typeof expand === 'boolean' && !expand) {
        //     let modeData = measures[0];
        //     let modeString = modeData.substring(0, 20) + "...";
        //     contentLi = <li>{modeString}</li>;
        //     measuresView.push(contentLi);
        // } else {
        for (let i = 0; i < measures.length; i++) {
            contentLi = <li key={i}>{measures[i]}</li>;
            measuresView.push(contentLi);
        }
        // }
        let clsName = measuresView.length > 1 ? "ul-text" : "";
        return <ul className={clsName}>{measuresView}</ul>;
    };

    //默认表头 适配
    comIssue_columns = [
        {
            title: '关键环节',
            dataIndex: 'steupName',
            width: 100,
            render: this.renderContent
        }, {
            title: '涉及对象',
            dataIndex: 'objectM',
            width: 150,
            render: this.renderContent
        }, {
            title: '廉政风险点及等级',
            dataIndex: 'f_level',
            width: 350,
            render: this.renderContent
        }, {
            title: '防控措施',
            dataIndex: 'measures',
            width: 350,
            render: this.renderContent
        }, {
            title: '责任主体',
            width: 150,
            dataIndex: 'responsibility',
            render: this.renderContent
        }
    ];

    //========================三重一大===========================//


    getobjectM = (objectMS = []) => {

        let objectView = [];
        objectMS.map(function (objects, index) {
            objectView.push(<span key={index}>{objects}</span>);
            (index !== objectMS.length - 1) ? objectView.push(<br key={index + 10}/>) : "";
        });
        return <span className='obj_ms'>{objectView}</span>
    };
    //========================数据区===========================//
    readyIssue_data = (expand) => [{
        key: '1',
        steupName: '议题研究',
        objectM: this.getobjectM(['主责部门负责人', '公司分管领导']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '议题所依据的事实不清楚、数据不真实，存在明显倾向性；'
                }, {
                    star: 1,
                    span: '未对议题组织充分研究讨论。'
                }
            ], 1, expand),
        measures:
            this.getMeasures(["主责部门做好前期调查和研究工作，列明所依据的事实、数据来源并说明选取依据。"
                , "分管领导指导相关业务事项，组织相关部门充分研究论证。"], expand),
        responsibility: '主责部门'
    }, {
        key: '2',
        steupName: '征求意见',
        objectM: this.getobjectM(['主责部门负责人', '公司分管领导']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '议题应履行而未履行征求意见程序（如选人用人征求纪检部门意见）；'
                }, {
                    star: 2,
                    span: '相关部门不认真履职，所提意见明显具有倾向性，或未提出负责任意见。'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["未按规定程序征求意见的议题应暂缓决策"
                , "相关部门负责人不认真履职造成决策不当的，追究相关人员责任。"], expand),
        responsibility: '主责部门'
    }];

    reptIssue_data = (expand) => [{
        key: '1',
        steupName: '请示签报',
        objectM: this.getobjectM(['主责部门负责人', '相关工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '不请示报告重要业务事项，或不如实请示报告。'
                }], 2, expand),
        measures:
            this.getMeasures(["健全规章制度，明确请示报告事项，未请示报告事项不得办理；"
                , "报告请示相关工作时，拟稿人和审核人不得为同一人。"], expand),
        responsibility: '主责部门'
    }];

    ourIssue_data = (expand) => [{
        key: '1',
        steupName: '议题讨论',
        objectM: this.getobjectM(['公司领导']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '参会人员未到达规定人数，仍然召开会议；'
                }, {
                    star: 2,
                    span: '“三重一大”事项未提交公司总经理办公会/党委会研究决定；'
                }, {
                    star: 2,
                    span: '主要领导（或会议召集人）先行发表倾向性意见，导致其他与会人员跟随主要领导，不能或不愿发表真实意见，集体决策流于形式；'
                }, {
                    star: 2,
                    span: '未执行回避制度，影响决策成效。'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["严格执行决策制度，未达到与会规定人数，会议应推迟召开；"
                , "涉及“三重一大”事项必须经公司总经理办公会/党委会研究决定；"
                , "主要领导（或会议召集人）原则上应末位发表意见；"
                , "公司纪委（或监察审计部）负责人出席或列席会议进行监督，对应回避未回避情况及时提醒。"], expand),
        responsibility: '公司领导班子'
    }, {
        key: '2',
        steupName: '会议决定',
        objectM: this.getobjectM(['会议召集人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '不认真考虑与会人员不同意见，存在“一言堂”情况；'
                }, {
                    star: 2,
                    span: '未根据讨论决策情况正确做出会议决定。'
                }], 2, expand),
        measures:
            this.getMeasures(["落实民主集中制，会议表决实行一人一票，少数服从多数，对分歧明显，且人数接近的事项应暂缓做出决策；"
                , "落实“三重一大”决策制度监督检查制度，对会议决策不规范的情况，公司纪委有权向会议召集人提出意见和建议。"], expand),
        responsibility: '会议召集人'
    }];


    doIssue_data = (expand) => [{
        key: '1',
        steupName: '会议记录',
        objectM: this.getobjectM(['会议记录人']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '会议记录不完整，不能真实反映参会人员表态性发言或不能体现追溯性。'
                }], 1, expand),
        measures:
            this.getMeasures(["会议记录须经参会人员确认或留存会议录音"], expand),
        responsibility: <span>综合管理部<br/>党委办公室</span>
    }, {
        key: '2',
        steupName: '会议文件签发',
        objectM: this.getobjectM(['会议召集人']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '未严格按照会议情况起草会议纪要，擅自更改决策内容。'
                }], 1, expand),
        measures:
            this.getMeasures(["严格执行会议纪要审核批准制度。"], expand),
        responsibility: <span>综合管理部<br/>党委办公室</span>
    }, {
        key: '3',
        steupName: '执行会议决定',
        objectM: this.getobjectM(['各部门直属分公司']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '各部门不执行或者选择性执行会议决定。'
                }], 2, expand),
        measures:
            this.getMeasures(["建立督查督导工作机制，及时跟踪会议决定落实情况；"
                , "发现不执行或者选择性执行会议决定依据有关规定进行问责。"], expand),
        responsibility: <span>综合管理部<br/>党委办公室</span>
    }];

    //========================数据区===========================//


    //议题准备 数据适配
    readyIssue = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.readyIssue_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        };
    };

    //请示报告 数据适配
    reptIssue = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.reptIssue_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        };
    };

    //集体决策 数据适配
    ourIssue = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.ourIssue_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        };

    };

    //落实执行 数据适配
    doIssue = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.doIssue_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        };

    };
    //========================三重一大===========================//

    //========================综合事务管理===========================//
    //========================数据区=========//

    seal_manger_made_data = (expand) => [{
        key: '1',
        steupName: '刻制申请',
        objectM: this.getobjectM(['公司领导', '刻印申请部门', '综合管理部负责人及经办人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '印章刻制，未经过严格的审核及审批，各部门擅自刻制印章。'
                }
                , {
                    star: 2,
                    span: '造成的不良后果及法律纠纷。'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["严格执行国家公章管理制度和公司印章管理规定；"
                , "相关部门如需刻制印章，由部门提出印章刻制申请，填写刻制印章（业务专用章）申请表;"
                , "经印章刻制申请部门和综合管理部负责人审核，报公司主要领导审批。"
            ], expand),
        responsibility: '综合管理部'
    }];

    seal_manger_use_data = (expand) => [{
        key: '1',
        steupName: '用印审批',
        objectM: this.getobjectM(['公司领导', '印章保管部门负责人及保管人', '用印部门负责人及经办人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '印章使用未经严格审批，印章使用不登记、擅自使用印章。'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["申请用印需填写用印审批单，用印部门负责人审核，使用公司印章需公司领导审批；"
                , "印章保管人见审批单后方可用印，并做好用印登记；"
                , "公司印章原则上不得外出携带，特殊情况确需带出，须经主要领导审批同意，并有2人共同携带。"
            ], expand),
        responsibility: '印章保管部门'
    }];

    seal_manger_des_data = (expand) => [{
        key: '1',
        steupName: '销印审批',
        objectM: this.getobjectM(['公司领导', '综合管理部负责人及经办人', '印章保管部门负责人及保管人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '印章销毁审批不规范，导致应销毁印章未销毁，仍在使用。'
                }
            ], 2, expand),

        measures:
            this.getMeasures(["严格执行国家公章管理制度和公司印章管理规定"
                , "发生机构名称变更、机构撤销或合并等事项，需要废止或报废印章时，印章保管部门需先将印章上交综合管理部；"
                , "综合管理部将印章登记留模，经公司领导审批后统一销毁印章，销毁印章需至少2人在现场，销毁印章后及时登记。"
            ], expand),
        responsibility: '综合管理部'
    }];

    car_equipment_manger_data = (expand) => [{
        key: '1',
        steupName: '车辆配备',
        objectM: this.getobjectM(['公司领导', '综合管理部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '超标准配车'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["车辆配备严格执行国家有关规定，新车购置或租赁按规定报批或报备"
            ], expand),
        responsibility: '综合管理部'
    }];


    car_dispatch_manger_data = (expand) => [{
        key: '1',
        steupName: '车辆调度',
        objectM: this.getobjectM(['公司领导', '综合管理部、用车部门负责人及有关人员', '车辆驾驶员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '未经批准用车'
                },
                {
                    star: 2,
                    span: '公车私用'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["各部门因接待需要用车，需向综合管理部申请并填写派车单，经批准后方可用车；车辆出京需公司主要领导审批；"
                , "公务用车除执行公务外，需按规定停放停车场；"
                , "不定期开展专项检查，发现问题依规严肃处理。"
            ], expand),
        responsibility: '综合管理部'
    }];

    car_repair_manger_data = (expand) => [{
        key: '1',
        steupName: '维修保养',
        objectM: this.getobjectM(['车辆驾驶员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '不按规定进行车辆维修、保养，随意增加维修、保养项目'
                },
                {
                    star: 2,
                    span: '在费用报销过程中弄虚作假、虚报冒领'
                }
            ], 2, expand),

        measures:
            this.getMeasures(["严格按照申请单内容完成维修保养任务，如在过程中需要增加额外维修项目，必须经综合管理部同意，方可执行；"
                , "车辆必须在定点厂家维修保养；"
                , "维修保养费用由公司直接与厂家结算。"
            ], expand),
        responsibility: '综合管理部'
    }];

    car_charge_manger_data = (expand) => [{
        key: '1',
        steupName: '车辆加油',
        objectM: this.getobjectM(['车辆驾驶员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '使用公务用车加油卡给其他车辆加油。'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["公务用车加油卡实行一车一卡，专卡专用"
            ], expand),
        responsibility: '综合管理部'
    }];


    reception_manger_data = (expand) => [{
        key: '1',
        steupName: '公务接待申请',
        objectM: this.getobjectM(['接待部门负责人及相关人员', '综合管理部负责人', '公司领导']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '未经审批安排公务接待活动。'
                },
                {
                    star: 2,
                    span: '公款吃喝'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["严格执行公司《公务接待管理暂行办法》，公务接待前填写接待审批单，注明接待对象、人数，陪同人数及领导，经公司领导审批后方可接待；"
                , "严格公务接待费用报销程序，未经审批的公务接待活动费用，超范围、超标准公务接待费用，财务部一律不予报销；"
                , "不定期开展专项检查，发现问题依规严肃处理。"
            ], expand),
        responsibility: '综合管理部'
    }, {
        key: '2',
        steupName: '安排接待',
        objectM: this.getobjectM(['接待部门负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '超范围、超标准公务接待。'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["严格执行公司《公务接待管理暂行办法》，公务接待前填写接待审批单，注明接待对象、人数，陪同人数及领导，经公司领导审批后方可接待；"
                , "严格公务接待费用报销程序，未经审批的公务接待活动费用，超范围、超标准公务接待费用，财务部一律不予报销；"
                , "不定期开展专项检查，发现问题依规严肃处理。"
            ], expand),
        responsibility: '综合管理部'
    }, {
        key: '3',
        steupName: '接待费报销',
        objectM: this.getobjectM(['接待部门负责人及经办人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '在费用报销过程中弄虚作假、虚报冒领'
                }
                , {
                    star: 2,
                    span: '超范围、超标准公务接待'
                }
            ], 2, expand),

        measures:
            this.getMeasures(["严格执行公司《公务接待管理暂行办法》，公务接待前填写接待审批单，注明接待对象、人数，陪同人数及领导，经公司领导审批后方可接待；"
                , "严格公务接待费用报销程序，未经审批的公务接待活动费用，超范围、超标准公务接待费用，财务部一律不予报销；"
                , "不定期开展专项检查，发现问题依规严肃处理。"
            ], expand),
        responsibility: '财务部'
    }];


    private_manger_data = (expand) => [{
        key: '1',
        steupName: '领导审批',
        objectM: this.getobjectM(['申请人部门', '综合管理部', '监察审计部负责人', '公司领导']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '未经审批自行出国（境）'
                }
                , {
                    star: 2,
                    span: '审核把关不严，造成不适宜人员出国（境）'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["严格执行公司《工作人员因私出国（境）管理暂行办法》，重点岗位人员因私出国（境）证件交综合管理部统一保管；"
                , "申请人部门审核出国事由是否真实，综合管理部审核是否按规定提交申请并请假、监察审计部审核是否存在不宜出国的情形。"
            ], expand),
        responsibility: '综合管理部'
    }, {
        key: '2',
        steupName: '交还证件',
        objectM: this.getobjectM(['申请人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '不及时交还证件'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["回国（入境）后综合管理部及时催缴证件"
            ], expand),

        responsibility: '综合管理部'
    }];

    public_manger_data = (expand) => [{
        key: '1',
        steupName: '立项申请',
        objectM: this.getobjectM(['申请人部门', '综合管理部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '安排与工作结合不紧密、作为福利待遇性质的出国（境）活动'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["出国（境）活动立项申请时，需列明活动必要性、主要目的和参加人员情况，并按流程报公司领导审批"
            ], expand),
        responsibility: '综合管理部'
    }, {
        key: '2',
        steupName: '国（境）外公务活动',
        objectM: this.getobjectM(['团组组长及成员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '团组成员未经团组组长同意单独活动；擅自变更出访路线或延长在国（境）外的期限'
            }
            , {
                star: 2,
                span: '未及时公示出国团组费用'
            }
            , {
                star: 2,
                span: '超标准乘坐交通工具'
            }
            , {
                star: 2,
                span: '从事与出国任务无关的活动'
            }
        ], 2, expand),
        measures:
            this.getMeasures(["严格落实国家加强党员干部出国(境)管理要求，加强对团组成员的教育"
                , "制定出国（境）公务活动方案，严格按照方案规定的路线、活动和时间开展公务"
                , "回国（入境）后及时提交工作报告"
                , "团组费用未经公示，不得报销"
                , "发生违规违纪问题，追究相关人员责任"
            ], expand),
        responsibility: '综合管理部'
    }, {
        key: '3',
        steupName: '交还证件',
        objectM: this.getobjectM(['团组成员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '不及时交还证件'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["回国（入境）后综合管理部及时催缴证件"
            ], expand),
        responsibility: '综合管理部'
    }];

    //========================数据区=========//
    //印章管理
    seal_made_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.seal_manger_made_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        };
    };

    seal_use_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.seal_manger_use_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    seal_des_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.seal_manger_des_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        };
    };

    //车辆管理
    car_equipment_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.car_equipment_manger_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    car_dispatch_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.car_dispatch_manger_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    car_repair_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.car_repair_manger_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    car_charge_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.car_charge_manger_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    //公务接待
    reception_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.reception_manger_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    //出入境管理
    private_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.private_manger_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    public_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.public_manger_data(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };
    //========================综合事务管理===========================//


    //TODO update by hx
    //========================人力资源管理===========================//


    //========================人力资源管理===========================//

    hrm_motion = (expand) => [{
        //动议
        key: '1',
        steupName: '制定工作方案',
        objectM: this.getobjectM(['公司领导班子成员', '人力资源部负责人', '及相关人员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '工作方案中的职位、条件、范围、方式、程序不符合规定；'
            }
            , {
                star: 3,
                span: '授意工作人员制定不符合规定的工作方案；'
            }
            , {
                star: 2,
                span: '违反机构编制和领导职数规定，超职数配备干部。'
            }
        ], 3, expand),
        measures: this.getMeasures(["工作方案由人力资源部集体研究，人力资源部负责人审核把关；"
            , "工作方案列明现有领导职数，对用于选拔任用的岗位是否存在超职数问题进行说明；"
            , "工作方案需经公司总经理办公会研究，并报公司党委会审议通过。"
        ], expand),
        responsibility: '公司领导班子，人力资源部'
    }];

    motion_cadre_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_motion(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };

    hrm_democracy_recommendation = (expand) => [{
        //民主推荐
        key: '1',
        steupName: '会议推荐',
        objectM: this.getobjectM(['公司领导班子成员', '人力资源部负责人', '及相关人员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '通过请客、送礼等手段，向有关人员说情、拉票；'
            }
            , {
                star: 2,
                span: '有关人员跑风漏气，干扰会议推荐工作。'
            }
        ], 2, expand),
        measures: this.getMeasures(["加强组织纪律教育，要求公司全员自觉抵制拉票行为，自觉防止跑风漏气行为；"
            , "做好会议推荐的组织工作，为参会人员真实表达推荐意向创造条件；"
            , "发现相关问题或收到举报及时处理、严肃追责。"
        ], expand),
        responsibility: '公司领导班子、人力资源部'
    }, {
        key: '2',
        steupName: '个别谈话推荐',
        objectM: this.getobjectM(['谈话人和被谈话人']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不按照规定进行谈话或不如实记录推荐情况；'
            }
            , {
                star: 1,
                span: '谈话对象故意提供虚假信息；'
            }, {
                star: 1,
                span: '谈话人事后泄露谈话内容。'
            }
        ], 1, expand),
        measures: this.getMeasures(["谈话人须两人以上，谈话记录需谈话人签字确认；"
            , "谈话人向被谈话人说明纪律，要求如实反映情况；"
            , "加强谈话人纪律教育，发现相关问题或收到举报严肃追责。"
        ], expand),
        responsibility: '公司领导班子、人力资源部'
    }, {
        key: '3',
        steupName: '推荐情况汇总',
        objectM: this.getobjectM(['人力资源部负责人', '考察组成员']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不如实汇总推荐情况。'
            }
        ], 1, expand),
        measures: this.getMeasures(["汇总推荐结果必须两人以上，并在推荐结果上签字确认；"
            , "民主推荐票和谈话记录一定时间内存档备查。"
        ], expand),
        responsibility: '公司领导班子、人力资源部'
    }, {
        key: '4',
        steupName: '确定考察对象',
        objectM: this.getobjectM(['人力资源部负责人', '及相关人员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '不把民主推荐结果作为确定考察对象依据或简单以票取人。'
            }
        ], 2, expand),
        measures: this.getMeasures(["民主推荐情况要及时向公司领导班子报告，人力资源部应结合日常工作表现和人岗适配情况，集体研究确定考察对象"
            , "得票过少的，不得列入考察对象。"
        ], expand),
        responsibility: '人力资源部'
    }];

    selectCade_cadre_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_democracy_recommendation(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };

    hrm_inspect = (expand) => [{
        //考察
        key: '1',
        steupName: '制定考察方案',
        objectM: this.getobjectM(['人力资源部负责人', '及相关人员']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不按规定组建考察组；'
            }
            , {
                star: 1,
                span: '制定的考察方案不符合规定。'
            }
        ], 2, expand),
        measures: this.getMeasures(["考察组由两人以上组成，成员应当具有较高素质和相应资格，考察组负责人应熟悉干部人事工作；"
            , "考察组成员与考察对象实行回避制度；"
            , "考察方案须经人力资源部负责人审核。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '2',
        steupName: '发布考察预告',
        objectM: this.getobjectM(['考察组成员']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不按规定发布干部考察预告。'
            }
        ], 1, expand),
        measures: this.getMeasures(["通过适当方式在一定范围内发布考察预告，不发布预告，不得进行考察。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '3',
        steupName: '实施考察',
        objectM: this.getobjectM(['考察组成员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '不按规定程序和范围进行考察，隐瞒、歪曲、泄露考察情况；'
            },
            {
                star: 2,
                span: '对线索清楚、内容具体的举报不进行核实或不如实报告；'
            },
            {
                star: 2,
                span: '不认真审核干部档案，导致干部信息不准确；'
            },
            {
                star: 2,
                span: '存在接受礼品礼金、参加消费活动等可能影响公正考察的行为。'
            }
        ], 2, expand),
        measures: this.getMeasures(["考察组完成工作后要报告情况，须说明考察执行的程序、范围，考察有关材料需考察组参与人（两人以上）签字确认，确保真实反映考察情况；"
            , "考察组需报告举报情况和处置情况；"
            , "审核干部档案情况考察组需一并报告；"
            , "加强考察组纪律教育，发现可能影响公正考察的行为追究相关人员责任。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '4',
        steupName: '党风廉政意见回复',
        objectM: this.getobjectM(['监察审计部负责人']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '不按规定征求纪检监察部门对拟任人选的意见；'
            },
            {
                star: 2,
                span: '纪检监察部门不如实回复廉政鉴定意见；'
            },
            {
                star: 2,
                span: '对反映拟任人选问题性质严重、线索清楚、内容具体的举报不进行调查核实。'
            }
        ], 2, expand),
        measures: this.getMeasures(["严格执行廉政鉴定有关规定，未征求廉政鉴定意见的，不得提交公司领导班子会讨论决定；"
            , "纪检监察部门需如实回复廉政鉴定意见；"
            , "相关举报按照公司纪委信访举报管理办法处理；"
        ], expand),
        responsibility: '监察审计部'
    }, {
        key: '5',
        steupName: '提出任用建议',
        objectM: this.getobjectM(['考察组成员', '人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不认真分析报告考察情况；'
            },
            {
                star: 1,
                span: '未按规定集体研究任用建议方案；'
            },
            {
                star: 1,
                span: '未按规定向公司主要负责人报告任用建议'
            }
        ], 2, expand),
        measures: this.getMeasures(["考察报告须经考察组集体讨论，并由全体成员签字确认；"
            , "人力资源部集体研究任用建议方案；"
            , "人力资源部应及时向公司主要负责人报告任用建议。"
        ], expand),
        responsibility: '人力资源部'
    }];

    hrm_inspect_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_inspect(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    hrm_discussion_and_decision = (expand) => [{
        //讨论决定
        key: '1',
        steupName: '介绍拟任人选情况',
        objectM: this.getobjectM(['公司领导班子成员', '人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不按要求逐个介绍考察对象情况，故意隐瞒考察情况；'
            }
            , {
                star: 2,
                span: '不如实向公司领导班子汇报拟报人选的提名、推荐、考察和任免理由等情况；'
            }
            , {
                star: 2,
                span: '不如实向公司领导班子提供纪检监察部门的廉政鉴定意见。'
            }
        ], 2, expand),
        measures: this.getMeasures(["必须逐个如实向公司领导班子介绍考察对象提名、推荐、考察和廉政鉴定情况；"
            , "保证与会人员有足够时间听取情况介绍，充分了解情况；"
            , "介绍考察对象情况的材料应留存备查。"
        ], expand),
        responsibility: '公司领导班子'
    }, {
        key: '2',
        steupName: '会议讨论',
        objectM: this.getobjectM(['公司领导班子成员']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不按规定进行充分讨论。'
            }, {
                star: 2,
                span: '临时动议干部任用事项。'
            }
        ], 1, expand),
        measures: this.getMeasures(["与会公司领导班子成员应发表同意、不同意、缓议等明确意见；"
            , "干部任免事项在会前应与分管领导沟通，避免临时动议。"
        ], expand),
        responsibility: '公司领导班子'
    }, {
        key: '3',
        steupName: '集体表决形成决定',
        objectM: this.getobjectM(['公司领导班子成员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '参会人员未到达规定人数，仍然召开会议；'
            },
            {
                star: 2,
                span: '“三重一大”事项未提交公司总经理办公会/党委会研究决定；'
            },
            {
                star: 2,
                span: '主要领导（或会议召集人）先行发表倾向性意见，导致其他与会人员跟随主要领导，不能或不愿发表真实意见，集体决策流于形式；'
            },
            {
                star: 2,
                span: '未执行回避制度，影响决策成效。'
            }
        ], 2, expand),
        measures: this.getMeasures(["严格执行决策制度，未达到与会规定人数，会议应推迟召开；"
            , "涉及“三重一大”事项必须经公司总经理办公会/党委会研究决定；"
            , "主要领导（或会议召集人）原则上应末位发表意见；"
            , "公司纪委（或监察审计部）负责人出席或列席会议进行监督，对应回避未回避情况及时提醒。"
        ], expand),
        responsibility: '公司领导班子'
    }, {
        key: '4',
        steupName: '报备',
        objectM: this.getobjectM(['人力资源部']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '未按规定履行报备手续；'
            },
        ], 2, expand),
        measures: this.getMeasures(["公布备案岗位范围，严格执行规章制度"
        ], expand),
        responsibility: '人力资源部'
    }];

    hrm_discussion_and_decision_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_discussion_and_decision(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    hrm_in_office = (expand) => [{
        //任职
        key: '1',
        steupName: '任前公示',
        objectM: this.getobjectM(['人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不按规定时间、范围和方式进行公示。'
            }
        ], 1, expand),
        measures: this.getMeasures(["严格执行公示制度，按照规定范围、方式进行公示。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '2',
        steupName: '反映问题调查处理',
        objectM: this.getobjectM(['人力资源部', '监察审计部负责人']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '对相关举报未按规定及时进行调查处理。'
            }
        ], 2, expand),
        measures: this.getMeasures(["及时受理来信来访，相关举报严格按照公司纪委信访举报管理办法处理。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '3',
        steupName: '试用期满考核',
        objectM: this.getobjectM(['人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '不按规定实行试用期制度；'
            },
            {
                star: 1,
                span: '不按规定程序和要求进行试用期满考核。'
            }
        ], 1, expand),
        measures: this.getMeasures(["凡提拔或进一步使用担任领导职务的，均实行试用期；"
            , "不经试用期满考核或考核不合格的，不办理正式任职手续。"
        ], expand),
        responsibility: '人力资源部'
    }];

    hrm_in_office_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_in_office(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    hrm_recruitment = (expand) => [{
        //人才招聘
        key: '1',
        steupName: '编制招聘计划和方案',
        objectM: this.getobjectM(['人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '超编制拟定招聘计划；'
            },
            {
                star: 1,
                span: '设置不合理的岗位资格条件，因人画像。'
            }
        ], 1, expand),
        measures: this.getMeasures(["严格执行组织人事纪律，招聘计划需说明编制空缺情况，严禁超编制拟定招聘计划；",
            "招聘计划由人力资源部负责编制，并报公司领导集体研究。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '2',
        steupName: '资格审查',
        objectM: this.getobjectM(['人力资源部相关人员']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '资格审查过程中，随意变更报名资格条件，使得不符合报名资格的人员通过。'
            }
        ], 1, expand),
        measures: this.getMeasures(["严格按照招聘公告的资格条件进行审查，资格审查结果报人力资源部负责人审核，相关材料需存档备查。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '3',
        steupName: '组织考试（笔试、面试）',
        objectM: this.getobjectM(['组织考试相关工作人员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '泄露试题信息；'
            },
            {
                star: 2,
                span: '不真实记录笔试/面试成绩；'
            },
            {
                star: 2,
                span: '面试官受人请托，不公正打分；'
            },
            {
                star: 2,
                span: '设定不合理的录用分数线。'
            }
        ], 2, expand),
        measures: this.getMeasures(["严格招聘工作纪律，加强对考务人员工作纪律宣传教育，特别是保密纪律，发现相关问题严肃追责；"
            , "记录笔试/面试成绩采取2人以上记录或二级审核机制，录用分数线的确定需经人力资源部审核，考录试卷、计分表等须存档备查。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '4',
        steupName: '考察',
        objectM: this.getobjectM(['考察组成员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '考察程序不规范、不如实反映考察情况；'
            },
            {
                star: 2,
                span: '考察人接受请托，徇私舞弊。'
            }
        ], 2, expand),
        measures: this.getMeasures(["制定统一的考察工作方案，明确考察程序、要求，并严格执行；"
            , "考察组由两人以上组成，考察材料应由考察组全体成员签字确认；"
            , "考察组成员与考察对象实行回避制度，考察前，加强对考察组成员的纪律教育，发现问题严肃问责。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '5',
        steupName: '确定拟聘人选',
        objectM: this.getobjectM(['人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '不按规定确定拟录用人员。'
            }
        ], 2, expand),
        measures: this.getMeasures(["人力资源部综合考试、考察和体检情况，集体研究提出拟录用人选建议；"
            , "确定拟聘人选需报公司领导班子集体决策。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '6',
        steupName: '公示',
        objectM: this.getobjectM(['人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '不按规定公示拟聘人选。'
            }
        ], 2, expand),
        measures: this.getMeasures(["未经公示不得签订聘用合同；"
            , "公示有关情况需存档备查。"
        ], expand),
        responsibility: '人力资源部'
    }];

    hrm_recruitment_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_recruitment(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    hrm_salary_and_welfare = (expand) => [{
        //薪酬福利管理
        key: '1',
        steupName: '薪酬福利调整',
        objectM: this.getobjectM(['人力资源部薪酬福利管理岗']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '薪酬福利调整事由不符合政策规定。'
            }
        ], 1, expand),
        measures: this.getMeasures(["实行薪酬福利核定三级审批制度，包括经办人、审核人、审定人；"
            , "加强信息系统建设，逐步实现薪酬福利管理信息化，减少人为因素干扰；"
            , "薪酬福利调整信息应通过适当方式通知本人；"
            , "财务部和人力资源部将薪酬福利单据留存备查。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '2',
        steupName: '薪酬福利标准的核算和审定',
        objectM: this.getobjectM(['人力资源部薪酬福利管理岗']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '相关人员人为干涉薪酬福利核算结果；'
            }, {
                star: 1,
                span: '薪酬福利管理岗未严格按照政策规定核定薪酬福利。'
            }
        ], 2, expand),
        measures: this.getMeasures(["实行薪酬福利核定三级审批制度，包括经办人、审核人、审定人；"
            , "加强信息系统建设，逐步实现薪酬福利管理信息化，减少人为因素干扰；"
            , "薪酬福利调整信息应通过适当方式通知本人；"
            , "财务部和人力资源部将薪酬福利单据留存备查。"
        ], expand),
        responsibility: '人力资源部'
    }];

    hrm_salary_and_welfare_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_salary_and_welfare(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };

    hrm_other = (expand) => [{
        //其他人事管理
        key: '1',
        steupName: '绩效考核管理',
        objectM: this.getobjectM(['公司领导班子成员', '人力资源部', '各部门负责人', '考核对象']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '未制定绩效考核方案，绩效考核工作不公开、公正；'
            }
            , {
                star: 2,
                span: '考核对象通过非正常手段干扰绩效考评人员工作，影响绩效考核的公平公正；'
            }
            , {
                star: 1,
                span: '对绩效考核存在的违规违纪问题严肃问责。'
            }
        ], 2, expand),
        measures: this.getMeasures(["人力资源部负责拟定绩效考核方案，并经公司领导集体决策；"
            , "严格按照绩效考核方案实施考核，绩效考核情况需经公司领导集体研究决定，考核结果在公司内部公示；"
            , "介绍考察对象情况的材料应留存备查。"
        ], expand),
        responsibility: '公司领导班子、人力资源部'
    }, {
        key: '2',
        steupName: '人事档案管理',
        objectM: this.getobjectM(['人事档案管理员']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '利用职务便利，为他人涂改、造假档案材料，圈划、抽取、撤换档案材料提供帮助。'
            }
        ], 2, expand),
        measures: this.getMeasures(["建立健全人事档案管理制度，严格实行档案查（借）阅登记审批制度；"
            , "查（借）阅人员须两人以上，且为查（借）阅单位正式党员干部；"
            , "不得查（借）阅本人及其直系亲属档案。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '3',
        steupName: '职称申报管理',
        objectM: this.getobjectM(['人力资源部负责人', '职称管理人员']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '接受他人请托，让不符合申报条件人员通过职称申报资格审核。'
            }
        ], 2, expand),
        measures: this.getMeasures(["严格资格审核程序，职称申报资格审核结果由人力资源部有关人员签字确认；"
            , "对违规违纪问题及时查处并通报曝光。"
        ], expand),
        responsibility: '人力资源部'
    }, {
        key: '4',
        steupName: '培训管理',
        objectM: this.getobjectM(['公司领导班子成员', '人力资源部负责人']),
        f_level: this.getFLevel([
            {
                star: 1,
                span: '违规批准领导干部参加高收费社会化培训项目。'
            }
        ], 2, expand),
        measures: this.getMeasures(["认真落实中组发〔2014〕18号文件要求，严禁领导干部参加“天价培训”、“奢侈培训”等高收费社会化培训；"
            , "对违规违纪问题及时查处并通报曝光。"
        ], expand),
        responsibility: '公司领导班子、人力资源部'
    }];

    hrm_other_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.hrm_other(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    //========================人力资源管理===========================//

    //========================财务管理===========================//
    finance_budget_expenditure_management = (expand) => [{
        //预算支出管理
        key: '1',
        steupName: '费用支出申请',
        objectM: this.getobjectM(['公司领导', '财务部、各部门负责人及经办人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '违规使用公款支付应由个人承担的费用；'
            }
            , {
                star: 3,
                span: '违规使用购置办公用品等名义开支经费、虚开发票、用假发票；'
            }
            , {
                star: 3,
                span: '会议费、培训费等支出内容不真实，以会议费等名义支出挂账，套取、转移资金；'
            }, {
                star: 3,
                span: '虚报开支差旅、劳务、咨询、公务接待、车辆维护运行等费用。'
            }
        ], 3, expand),
        measures: this.getMeasures(["严格预算管理，各部门费用支出需在预算范围内开支，原则上不得超预算和无预算开支，特殊情况须经公司领导审批；"
            , "办公用品购置需附明细清单；"
            , "各部门经办人报销前须验明发票真伪；"
            , "建立健全会议费、培训费、差旅费、劳务费、咨询费、三公经费等相关管理制度，加强费用管理；"
            , "财务部应按照相关制度严格审核报销、付款单据；"
            , "适时开展专项检查，发现问题严肃追责。"
        ], expand),
        responsibility: '财务部'
    }, {
        key: '2',
        steupName: '费用报销',
        objectM: this.getobjectM(['公司领导', '财务部、各部门负责人及经办人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '违规使用公款支付应由个人承担的费用；'
            }
            , {
                star: 3,
                span: '违规使用购置办公用品等名义开支经费、虚开发票、用假发票；'
            }
            , {
                star: 3,
                span: '会议费、培训费等支出内容不真实，以会议费等名义支出挂账，套取、转移资金；'
            }
            , {
                star: 3,
                span: '虚报开支差旅、劳务、咨询、公务接待、车辆维护运行等费用。'
            }
        ], 3, expand),
        measures: this.getMeasures(["严格预算管理，各部门费用支出需在预算范围内开支，原则上不得超预算和无预算开支，特殊情况须经公司领导审批；"
            , "办公用品购置需附明细清单；"
            , "各部门经办人报销前须验明发票真伪；"
            , "建立健全会议费、培训费、差旅费、劳务费、咨询费、三公经费等相关管理制度，加强费用管理；"
            , "财务部应按照相关制度严格审核报销、付款单据；"
            , "适时开展专项检查，发现问题严肃追责。"
        ], expand),
        responsibility: '财务部'
    }];

    finance_budget_expenditure_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.finance_budget_expenditure_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    finance_cash_management = (expand) => [{
        //现金管理
        key: '1',
        steupName: '现金取得',
        objectM: this.getobjectM(['财务部有关工作人员']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '截留现金收入，取得现金收入不入账。'
            }
            , {
                star: 3,
                span: '白条抵库、坐支现金；'
            }
            , {
                star: 3,
                span: '公款私存。'
            }, {
                star: 3,
                span: '大额提取现金，大额现金支付。'
            }
        ], 3, expand),
        measures: this.getMeasures(["现金的交付均需办理正规手续；"
            , "定期或不定期开展现金监督盘点；"
            , "对关键岗位的财务人员实行换岗、轮岗制度；"
            , "严格执行现金开支规定。"
        ], expand),
        responsibility: '财务部'
    }, {
        key: '2',
        steupName: '现金保管',
        objectM: this.getobjectM(['财务部有关工作人员']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '截留现金收入，取得现金收入不入账。'
            }
            , {
                star: 3,
                span: '白条抵库、坐支现金；'
            }
            , {
                star: 3,
                span: '公款私存。'
            }, {
                star: 3,
                span: '大额提取现金，大额现金支付。'
            }
        ], 3, expand),
        measures: this.getMeasures(["现金的交付均需办理正规手续；"
            , "定期或不定期开展现金监督盘点；"
            , "对关键岗位的财务人员实行换岗、轮岗制度；"
            , "严格执行现金开支规定。"
        ], expand),
        responsibility: '财务部'
    }, {
        key: '3',
        steupName: '现金支出',
        objectM: this.getobjectM(['财务部有关工作人员']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '截留现金收入，取得现金收入不入账。'
            }
            , {
                star: 3,
                span: '白条抵库、坐支现金；'
            }
            , {
                star: 3,
                span: '公款私存。'
            }, {
                star: 3,
                span: '大额提取现金，大额现金支付。'
            }
        ], 3, expand),
        measures: this.getMeasures(["现金的交付均需办理正规手续；"
            , "定期或不定期开展现金监督盘点；"
            , "对关键岗位的财务人员实行换岗、轮岗制度；"
            , "严格执行现金开支规定。"
        ], expand),
        responsibility: '财务部'
    }];

    finance_cash_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.finance_cash_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    finance_bank_account_management = (expand) => [{
        //银行账户管理
        key: '1',
        steupName: '开立银行账户',
        objectM: this.getobjectM(['财务部负责人及相关人员']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '未报审批擅自开立账户，规避监管，为谋取私利制造机会；'
            }
            , {
                star: 3,
                span: '基于个人或小团体利益，在亲属或者特定关系人所在银行开立账户并存款；'
            }
            , {
                star: 2,
                span: '擅自出借银行账户；'
            }, {
                star: 3,
                span: '贪污、挪用账户资金。'
            }
        ], 3, expand),
        measures: this.getMeasures(["银行账户的开立或注销执行严格审批程序，须经公司主要负责人签批，方可办理；"
            , "定期报告公司存款情况；"
            , "明确财务相关人员岗位，确保办理货币资金业务的岗位不相容， 账户资金管理员不得编制资金收付会计凭证、不得管理银行账户对账单和编制银行存款余额调节表；空白支付凭证与预留银行印鉴分人保管；"
            , "对违规违纪问题实行责任追究，加大惩处力度。"
        ], expand),
        responsibility: '财务部'
    }, {
        key: '2',
        steupName: '办理结算业务',
        objectM: this.getobjectM(['财务部负责人及相关人员']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '未报审批擅自开立账户，规避监管，为谋取私利制造机会；'
            }
            , {
                star: 3,
                span: '基于个人或小团体利益，在亲属或者特定关系人所在银行开立账户并存款；'
            }
            , {
                star: 2,
                span: '擅自出借银行账户；'
            }, {
                star: 3,
                span: '贪污、挪用账户资金。'
            }
        ], 3, expand),
        measures: this.getMeasures(["银行账户的开立或注销执行严格审批程序，须经公司主要负责人签批，方可办理；"
            , "定期报告公司存款情况；"
            , "明确财务相关人员岗位，确保办理货币资金业务的岗位不相容， 账户资金管理员不得编制资金收付会计凭证、不得管理银行账户对账单和编制银行存款余额调节表；空白支付凭证与预留银行印鉴分人保管；"
            , "对违规违纪问题实行责任追究，加大惩处力度。"
        ], expand),
        responsibility: '财务部'
    }, {
        key: '3',
        steupName: '账户日常管理',
        objectM: this.getobjectM(['财务部负责人及相关人员']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '未报审批擅自开立账户，规避监管，为谋取私利制造机会；'
            }
            , {
                star: 3,
                span: '基于个人或小团体利益，在亲属或者特定关系人所在银行开立账户并存款；'
            }
            , {
                star: 2,
                span: '擅自出借银行账户；'
            }, {
                star: 3,
                span: '贪污、挪用账户资金。'
            }
        ], 3, expand),
        measures: this.getMeasures(["银行账户的开立或注销执行严格审批程序，须经公司主要负责人签批，方可办理；"
            , "定期报告公司存款情况；"
            , "明确财务相关人员岗位，确保办理货币资金业务的岗位不相容， 账户资金管理员不得编制资金收付会计凭证、不得管理银行账户对账单和编制银行存款余额调节表；空白支付凭证与预留银行印鉴分人保管；"
            , "对违规违纪问题实行责任追究，加大惩处力度。"
        ], expand),
        responsibility: '财务部'
    }];

    finance_bank_account_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.finance_bank_account_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    finance_bill_management = (expand) => [{
        //票据管理
        key: '1',
        steupName: '票据使用',
        objectM: this.getobjectM(['财务部、票据使用部门负责人及经办人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '伪造、变造票据、套取资金，出借转让票据；'
            }
        ], 3, expand),
        measures: this.getMeasures(["建立健全公司票据管理制度，严格执行票据使用规定，各部门明确专人负责票据申领，票据使用应做好记录；"
            , "严格执行票据销毁有关规定，票据销毁必须交回财务部，统一销毁，各部门不得自行销毁，票据销毁应有2人以上同时在场，并做好记录。"
        ], expand),
        responsibility: '财务部'
    }, {
        key: '2',
        steupName: '票据保管和核销',
        objectM: this.getobjectM(['财务部、票据使用部门负责人及经办人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '擅自销毁票据，隐匿收入，逃避监管。'
            }
        ], 3, expand),
        measures: this.getMeasures(["建立健全公司票据管理制度，严格执行票据使用规定，各部门明确专人负责票据申领，票据使用应做好记录；"
            , "严格执行票据销毁有关规定，票据销毁必须交回财务部，统一销毁，各部门不得自行销毁，票据销毁应有2人以上同时在场，并做好记录。"
        ], expand),
        responsibility: '财务部'
    }];

    finance_bill_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.finance_bill_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    finance_debt_right_management = (expand) => [{
        //债权管理
        key: '1',
        steupName: '债权清理',
        objectM: this.getobjectM(['公司领导', '财务部负责人']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '受他人请托，对长期债权不催收，存在坏账损失。'
            }
        ], 2, expand),
        measures: this.getMeasures(["每年定期报告债权清理情况，说明催收进展，制定催收工作计划和工作目标，必要时列入绩效考核指标。"
        ], expand),
        responsibility: '公司领导、财务部'
    }, {
        key: '2',
        steupName: '对外借款',
        objectM: this.getobjectM(['公司领导', '财务部负责人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '违反规定，擅自向外借款。'
            }
        ], 3, expand),
        measures: this.getMeasures(["严格执行国家和上级规定，从严规范对外借款事项，对外借款按照公司“三重一大”事项进行决策。"
        ], expand),
        responsibility: '公司领导、财务部'
    }];

    finance_debt_right_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.finance_debt_right_management(expand),
            bordered: true,
            pagination: false
        }

    };

    finance_debt_management = (expand) => [{
        //债务管理
        key: '1',
        steupName: '银行贷款',
        objectM: this.getobjectM(['公司领导', '财务部负责人']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '为谋取个人或小团体利益，未经集体研究，擅自决定向金融机构贷款。'
            }
        ], 2, expand),
        measures: this.getMeasures(["银行贷款事项按照公司“三重一大”事项进行决策。"
        ], expand),
        responsibility: '公司领导、财务部'
    }, {
        key: '2',
        steupName: '对外担保',
        objectM: this.getobjectM(['公司领导', '财务部负责人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '收受他人利益，违反规定，擅自对外提供担保。'
            }
        ], 3, expand),
        measures: this.getMeasures(["加强内部控制，严格执行对被担保方的资格审查和相关工程合同事项的调查，对外担保事项按照公司“三重一大”事项进行决策。"
        ], expand),
        responsibility: '公司领导、财务部'
    }];

    finance_debt_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.finance_debt_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };


    finance_budget_management_manger = () => {
        return {
            columns: this.comIssue_columns,
            data: [],
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };

    finance_bex_management = (expand) => [{
        //预算支出管理
        key: '1',
        steupName: '费用支出申请',
        objectM: this.getobjectM(['公司领导', '财务部、各部门负责人及经办人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '违规使用公款支付应由个人承担的费用;'
            },
            {
                star: 3,
                span: '违规使用购置办公用品等名义开支经费、虚开发票、用假发票。'
            },
            {
                star: 3,
                span: '会议费、培训费等支出内容不真实，以会议费等名义支出挂账，套取、转移资金；'
            },
            {
                star: 3,
                span: '虚报开支差旅、劳务、咨询、公务接待、车辆维护运行等费用。'
            }
        ], 3, expand),
        measures: this.getMeasures(["严格预算管理，各部门费用支出需在预算范围内开支，原则上不得超预算和无预算开支，特殊情况须经公司领导审批；"
            , "办公用品购置需附明细清单；"
            , "各部门经办人报销前须验明发票真伪；"
            , "建立健全会议费、培训费、差旅费、劳务费、咨询费、三公经费等相关管理制度，加强费用管理；"
            , "财务部应按照相关制度严格审核报销、付款单据；"
            , "适时开展专项检查，发现问题严肃追责。"
        ], expand),
        responsibility: '财务部'
    }, {
        key: '2',
        steupName: '费用报销',
        objectM: this.getobjectM(['公司领导', '财务部、各部门负责人及经办人']),
        f_level: this.getFLevel([
            {
                star: 3,
                span: '违规使用公款支付应由个人承担的费用;'
            },
            {
                star: 3,
                span: '违规使用购置办公用品等名义开支经费、虚开发票、用假发票。'
            },
            {
                star: 3,
                span: '会议费、培训费等支出内容不真实，以会议费等名义支出挂账，套取、转移资金；'
            },
            {
                star: 3,
                span: '虚报开支差旅、劳务、咨询、公务接待、车辆维护运行等费用。'
            }
        ], 3, expand),
        measures: this.getMeasures(["严格预算管理，各部门费用支出需在预算范围内开支，原则上不得超预算和无预算开支，特殊情况须经公司领导审批；"
            , "办公用品购置需附明细清单；"
            , "各部门经办人报销前须验明发票真伪；"
            , "建立健全会议费、培训费、差旅费、劳务费、咨询费、三公经费等相关管理制度，加强费用管理；"
            , "财务部应按照相关制度严格审核报销、付款单据；"
            , "适时开展专项检查，发现问题严肃追责。"
        ], expand),
        responsibility: '财务部'
    }];

    finance_bex_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.finance_bex_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };


    //========================财务管理===========================//


    //========================自有资金投资管理===========================//
    funds_project_collection = (expand) => [{
        //项目征集
        key: '1',
        liuc: "项目征集",
        steupName: '项目酝酿',
        objectM: this.getobjectM(['各部门负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '有倾向性地酝酿或选择项目，将与个人或部门有利益关联的项目列入征集建议；'
                }
                , {
                    star: 2,
                    span: '提出对公司不利的投资建议方案，如投资总额明显偏高；'
                }, {
                    star: 2,
                    span: '未在部门内征求意见。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "项目酝酿和选择建议，应说明项目投资的必要性、可行性，如可能存在利益关联应进行重点说明；",
                "项目征集过程中，各部门应通过适当方式在部门内广泛征求意见；",
                "项目投资建议由各部门集体讨论，关键指标如投资额度等，需列出明细或说明理由。",
            ], expand),
        responsibility: '项目征集部门'
    }, {
        //项目汇总分析
        key: '2',
        liuc: "项目汇总分析",
        steupName: '项目汇总',
        objectM: this.getobjectM(['计划资产部负责人及有关工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '有倾向性的选择项目进行汇总，导致各部门征集的项目未列入公司《年度投资总体费用安排及项目计划》中；'
                }
                , {
                    star: 2,
                    span: '将有利益关联的项目靠前排序，提高项目立项概率。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "《年度投资总体费用安排及项目计划》的拟定由计划资产部相关人员集体研究；",
                "各部门所征集项目未列入计划时，应简要说明原因；",
                "征集项目评估分析和项目排序，应提出明确原则和标准，必要时项目评估分析可邀请专家参与；",
                "计划资产部拟定的《年度投资总体费用安排及项目计划》需报公司领导审阅。",
            ], expand),

        responsibility: '计划资产部'
    }, {
        key: '3',
        liuc: "项目汇总分析",
        steupName: '评估分析',
        objectM: this.getobjectM(['计划资产部负责人及有关工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '有倾向性的选择项目进行汇总，导致各部门征集的项目未列入公司《年度投资总体费用安排及项目计划》中；'
                }
                , {
                    star: 2,
                    span: '将有利益关联的项目靠前排序，提高项目立项概率。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "《年度投资总体费用安排及项目计划》的拟定由计划资产部相关人员集体研究；",
                "各部门所征集项目未列入计划时，应简要说明原因；",
                "征集项目评估分析和项目排序，应提出明确原则和标准，必要时项目评估分析可邀请专家参与；",
                "计划资产部拟定的《年度投资总体费用安排及项目计划》需报公司领导审阅。",
            ], expand),
        responsibility: '计划资产部'
    }, {
        //会议决策
        key: '4',
        liuc: "会议决策",
        steupName: '“三重一大”决策',
        objectM: this.getobjectM(['公司领导']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '有倾向性的选择项目进行汇总，导致各部门征集的项目未列入公司《年度投资总体费用安排及项目计划》中；'
                }
                , {
                    star: 2,
                    span: '将有利益关联的项目靠前排序，提高项目立项概率。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "严格执行决策制度，未达到与会规定人数，会议应推迟召开；",
                "涉及“三重一大”事项必须经公司总经理办公会/党委会研究决定；",
                "主要领导（或会议召集人）原则上应末位发表意见；",
                "公司纪委（或监察审计部）负责人出席或列席会议进行监督，对应回避未回避情况及时提醒。",
            ], expand),
        responsibility: '公司领导'
    }, {
        //项目实施
        key: '5',
        liuc: "项目实施",
        steupName: '实施方案编制',
        objectM: this.getobjectM(['主责部门负责人及有关工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '实施方案不合理，为牟取私利，擅自改变项目内容、提高项目标准、超预算等。'
                }
            ], 2, expand),

        measures:
            this.getMeasures([
                "主责部门编制实施方案需严格对照公司印发的《年度投资总体费用安排及项目计划》进行，",
                "擅自改变项目内容、提高项目标准、超预算的项目财务部不予费用支出，",
                "计划资产部不予验收。",
            ], expand)
        ,
        responsibility: '计划资产部'
    }];

    funds_project_collection_manger = (expand) => {
        return {
            columns: this.get6Scolumns(1, 2),
            data: this.funds_project_collection(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    project_collection = (expand) => [{
        //项目征集
        key: '1',
        steupName: '项目酝酿',
        objectM: this.getobjectM(['各部门负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '有倾向性地酝酿或选择项目，将与个人或部门有利益关联的项目列入征集建议；'
                }
                , {
                    star: 2,
                    span: '提出对公司不利的投资建议方案，如投资总额明显偏高；'
                }, {
                    star: 2,
                    span: '未在部门内征求意见。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "项目酝酿和选择建议，应说明项目投资的必要性、可行性，如可能存在利益关联应进行重点说明；",
                "项目征集过程中，各部门应通过适当方式在部门内广泛征求意见；",
                "项目投资建议由各部门集体讨论，关键指标如投资额度等，需列出明细或说明理由。",
            ], expand),
        responsibility: '项目征集部门'
    }];

    project_collection_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_collection(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    project_any = (expand) => [{
        //项目汇总分析
        key: '1',
        steupName: '项目汇总',
        objectM: this.getobjectM(['计划资产部负责人及有关工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '有倾向性的选择项目进行汇总，导致各部门征集的项目未列入公司《年度投资总体费用安排及项目计划》中；'
                }
                , {
                    star: 2,
                    span: '将有利益关联的项目靠前排序，提高项目立项概率。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "《年度投资总体费用安排及项目计划》的拟定由计划资产部相关人员集体研究；",
                "各部门所征集项目未列入计划时，应简要说明原因；",
                "征集项目评估分析和项目排序，应提出明确原则和标准，必要时项目评估分析可邀请专家参与；",
                "计划资产部拟定的《年度投资总体费用安排及项目计划》需报公司领导审阅。",
            ], expand),

        responsibility: '计划资产部'
    }, {
        key: '2',
        steupName: '评估分析',
        objectM: this.getobjectM(['计划资产部负责人及有关工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '有倾向性的选择项目进行汇总，导致各部门征集的项目未列入公司《年度投资总体费用安排及项目计划》中；'
                }
                , {
                    star: 2,
                    span: '将有利益关联的项目靠前排序，提高项目立项概率。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "《年度投资总体费用安排及项目计划》的拟定由计划资产部相关人员集体研究；",
                "各部门所征集项目未列入计划时，应简要说明原因；",
                "征集项目评估分析和项目排序，应提出明确原则和标准，必要时项目评估分析可邀请专家参与；",
                "计划资产部拟定的《年度投资总体费用安排及项目计划》需报公司领导审阅。",
            ], expand),
        responsibility: '计划资产部'
    }];

    project_any_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_any(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    project_sun = (expand) => [{
        //会议决策
        key: '1',
        steupName: '“三重一大”决策',
        objectM: this.getobjectM(['公司领导']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '有倾向性的选择项目进行汇总，导致各部门征集的项目未列入公司《年度投资总体费用安排及项目计划》中；'
                }
                , {
                    star: 2,
                    span: '将有利益关联的项目靠前排序，提高项目立项概率。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "严格执行决策制度，未达到与会规定人数，会议应推迟召开；",
                "涉及“三重一大”事项必须经公司总经理办公会/党委会研究决定；",
                "主要领导（或会议召集人）原则上应末位发表意见；",
                "公司纪委（或监察审计部）负责人出席或列席会议进行监督，对应回避未回避情况及时提醒。",
            ], expand),
        responsibility: '公司领导'
    }];

    project_sun_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_sun(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };


    project_do = (expand) => [{
        //项目实施
        key: '1',
        steupName: '实施方案编制',
        objectM: this.getobjectM(['主责部门负责人及有关工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '实施方案不合理，为牟取私利，擅自改变项目内容、提高项目标准、超预算等。'
                }
            ], 2, expand),

        measures:
            this.getMeasures([
                "主责部门编制实施方案需严格对照公司印发的《年度投资总体费用安排及项目计划》进行，擅自改变项目内容、提高项目标准、超预算的项目财务部不予费用支出，计划资产部不予验收。",
            ], expand)
        ,
        responsibility: '计划资产部'
    }];

    project_do_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_do(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };
//========================自有资金投资管理===========================//
//========================工程建设管理===========================//
    project_quality_control = (expand) => [{
        //质量控制
        key: '1',
        steupName: '施工人员管理',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '项目经理、生产经理、技术负责人、质检员、安全员等不符合合同约定；'
                }
                , {
                    star: 1,
                    span: '进场的施工人员不满足工程需要；'
                }
                , {
                    star: 1,
                    span: '人员的资格条件不符合国家规定。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "项目经理、生产经理、技术负责人、质检员、安全员等在合同约定工期内进行公示；",
                "加强对人员资质审查，发现人员的资格条件不满足及时要求进行撤换，<br/>对不能满足国家规定的提出处理意见；",
                "建立相关责任追究制度，并严格执行。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '2',
        steupName: '施工设备管理',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '明示或暗示施工单位选择特定的施工设备供应和维养单位；'
                }
                , {
                    star: 3,
                    span: '与施工设备供应和维养单位有利益关联；'
                }
                , {
                    star: 1,
                    span: '进场的施工、试验、检测、测量等设备不满足工作需要或不符合合同约定；'
                }
                , {
                    star: 1,
                    span: '在工程需要时，擅自将施工设备调离工地；'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "与设备供应和维养单位有利益关联的人员应事先申明并回避；",
                "落实设备进场（退场）报验制度；",
                "建立设备进场（退场）审查责任追究制度；",
                "对合同约定条款不落实时，应当经过论证，提出补救措施，明确相关人的责任；",
                "建立诚信制度，与合同不一致时，一律录入信用档案，并建立责任追究制度。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '3',
        steupName: '原材料管理',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '明示或暗示承包人选择特定的材料供应商（生厂商）；'
                }
                , {
                    star: 3,
                    span: '与材料供应商、生产商有利益关联；'
                }
                , {
                    star: 2,
                    span: '默许使用不符合规定的材料；'
                }
                , {
                    star: 1,
                    span: '不履行规定的质量检查检测程序；'
                }
                , {
                    star: 3,
                    span: '不履行规定的质量检查检测程序'
                }
                , {
                    star: 2,
                    span: '未制定严格的材料出入库管理制度，或执行不到位；'
                }
                , {
                    star: 2,
                    span: '对检查检测发现的质量问题不及时处理或处理意见明显不合理。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "公司及有关人员不得参与施工单位的采购活动，原材料及设备供应商等相关要求应在合同中明确；",
                "建立利益关联单位的公示报告制度；",
                "规范质量检查检测程序和记录要求；",
                "制定严格的材料出入库管理制度并严格执行；",
                "建立质量检查责任追究制度，并严格执行。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '4',
        steupName: '施工组织设计',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构', '有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '与合同约定相比，施工组织设计（或施工措施计划）发生简化、相关标准降低。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "采用可能导致工程安全、质量、进度、功能隐患的简化措施时，应当经过论证并留下记录；",
                "与设计相比，技术标准降低的指标应当经过论证并留下记录；",
                "完善论证程序和责任追究制度。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '5',
        steupName: '现场质量检验与评定',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员', '第三方检测机构人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '检验资料不全或评定资料不满足要求；'
                }
                , {
                    star: 2,
                    span: '检验与评定程序不规范；'
                }
                , {
                    star: 3,
                    span: '与第三方检测机构有利益关联；'
                }
                , {
                    star: 2,
                    span: '以质量缺陷的名义规避质量不合格，质量事故或质量缺陷备案手续不全；'
                }
                , {
                    star: 1,
                    span: '检测方案存在明显缺陷。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "评定采用的技术标准和合同约定不一致时，应当进行论证；",
                "建立第三方检测机构利益关联回避制度；",
                "必要时，合同双方可分别委托第三方检测机构进行质量检验和评定；",
                "完善质量检验与评定责任追究制度;",
                "建立质量检验与评定承诺制度;",
                "建立质量检查可追溯的检查记录制度;",
                "建立和完善检测机构和检测方案审查备案制度;",
                "建立质量事故处理通报制度，接受监督。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '6',
        steupName: '现场质量检验与评定',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员', '第三方检测机构人员']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '对事故等级的认定明显不合理；'
                }
                , {
                    star: 2,
                    span: '对事故的原因认定或处理明显不合理。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "评定采用的技术标准和合同约定不一致时，应当进行论证；",
                "建立第三方检测机构利益关联回避制度；",
                "必要时，合同双方可分别委托第三方检测机构进行质量检验和评定；",
                "完善质量检验与评定责任追究制度;",
                "建立质量检验与评定承诺制度;",
                "建立质量检查可追溯的检查记录制度;",
                "建立和完善检测机构和检测方案审查备案制度;",
                "建立质量事故处理通报制度，接受监督。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }];

    project_quality_control_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_quality_control(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };


    project_progress_control = (expand) => [{
        //进度控制
        key: '1',
        steupName: '进度计划审批',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '工期延误责任确定明显不合理；'
                }
                , {
                    star: 3,
                    span: '工期与费用索赔无合同依据，或采用的依据明显不合理。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "合同中明确约定合同延期责任确定；",
                "制定进度保障措施，并严格执行；",
                "进度计划的调整应进行论证，留下可追溯记录，重大调整需报计划资产部和工程运行部备案；",
                "建立和完善进度计划检查和调整责任追究制度。",
            ], expand),
        responsibility: '计划资产部、现场建设管理机构'
    }, {
        key: '2',
        steupName: '进度计划检查',
        objectM: this.getobjectM(['计划资产部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '实际进度与计划进度明显不符，且未按合同及时指出;'
                }
                , {
                    star: 2,
                    span: '进度计划检查发现的问题未按合同要求采取措施或未及时采取措施。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "合同中明确约定合同延期责任确定；",
                "制定进度保障措施，并严格执行；",
                "进度计划的调整应进行论证，留下可追溯记录，重大调整需报计划资产部和工程运行部备案；",
                "建立和完善进度计划检查和调整责任追究制度。",
            ], expand),
        responsibility: '计划资产部、现场建设管理机构'
    }];
    project_progress_control_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_progress_control(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };
    project_investment_control = (expand) => [{
        //投资控制
        key: '1',
        steupName: '工程量审核',
        objectM: this.getobjectM(['计划资产部、工程运行部、现场建设管理机构', '监理单位、设计单位有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '工程量的计算规则与合同约定不一致。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "严格执行合同工程量计算约定，重要隐蔽工程实行施工、监理、项目法人、设计等各方现场联合计量复核；",
                "制定进度保障措施，明确计量审核与确认周期，流程，做到限时办结并定期考核。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '2',
        steupName: '工程造价审核',
        objectM: this.getobjectM(['计划资产部、工程运行部、现场建设管理机构', '监理单位、设计单位有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '未按照合同约定审核工程造价。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "合同中明确造价审核约定，并制定变更、索赔控制流程。",
            ], expand),
        responsibility: '计划资产部、现场建设管理机构'
    }, {
        key: '3',
        steupName: '工程款审核',
        objectM: this.getobjectM(['财务部', '现场建设管理机构', '设计单位有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '实际款项支付程序与合同约定不一致；'
                }
                , {
                    star: 1,
                    span: '实际款项支付程序与合同约定不一致；'
                }
            ], 1, expand),
        measures:
            this.getMeasures([
                "财务部门严格按照合同约定支付款项",
                "及时开展项目经费审计",
                "建立和完善工程量与价款核算程序。",
            ], expand),
        responsibility: '财务部'
    }, {
        key: '4',
        steupName: '财务管理',
        objectM: this.getobjectM(['现场建设管理机构', '财务部有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '指定开户银行或其他金融机构；'
                }
                , {
                    star: 1,
                    span: '资金存储、借贷与工程建设需要明显矛盾；'
                }, {
                    star: 2,
                    span: '建设成本开支明显不合理。'
                }, {
                    star: 2,
                    span: '资金流向明显不合理。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "完善资金管理程序与制度",
                "委托审计机构跟踪审计，具体措施见第四章参见财务管理。",
            ], expand),
        responsibility: '财务部、现场建设管理机构'
    }];

    project_investment_control_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_investment_control(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    project_safety_control = (expand) => [{
        //安全控制
        key: '1',
        steupName: '现场检查',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '未制定安全专项方案；'
                }
                , {
                    star: 2,
                    span: '对安全措施不落实或落实不到位的情况未及时提出整改意见；'
                }, {
                    star: 2,
                    span: '安全措施经费使用明显不到位。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "建立安全责任制度，落实安全责任，实施安全检查记录制度；",
                "制定安全专项方案，并严格执行；",
                "材料、设备、技术使用需说明原因并备案；",
                "建立事故报告制度，并在施工现场建立公示牌；",
                "建立安全事故处理通报制度，接受监督；",
                "对事故报告不及时或隐瞒不报，严肃追责。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '2',
        steupName: '控制措施',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '实际实施的控制措施与批准的控制措施存在较明显的差距，未及时指出并留下记录；'
                }
                , {
                    star: 3,
                    span: '明示或暗示安全措施中采用特定的单位（或个人）提供的材料、设备、技术等。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "建立安全责任制度，落实安全责任，实施安全检查记录制度；",
                "制定安全专项方案，并严格执行；",
                "材料、设备、技术使用需说明原因并备案；",
                "建立事故报告制度，并在施工现场建立公示牌；",
                "建立安全事故处理通报制度，接受监督；",
                "对事故报告不及时或隐瞒不报，严肃追责。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }, {
        key: '3',
        steupName: '安全事故处理',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '对发现的事故报告不及时或隐瞒不报；'
                }
                , {
                    star: 3,
                    span: '对事故等级的认定明显不合理；'
                }
                , {
                    star: 2,
                    span: '对事故的原因认定、处理明显不合理。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "建立安全责任制度，落实安全责任，实施安全检查记录制度；",
                "制定安全专项方案，并严格执行；",
                "材料、设备、技术使用需说明原因并备案；",
                "建立事故报告制度，并在施工现场建立公示牌；",
                "建立安全事故处理通报制度，接受监督；",
                "对事故报告不及时或隐瞒不报，严肃追责。",
            ], expand),
        responsibility: '工程运行部、现场建设管理机构'
    }];

    project_safety_control_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_safety_control(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    project_business_management = (expand) => [{
        //商务管理
        key: '1',
        steupName: '变更技术方案',
        objectM: this.getobjectM(['工程运行部、现场建设管理机构有关人员', '监理单位的监理人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '变更索赔用理由不充分，或依据明显不合理；'
                }
                , {
                    star: 2,
                    span: '变更索赔缺乏可追溯的支撑材料。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "制定变更与索赔管理制度及流程，建立项目法人、监理单位、施工单位、设计单位等共同确认制度；",
                "变更索赔事件发生过程中随时进行有关支撑材料的收集和整理以备查；",
                "必要时对变更技术方案进行专家咨询或评审。",
            ], expand),
        responsibility: '计划资产部、现场建设管理机构'
    }, {
        key: '2',
        steupName: '变更造价',
        objectM: this.getobjectM(['计划资产部、工程运行部、现场建设管理机构', '监理单位有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 0,
                    span: '未按照合同约定或相关规范审核造价'
                }
            ], 0, expand),
        measures:
            this.getMeasures([
                "制定变更与索赔管理制度及流程，建立项目法人、监理单位、施工单位、设计代表等共同确认制度；",
                "合同中明确变更索赔估价原则；",
                "必要时对变更造价进行专家咨询或评审。",
            ], expand),
        responsibility: '计划资产部'
    }, {
        key: '3',
        steupName: '分包',
        objectM: this.getobjectM(['现场建设管理机构', '监理单位有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '明显的违规转包行为未给予追究；'
                }
                , {
                    star: 2,
                    span: '分包行为不符合合同约定；'
                }, {
                    star: 2,
                    span: '与分包单位有利益关联。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "明确合同中分包事项的确定程序；",
                "建立推荐分包或指定分包集体决策制度，保留可追溯的记录。",
            ], expand),
        responsibility: '现场建设管理机构'
    }, {
        key: '4',
        steupName: '合同补充条款（协议）',
        objectM: this.getobjectM(['计划资产部、工程运行部、现场建设管理机构有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '补充条款（协议）内容理由不充分或支撑材料缺乏可追溯性；'
                }
                , {
                    star: 2,
                    span: '补充条款（协议）明显倾向于特定单位。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "合同补充条款（协议）按原程序审批，并保留相关记录；",
                "签订合同补充条款（协议）应集体研究与决策；必要时采取第三方咨询或审查方式。",
            ], expand),
        responsibility: '计划资产部、工程运行部、现场建设管理机构'
    }];
    project_business_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_business_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

//========================工程建设管理===========================//


//========================工程运行管理===========================//

    project_water_dispatch_management = (expand) => [{
        //水量调度管理
        key: '1',
        steupName: '水量调度方案制定',
        objectM: this.getobjectM(['工程运行部负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '未及时制定水量调度实施方案和月水量调度方案，导致不能充分发挥南水北调工程经济效益、社会效益和生态效益。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "根据国家下达的南水北调东线一期工程年度水量调度计划制定水量调度实施方案和月水量调度方案，确保调度合理。",
                "水量调度实施方案和月水量调度方案经公司领导审批后按规定上报相关单位。",
            ], expand),
        responsibility: '工程运行部'
    }, {
        key: '2',
        steupName: '水量调度执行',
        objectM: this.getobjectM(['工程运行部负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '未按照年度水量调度实施方案和月水量调度方案执行水量调度，调度令下达不及时，造成多调水或调水不足。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "严格按照审批程序下达调度令。",
                "调度令由有调度值班长同意后下达。",
            ], expand),
        responsibility: '工程运行部'
    }, {
        key: '3',
        steupName: '水量调度应急管理',
        objectM: this.getobjectM(['工程运行部负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '应急响应不及时，导致不能有效预防和妥善处理突发事件，控制和消除突发事件的危害和影响。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "根据国家下达的水量调度应急预案，依照职责做好工程应急调度预案；",
                "定期开展应急演练，并对演练情况进行评估和总结，提高应急管理能力。",
            ], expand),
        responsibility: '工程运行部'
    }];

    project_water_dispatch_management_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_water_dispatch_management(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    project_water_monitoring = (expand) => [{
        //水质监测
        key: '1',
        steupName: '水质监测',
        objectM: this.getobjectM(['工程运行部、各级运行管理机构负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '委托监测单位未取得相应资质，水质监测管理不到位，不能保障输水水质监测数据准确。'
                }
                , {
                    star: 3,
                    span: '水质监测工作人员改动原始监测数据，未及时报告真实水质情况且未做好保密工作。'
                }

            ], 3, expand),
        measures:
            this.getMeasures([
                "采取招标采购方式委托水质监测单位，避免出现资质不达标情况。",
                "定期或不定期邀请行业专家对委托监测单位的监督管理，发现问题按合同约定处理。",
            ], expand),
        responsibility: '工程运行部、各级运行管理机构'
    }];

    project_water_monitoring_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_water_monitoring(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };


    project_maintenance = (expand) => [{
        //工程维修
        key: '1',
        steupName: '工程维修养护计划上报和审批',
        objectM: this.getobjectM(['工程运行部、各级运行管理机构负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '工程维护保养与实际需求不符，出现过度保养或者缺乏保养等问题。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "按照设备维修养护时间要求和设备实际运行状况，科学合理安排设备维修养护工程；",
                "严格执行工程维修养护相关标准。",
            ], expand),
        responsibility: '工程运行部、各级运行管理机构'
    }, {
        key: '2',
        steupName: '工程维修养护队伍选择',
        objectM: this.getobjectM(['工程运行部、各级运行管理机构负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '工程维护保养方案设计不合理，设计方案明显倾向特定人。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "工程维修养护采取相应采购方式，确保公开公正公平。",
            ], expand),
        responsibility: '工程运行部、各级运行管理机构'
    }];

    project_maintenance_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_maintenance(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    project_safety_production_monitor = (expand) => [{
        //安全生产监督检查
        key: '1',
        steupName: '安全监督检查',
        objectM: this.getobjectM(['工程运行部、各级运行管理机构负责人及相关人员、检查小组']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '未组织开展安全监督检查；'
                }, {
                    star: 2,
                    span: '监督检查流于形式不能及时发现安全隐患，或发现问题后不报告。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "每年召开安全生产相关工作会，部署安全生产工作，提高安全生产意识。",
                "制定监督检查方案，加强对检查小组人员的培训，切实增强责任意识。",
            ], expand),
        responsibility: '工程运行部、各级运行管理机构'
    }, {
        key: '2',
        steupName: '安全隐患处理',
        objectM: this.getobjectM(['工程运行部、各级运行管理机构负责人及相关人员、检查小组']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '安全隐患发现后未能及时处理和解决，引发安全事故。'
                }
            ], 3, expand),

        measures:
            this.getMeasures([
                "签订安全生产责任书。",
                "对于监督检查流于形式，发现问题不报告等情况严肃问责。",
            ], expand),
        responsibility: '工程运行部、各级运行管理机构'
    }];

    project_safety_production_monitor_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_safety_production_monitor(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };


    safety_accident_investigation = (expand) => [{
        //安全事故调查管理
        key: '1',
        steupName: '上报安全事故',
        objectM: this.getobjectM(['工程运行部、各级运行管理机构负责人及相关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '迟报、漏报、谎报、瞒报安全事故或者报告内容的信息不完整、不准确。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "签订安全生产责任书，并加强教育。",
                "严格落实国家《安全生产法》及公司安全生产规章制度，对发现的违规违纪问题及时进行调查和处理。",
            ], expand),
        responsibility: '工程运行部'
    }, {
        key: '2',
        steupName: '事故调查报告',
        objectM: this.getobjectM(['事故调查小组']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '安全事故调查报告描述与事实不符或审批不及时，导致事故调查报告失真、事故处理不到位，责任追究无法落实。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "按照有关规定及时成立安全事故调查小组，严格执行事故调查相关制度；",
                "事故调查小组须制定调查方案，并报工程运行部和公司领导审批；",
                "事故调查报告需附相关支撑材料，并提出处理意见或建议。",
            ], expand),
        responsibility: '工程运行部、各级运行管理机构'
    }, {
        key: '3',
        steupName: '事故处理',
        objectM: this.getobjectM(['事故调查小组', '工程运行部、各级运行管理机构']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '对安全事故处理责任人不及时进行处理，无充分理由减轻或加重对责任人处罚。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "处理意见报公司领导，集体研究决策；",
                "相关处理决定适时公开。",
            ], expand),
        responsibility: '工程运行部'
    }];

    safety_accident_investigation_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.safety_accident_investigation(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };
//========================工程运行管理===========================//

//========================招标采购管理===========================//


    tendering_and_bidding = (expand) => [{
        //招标采购管理
        key: '1',
        steupName: '招标准备工作',
        objectM: this.getobjectM(['履约责任部门、招标管理中心负责人', '及有关人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '应招标而不招标，或将项目化整为零规避招标；'
                }
                , {
                    star: 1,
                    span: '邀请招标理由不充分，或邀请招标规避程序，或邀请投标的单位范围明显过窄；'
                }
                , {
                    star: 2,
                    span: '应当重新招标时，不重新招标；'
                }
                , {
                    star: 2,
                    span: '选择有利益关联的招标代理机构；'
                }
                , {
                    star: 2,
                    span: '选择有利益关联的电子招标投标交易平台。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "招标方式应进行必要的论证，不招标、或须采用邀请招标的必须严格履行审批程序；",
                "建立公司招标委员会负责招标采购工作，完善集体决策制度，明确相关人员职责；",
                "招标中止、重新招标均履行审批手续；",
                "通过招标采购方式确定招标代理服务，建立招标代理机构利益关联报告及回避制度；",
                "电子招标投标交易平台必须能实现与中国招标投标公共服务平台数据对接交换，以便行政监督。",
            ], expand),
        responsibility: '招标管理中心'
    }, {
        key: '2',
        steupName: '招标文件编制',
        objectM: this.getobjectM(['履约责任部门、招标管理中心有关人员', '设计单位、招标代理机构工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '资质条件或废标条款明显不合理，排斥潜在投标人或倾向特定人；'
                }
                , {
                    star: 2,
                    span: '评标标准明显不合理或倾向特定人或明显妨碍公平；'
                }
                , {
                    star: 1,
                    span: '招标文件未履行必要的审查或审批程序。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "使用标准招标文件或示范文本、标准文件；",
                "分标方案、评标标准等招标文件的核心内容应实行集体决策制；",
                "废标条件或废标条款在文件中用醒目方式标示。",
            ], expand),
        responsibility: '招标管理中心'
    }, {
        key: '3',
        steupName: '招标公告发布',
        objectM: this.getobjectM(['履约责任部门、招标管理中心有关人员', '设计单位、招标代理机构工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '应发而未发公告，或未在规定媒介发布公告；'
                }
                , {
                    star: 1,
                    span: '邀请招标时，邀请范围明显倾向于利益关联者或明显不经济。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "通过规定的媒介发布招标公告；",
                "充分研究，科学确定邀请招标的范围，必要时可聘请专家进行咨询，并集体决策邀请范围。",
            ], expand),
        responsibility: '招标管理中心'
    }, {
        key: '4',
        steupName: '招标文件发售',
        objectM: this.getobjectM(['招标管理中心有关人员', '招标代理机构工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '透露购买招标文件的潜在投标人等可能影响公平竞争的信息。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立招投标保密制度，并加强纪律教育。",
            ], expand),
        responsibility: '招标管理中心'
    }, {
        key: '5',
        steupName: '现场踏勘（或投标预备会）',
        objectM: this.getobjectM(['招标管理中心、履约责任部门、招标代理机构工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '仅向部分投标人透露影响招投标结果的实质信息。'
                }
            ], 1, expand),

        measures:
            this.getMeasures([
                "在现场踏勘或投标预备会上口头约定与招标实质要求相关的事项或补充信息，应及时向所有潜在投标人发出文件。",
            ], expand),

        responsibility: '招标管理中心'
    }, {
        key: '6',
        steupName: '招标文件的澄清（或修改）',
        objectM: this.getobjectM(['招标管理中心、履约责任部门、招标代理机构工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '招标文件的澄清和修改通知明显倾向于特定潜在投标人。'
                }
            ], 1, expand),
        measures:
            this.getMeasures([
                "建立招标文件的澄清和修改通知审查程序。",
                "招标文件的澄清和修改通知需归档备查。",
            ], expand),
        responsibility: '招标管理中心'
    }, {
        key: '7',
        steupName: '开标',
        objectM: this.getobjectM(['招标管理中心、履约责任部门、招标代理机构工作人员']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '投标人数量达不到法定数量仍继续开标，或不按规定时间或地点开标。'
                }
            ], 1, expand),
        measures:
            this.getMeasures([
                "招标文件中明确开标程序，所有投标人均应在开标记录表上签字，无签字应说明原因并有责任人签字。",
            ], expand),
        responsibility: '招标管理中心'
    }, {
        key: '8',
        steupName: '评标委员会组建',
        objectM: this.getobjectM(['招标管理中心、招标代理机构工作人员', '评标专家']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '无充分理由，指定部分评标专家；'
                }
                , {
                    star: 2,
                    span: '泄露评标委员会组成人员信息。'
                }
            ], 2, expand),

        measures:
            this.getMeasures([
                "招标文件中明确评标委员会组建人数、抽取方式等内容；",
                "从依法建立的综合评标、政府采购评审等专家库中随机抽取专家；政府投资项目的评标专家，必须从政府或者政府有关部门组建的合法评标专家库中随机抽取；评审专家库必须能实现与中国招标投标公共服务平台数据对接交换>评审专家库必须能实现与中国招标投标公共服务平台数据对接交换",
                "建立评标专家名单知情者保密承诺制度；",
            ], expand),
        responsibility:
            '招标管理中心'
    }
        ,
        {
            key: '9',
            steupName:
                '评标',
            objectM: this.getobjectM(['招标管理中心有关人员', '招标代理机构工作人员', '评标委员会']),
            f_level:
                this.getFLevel([
                    {
                        star: 2,
                        span: '明示或暗示招标代理机构、评标委员会选择潜在投标人；'
                    }
                    , {
                        star: 1,
                        span: '泄露有关评标过程，或打探不应了解的信息，或在评审人员之间泄露不应当泄露的信息。'
                    }
                ], 2, expand),
            measures:
                this.getMeasures([
                    "对重大项目或敏感项目的评标过程现场，根据实际需要可录音、录像；",
                    "评标期间，相关人员原则上应中止对外联系渠道。",
                ], expand),
            responsibility:
                '招标管理中心'
        }
        ,
        {
            key: '10',
            steupName:
                '中标公示',
            objectM: this.getobjectM(['招标管理中心有关人员', '招标代理机构工作人员']),
            f_level:
                this.getFLevel([
                    {
                        star: 1,
                        span: '未按评标委员会的评标报告公示中标候选人。'
                    }
                ], 1, expand),
            measures:
                this.getMeasures([
                    "完善公示内容审查程序，核对公示内容是否与评标报告推荐的中标候选人一致。",
                ], expand),
            responsibility:
                '招标管理中心'
        }
        ,
        {
            key: '11',
            steupName:
                '定标',
            objectM: this.getobjectM(['招标委员会', '招标管理中心有关人员']),
            f_level:
                this.getFLevel([
                    {
                        star: 2,
                        span: '未按评标委员会推荐的中标候选人顺序确定中标人。'
                    }
                ], 2, expand),
            measures:
                this.getMeasures([
                    "建立向行政监督部门上报送招投标情况报告制度。",
                ], expand),
            responsibility:
                '招标委员会'
        }
        ,
        {
            key: '12',
            steupName:
                '合同签订',
            objectM: this.getobjectM(['履约责任部门', '招标管理中心有关人员']),
            f_level:
                this.getFLevel([
                    {
                        star: 2,
                        span: '与中标人订立背离合同实质性内容的其他协议。'
                    }
                ], 2, expand),
            measures:
                this.getMeasures([
                    "完善合同签订审查程序，重点审查与招标文件合同条款不一致的内容。",
                ], expand),
            responsibility:
                '招标管理中心'
        }
    ];

    tendering_and_bidding_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.tendering_and_bidding(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };
//========================招标采购管理===========================//


//========================合同管理===========================//

    project_setting = (expand) => [{
        //合同立项
        key: '1',
        steupName: '立项审批',
        objectM: this.getobjectM(['履约责任部门负责人及经办人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '不按照合同立项管理规定进行立项审批。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "严格执行合同立项审批制度，立项申请须经相关部门会签，财务部、计划资产部审核，报公司领导审批，方可立项；",
                "未经审批立项，计划资产部不予采购谈判，财务部不予费用开支。",
            ], expand),
        responsibility: '履约责任部门'
    }];

    project_setting_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.project_setting(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };


    contract_formation = (expand) => [{
        //合同订立
        key: '1',
        steupName: '谈判采购',
        objectM: this.getobjectM(['履约责任部门负责人', '采购小组成员']),
        f_level: <span>参照“招标采购”部分。
        </span>,
        measures: <span>参照“招标采购”部分。
        </span>,
        responsibility: '计划资产部、履约责任部门'
    }, {
        key: '2',
        steupName: '合同文本起草',
        objectM: this.getobjectM(['履约责任部门负责人及经办人',]),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '合同拟定中故意隐含重大疏漏和欺诈，导致公司合法利益受损。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "采用标准合同文本。",
                "合同需由法务、财务、计划等相关部门审核，重大经济合同可聘请法律顾问和技术专家联合审查",
            ], expand),
        responsibility: '履约责任部门、计划资产部'
    }, {
        key: '3',
        steupName: '合同签订',
        objectM: this.getobjectM(['履约责任部门相关人员',]),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '授意签订虚假合同，谋取私利或套取、转移资金。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立合同签订审核制度，合同签订和实施过程需要按照规定留存档案以备验收查验；",
                "不定期开展合同管理工作抽查。",
            ], expand),
        responsibility: '履约责任部门'
    }];

    contract_formation_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.contract_formation(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    contract_fulfilment = (expand) => [{
        //合同履行
        key: '1',
        steupName: '合同执行',
        objectM: this.getobjectM(['履约责任部门负责人及经办人',]),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '发现合同履行过程的重大问题未采取措施，纠纷处理不当致使公司利益受损；'
                }
                , {
                    star: 2,
                    span: '编造工作量、虚假工作进度、隐匿质量问题，进行虚假结算。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "合同履行开展定期检查，阶段性总结验收；",
                "重大经济合同执行开展不定期评估，及时发现和解决问题。",
            ], expand),
        responsibility: '履约责任部门'
    }, {
        key: '2',
        steupName: '合同结算',
        objectM: this.getobjectM(['履约责任部门、财务部负责人及经办人',]),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '改善合同价款支付审批流程，严格按照合同条款约定支付款项。'
                }
            ], 1, expand),
        measures:
            this.getMeasures([
                "不按合同规定期限、金额或方式付款，导致公司利益受损。",
            ], expand),
        responsibility: '履约责任部门、财务部'
    }, {
        key: '3',
        steupName: '合同变更、索赔',
        objectM: this.getobjectM(['履约责任部门、计划资产部负责人',]),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '授意签订虚假合同，谋取私利或套取、转移资金。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "见“工程建设管理”的“商务管理”部分的变更、索赔内容。",
            ], expand),
        responsibility: '履约责任部门、计划资产部'
    }, {
        key: '4',
        steupName: '合同验收',
        objectM: this.getobjectM(['履约责任部门负责人', '验收组成员']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '合同指标未完成的情况通过验收，导致公司利益受损。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立健全合同验收管理办法，严格合同验收程序；",
                "验收组出具验收意见并签字确认。",
            ], expand),
        responsibility: '履约责任部门'
    }];

    contract_fulfilment_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.contract_fulfilment(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };

//========================合同管理===========================//


//========================资产管理===========================//

    asset_allocation = (expand) => [{
        //资产配置
        key: '1',
        steupName: '资产增加',
        objectM: this.getobjectM(['综合管理部', '财务部', '资产使用部门负责人及经办人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '虚假购置，少采多报、低采高报，超标准采购。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立健全资产采购申报、审批、执行、验收、报销等工作流程；",
                "明确采购人、验收人的职责，落实责任追究制度；",
                "发现虚假采购、超标准购置等违规行为严肃追责；",
                "建立健全资产出入库和入账制度；",
                "建立公司资产管理系统，及时掌握资产动态信息。",
            ], expand),
        responsibility: '综合管理部'
    }];

    asset_allocation_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.asset_allocation(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };


    asset_use1 = (expand) => [{
        //资产使用
        key: '1',
        steupName: '资产自用',
        objectM: this.getobjectM(['综合管理部负责人及经办人', '资产使用部门负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '领用借用资产不按规定交还。'
                }
            ], 1, expand),
        measures:
            this.getMeasures([
                "建立资产领用借用交还制度；",
                "对违规领用、逾期不交进行通报和逾期处理；定期开展资产盘点，确保账实相符。",
            ], expand),
        responsibility: '资产使用部门'
    }, {
        key: '2',
        steupName: '资产维护',
        objectM: this.getobjectM(['资产使用部门负责人及经办人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '资产维修维护虚报多报、套取资金。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立资产损坏报修，费用报修的审核流程，重大资产损坏保修由综合管理部会同有关部门参与查验；",
                "推行定点维修。",
            ], expand),
        responsibility: '资产使用部门'
    }, {
        key: '3',
        steupName: '资产出租出借',
        objectM: this.getobjectM(['公司领导', '综合管理部、资产使用部门负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '未履行相关审批程序，擅自对外出租出借资产。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "对外出租出借事项集体研究决策；",
                "建立健全对外出租出借事项工作制度，严格执行工作流程，明确各部门职责，实行责任追究制度；",
                "涉及投资性的出租出借事项应事先论证。",
            ], expand),
        responsibility: '综合管理部'
    }, {
        key: '4',
        steupName: '资产清查',
        objectM: this.getobjectM(['综合管理部', '财务部', '资产使用部门负责人及经办人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '在资产清查中虚报瞒报国有资产。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "根据工作需要，可委托专业机构对资产清查范围、结果进行审核、审计；",
                "发现存在虚报瞒报问题，追究相关责任人责任；",
                "加强资产日常管理，定期开展资产清查盘点。",
            ], expand),
        responsibility: '综合管理部、财务部'
    }, {
        key: '5',
        steupName: '资产收益管理',
        objectM: this.getobjectM(['公司领导', '综合管理部、财务部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '资产有偿使用收益没有及时纳入部门预算或上缴专户，截留、挪用、私分。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "对外出租、出借资产进行专项管理，专人负责；",
                "定期对资产收益进行专项检查。",
            ], expand),
        responsibility: '财务部'
    }, {
        key: '6',
        steupName: '出资人管理',
        objectM: this.getobjectM(['公司领导']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '国有资产出资人管理职责缺位或越位。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立派出董事、监事及高管人员制度；",
                "建立国有资产出资人管理行为规范；",
                "指导督促所投资企业建立“三重一大”决策制度。",
            ], expand),
        responsibility: '公司领导'
    }];

    asset_use_manger1 = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.asset_use1(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }

    };

    assets_disposal1 = (expand) => [{
        //资产处置
        key: '1',
        steupName: '资产评估',
        objectM: this.getobjectM(['公司领导', '综合管理部、财务部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '故意提供虚假情况和资料，或者与资产评估机构串通作弊，导致资产评估结果失实。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "对评估服务采取招标采购方式获取，确保公正公平；",
                "建立完善资产管理信息系统，为资产评估提供基础数据。",
            ], expand),
        responsibility: '综合管理部、财务部'
    }, {
        key: '2',
        steupName: '资产处置',
        objectM: this.getobjectM(['公司领导', '综合管理部、财务部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '未经审批，批擅自处置国有资产；'
                }
                , {
                    star: 2,
                    span: '违规核销货币性资产；'
                }
                , {
                    star: 3,
                    span: '国有资产处置不透明、暗箱操作。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "建立健全资产处置申报审批制度，并严格执行；",
                "重大资产处置需进行资产评估，根据需要可实行专家评审制度，并报公司领导审批；",
                "严格执行货币性资产处置规定，如实提供资产处置的相关资料，并报公司领导审批；",
                "实行重大资产处置事项和结果公示制度。",
            ], expand),
        responsibility: '综合管理部、财务部'
    }, {
        key: '3',
        steupName: '处置收入管理',
        objectM: this.getobjectM(['资产处置部门负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '资产处置收入未及时收缴，存在截留、挪用、私分情况。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "专人负责处置收入管理，并建立相应台账；",
                "定期对处置收入进行专项检查。",
            ], expand),
        responsibility: '资产处置部门'
    }];

    assets_disposal_manger1 = (expan) => {
        return {
            columns: this.comIssue_columns,
            data: this.assets_disposal1(expan),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };

//========================资产管理===========================//


//========================内部监督管理===========================//
    complaint_reporting_handling = (expand) => [{
        //信访举报处理
        key: '1',
        steupName: '登记受理',
        objectM: this.getobjectM(['监察审计部负责人', '纪检监察岗']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '因涉及相关利益关系，收到举报后，隐瞒不登记，或不如实记录登记。'
                }, {
                    star: 2,
                    span: '利用职权，故意不受理符合受理条件的信访举报。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立健全信访举报登记受理制度，并严格执行；",
                "选派素质过硬人员负责群众举报材料的登记受理；",
                "登记群众举报时，应附上举报原件，对于群众来访至少2人以上接待，笔录需本人签字，群众来电需作电话记录；",
                "对非公司受理范围的实名举报向举报人说明情况。"
            ], expand),
        responsibility: '监察审计部'
    }, {
        key: '2',
        steupName: '线索处置审批',
        objectM: this.getobjectM(['监察审计部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '利用职权，压制问题线索的处置，不及时提请审批；'
                }, {
                    star: 2,
                    span: '不按规定提请审批，或擅自越权开展问题线索初步核查。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "建立健全信访举报办理制度",
                "严格落实逐级审批制度，对已受理的的信访举报，严格填写信访举报拟办单，提交纪委书记审批；",
                "未经审批的问题线索，不得成立初核组进行核查。",
            ], expand),
        responsibility: '监察审计部'
    }, {
        key: '3',
        steupName: '初步核实',
        objectM: this.getobjectM(['初核组']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '初核组组成不符合规定，应回避未回避；'
                }, {
                    star: 2,
                    span: '初核组核查问题线索时滥用自由裁量权；'
                }, {
                    star: 2,
                    span: '对初核中发现的问题不报告或不如实报告；'
                }, {
                    star: 2,
                    span: '违规泄露举报内容、初核情况。'
                },
            ], 2, expand),
        measures:
            this.getMeasures([
                "认真执行回避制度，初核组由2人以上组成，并经纪委书记审批；",
                "对初核组成员加强纪律教育，初核前制定工作方案并严格执行，遇有重要情况或发现新线索需及时报告，严格控制初核范围；",
                "初核报告需将重要取证资料附上，报告需初核组全体成员签名；",
                "发现违规泄露举报内容、初核情况的严肃追责。",
            ], expand),
        responsibility: '监察审计部'
    }, {
        key: '4',
        steupName: '立案审查',
        objectM: this.getobjectM(['审查组']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '违规处置或私吞涉案款物。其他风险点参照“初步核实”。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "涉案款物处置，严格履行审批手续，按照《中国共产党纪律检查机关监督执纪规则（试行）》第三十三条执行。",
                "其他防控措施参照“初步核实”环节。"
            ], expand),
        responsibility: '监察审计部'
    }, {
        key: '5',
        steupName: '案件审理',
        objectM: this.getobjectM(['审理组']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '审理组组成不符合规定，应回避未回避。'
                }
            ], 1, expand),
        measures:
            this.getMeasures([
                "认真执行回避制度，坚持审查与审理分离，审查人员不得参与审理，审理组由2人以上组成，并经纪委书记审批。"
            ], expand),
        responsibility: '监察审计部'
    }, {
        key: '6',
        steupName: '公司纪委会和党委会审议',
        objectM: this.getobjectM(['公司纪委', '党委委员']),
        f_level:
            this.getFLevel([
                {
                    star: 0,
                    span: '同第一章“三重一大”决策管理中的“集体决策”部分'
                }
            ], 0, expand),
        measures: <span>同第一章“三重一大”决策管理中的“集体决策”部分。
        </span>,
        responsibility: '公司纪委、党委班子'
    }, {
        key: '7',
        steupName: '作出处分决定',
        objectM: this.getobjectM(['监察审计部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '不按照会议讨论的结果，违规从轻或减轻给予当事人的处罚。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "会议审议（集体决策）做好会议记录和会议纪要，并经全体与会人员签字确认；"
                , "处分决定由纪委书记签发。"
            ], expand),
        responsibility: '监察审计部'
    }, {
        key: '8',
        steupName: '落实处分决定',
        objectM: this.getobjectM(['监察审计部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '不按规定向相关部门抄送（通报）处分决定；'
                }, {
                    star: 1,
                    span: '相关部门不执行或者选择性执行处分决定。'
                }
            ], 1, expand),
        measures:
            this.getMeasures([
                "及时向包括人力资源部、综合管理部等相关部门抄送处分决定；"
                , "建立督查工作机制，及时跟踪会议决定落实情况；"
                , "发现不执行或者选择性执行会议决定依据有关规定进行问责。"
            ], expand),
        responsibility: '监察审计部'
    }];

    complaint_reporting_handling_manger = (expand) => {
        return {
            columns: this.comIssue_columns,
            data: this.complaint_reporting_handling(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };


    internal_audit_monitoring = (expand) => [{
        //内部审计监督
        key: '1',
        steupName: '制定年度审计计划',
        objectM: this.getobjectM(['监察审计部负责人', '审计岗']),
        f_level: this.getFLevel([
            {
                star: 2,
                span: '因利益或人情关系，在制定审计计划时，有意规避重点风险领域;'
            }, {
                star: 2,
                span: '违规泄露审计计划，可能造成被审计对象提前应对。'
            }
        ], 2, expand),
        measures: this.getMeasures([
            "年度审计计划的制定，由监察审计部集体研究讨论，并报公司领导审批；"
            , "监察审计部加强保密教育，发现泄密情况从严从速查处。"
        ], expand)
        ,
        responsibility: '监察审计部'
    }, {
        key: '2',
        steupName: '成立审计组',
        objectM: this.getobjectM(['监察审计部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '审计组组成不符合规定，存在应回避未回避现象；'
                }, {
                    star: 2,
                    span: '未制定审计工作方案，造成自由裁量权过大。'
                }
            ], 2, expand),
        measures:
            this.getMeasures([
                "认真执行回避制度，审计组由3人以上组成，并经公司领导审批；"
                , "进驻审计前，审计组制定审计工作方案，并报公司领导审批。"
            ], expand)
        ,
        responsibility: '监察审计部'
    }, {
        key: '3',
        steupName: '开展现场审计',
        objectM: this.getobjectM(['审计组组长及全体成员']),
        f_level:
            this.getFLevel([
                {
                    star: 3,
                    span: '因收受好处或存在经济利益，审计人员避重就轻、徇私舞弊，对发现的问题隐瞒不报；'
                }, {
                    star: 3,
                    span: '利用被审计单位的商业秘密为本人、亲属或特定关系人牟取利益。'
                }
            ], 3, expand),
        measures:
            this.getMeasures([
                "执行审计工作底稿分级复核制度；"
                , "重大审计事项必须两人及以上检查，收集重要审计证据，须2人以上参加；"
                , "重大审计事项及时向分管领导汇报；"
                , "审计组内加强保密纪律教育。"
            ], expand),
        responsibility: '监察审计部'
    }, {
        key: '4',
        steupName: '形成审计报告（征求意见稿）',
        objectM: this.getobjectM(['审计组组长']),
        f_level:
            this.getFLevel([
                {
                    star: 2,
                    span: '对发现的严重问题未提出正确的处理决定'
                }, {
                    star: 2,
                    span: '有关人员有意提出可能会造成隐瞒、删除重大发现的修改意见，导致出具不真实报告。'
                }
            ], 2, expand),
        measures:
            this.getMeasures(["审计报告（征求意见稿）由审计组集体研究，并签字确认后，报监察审计部和分管领导审阅。"
                , "修改审计报告必须召集由监察审计部负责人和审计组组长参加的专题会议，共同讨论决定，并形成会议纪要。"], expand),
        responsibility: '监察审计部'
    }, {
        key: '5',
        steupName: '审计整改落实跟踪',
        objectM: this.getobjectM(['监察审计部负责人']),
        f_level:
            this.getFLevel([
                {
                    star: 1,
                    span: '利用职务之便，受被审计部门或个人影响，隐瞒未整改的审计意见或决定。'
                }
            ], 1, expand),
        measures: this.getMeasures(["上报整改情况附有被审计单位整改证明材料，如整改文档、记账凭证等。"], expand),
        responsibility: '监察审计部'
    }];

    internal_audit_monitoring_manger = (expand) => {

        return {
            columns: this.comIssue_columns,
            data: this.internal_audit_monitoring(expand),
            bordered: true,
            pagination: false,
            style: { padding: '0 10px' },
            scroll: { y: 210 }
        }
    };

//========================内部监督管理===========================//
}

export default TableComs;
