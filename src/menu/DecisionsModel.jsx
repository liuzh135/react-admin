/**
 * @fileName: DecisionsModel.jsx
 * Created on 2017-11-22
 * 配置左侧栏
 *
 * 页面入口管理类
 *
 */
class DecisionsModel {

    //自定义 所有的页面的左侧栏 path
    data = {
        decision: [
            {
                title: "议题准备",
                menuId: 1,
                menu: "/app/decision/readyIndex",
                icon: "arrow-down",
                submenu: null
            },
            {
                menuId: 2,
                menu: "/app/decision/rept",
                title: "请示报告",
                icon: "arrow-down",
                submenu: null
            }, {
                menuId: 3,
                title: "集体决策",
                icon: "arrow-down",
                menu: "/app/decision/our",
                submenu: null
            }, {
                menuId: 4,
                title: "执行落实",
                icon: "arrow-down",
                menu: "/app/decision/todo",
                submenu: null
            }
        ],
        comprehensive: [
            {
                title: "印章管理",
                menuId: 1,
                icon: "hdd",
                menu: "/app/comprehensive/collogate",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/comprehensive/collogate/make",
                        title: "印章刻制"
                    }, {
                        subId: 2,
                        path: "/app/comprehensive/collogate/use",
                        title: "印章使用"
                    }, {
                        subId: 3,
                        path: "/app/comprehensive/collogate/des",
                        title: "印章销毁"
                    }
                ]
            },
            {
                menuId: 2,
                menu: "/app/comprehensive/car",
                title: "公务用车管理",
                icon: "car",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/comprehensive/car/equipment",
                        title: "车辆配备"
                    }, {
                        subId: 2,
                        path: "/app/comprehensive/car/dispatch",
                        title: "车辆调度"
                    }, {
                        subId: 3,
                        path: "/app/comprehensive/car/repair",
                        title: "维修保养"
                    }, {
                        subId: 4,
                        path: "/app/comprehensive/car/charge",
                        title: "车辆加油"
                    }
                ]
            },
            {
                menuId: 3,
                menu: "/app/comprehensive/basecom/reception",
                title: "公务接待管理",
                icon: "idcard",
                submenu: null
            },
            {
                menuId: 4,
                menu: "/app/comprehensive/abroad",
                title: "出国（境）管理",
                icon: "coffee",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/comprehensive/abroad/private",
                        title: "因私出国（境）"
                    }, {
                        subId: 2,
                        path: "/app/comprehensive/abroad/public",
                        title: "因公出国（境）"
                    }
                ]
            }
        ],
        persmag: [
            {
                title: "干部选拔任用管理",
                menuId: 1,
                menu: "/app/persmag/selectcadre",
                icon: "scan",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/persmag/selectcadre/motion",
                        title: "动议"
                    }, {
                        subId: 2,
                        path: "/app/persmag/selectcadre/cadreselection",
                        title: "民主推荐"
                    }, {
                        subId: 3,
                        path: "/app/persmag/selectcadre/investigate",
                        title: "考察"
                    },{
                        subId: 4,
                        path: "/app/persmag/selectcadre/discussion",
                        title: "讨论决定"
                    },{
                        subId: 5,
                        path: "/app/persmag/selectcadre/office",
                        title: "任职"
                    }
                ]
            },
            {
                menuId: 2,
                menu: "/app/persmag/recruit",
                title: "人才招聘管理",
                icon: "usergroup-add",
                submenu: null
            },
            {
                menuId: 3,
                menu: "/app/persmag/salarymanager",
                title: "薪酬福利管理",
                icon: "red-envelope",
                submenu: null
            },
            {
                menuId: 4,
                menu: "/app/persmag/otherPersonnel",
                title: "其他人事管理",
                icon: "schedule ",
                submenu: null
            }
        ],
        finance: [
            {
                title: "预算管理",
                menuId: 1,
                menu: "/app/finance/budget",
                icon: "shop",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/finance/budget/budgeting",
                        title: "预算编制"
                    }, {
                        subId: 2,
                        path: "/app/finance/budget/brevenue",
                        title: "预算收入管理"
                    }, {
                        subId: 3,
                        path: "/app/finance/budget/bexpenditure",
                        title: "预算支出管理"
                    }
                ]
            },
            {
                menuId: 2,
                menu: "/app/finance/capital",
                title: "资金管理",
                icon: "pay-circle-o",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/finance/capital/carCharge",
                        title: "现金管理"
                    }, {
                        subId: 2,
                        path: "/app/finance/capital/bankcount",
                        title: "银行账户管理"
                    }, {
                        subId: 3,
                        path: "/app/finance/capital/billM",
                        title: "票据管理"
                    }
                ]
            },
            {
                menuId: 3,
                menu: "/app/finance/credit",
                title: "债权债务管理",
                icon: "database",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/finance/credit/creditorrights",
                        title: "债权管理"
                    }, {
                        subId: 2,
                        path: "/app/finance/credit/debtM",
                        title: "债务管理"
                    }
                ]
            }
        ],
        inverstment: [
            {
                title: "自有资金投资管理",
                menuId: 1,
                icon: "pushpin-o",
                menu: "/app/inverstment/capitalinvestment",
                submenu: null
            }
        ],
        construction: [
            {
                title: "质量控制",
                menuId: 1,
                icon: "bell",
                menu: "/app/construction/qualityctrl",
                submenu: null
            },
            {
                title: "进度控制",
                menuId: 2,
                icon: "usb",
                menu: "/app/construction/progressctrl",
                submenu: null
            }, {
                title: "投资控制",
                menuId: 3,
                menu: "/app/construction/investmentctrl",
                submenu: null
            }, {
                title: "安全控制",
                menuId: 4,
                menu: "/app/construction/securityctrl",
                submenu: null
            }, {
                title: "商务管理",
                menuId: 5,
                menu: "/app/construction/businessctrl",
                submenu: null
            }
        ],
        operation: [
            {
                title: "水量调度管理",
                menuId: 1,
                menu: "/app/operation/waterquality",
                submenu: null
            },
            {
                title: "水质监测管理",
                menuId: 2,
                menu: "/app/operation/waterdispatch",
                submenu: null
            }, {
                title: "工程维护养护管理",
                menuId: 3,
                menu: "/app/operation/maintenance",
                submenu: null
            }, {
                title: "安全生产监督检查",
                menuId: 4,
                menu: "/app/operation/supervision",
                submenu: null
            }, {
                title: "安全事故调查处理",
                menuId: 5,
                menu: "/app/operation/accidents",
                submenu: null
            }
        ],
        tender: [
            {
                title: "招标采购管理",
                menuId: 1,
                menu: "/app/tender/tendermanger",
                submenu: null
            }
        ],
        contract: [
            {
                title: "合同立项",
                menuId: 1,
                menu: "/app/contract/projectcontract",
                submenu: null
            },
            {
                title: "合同订立",
                menuId: 2,
                menu: "/app/contract/concludecontract",
                submenu: null
            },
            {
                title: "合同履行",
                menuId: 3,
                menu: "/app/contract/performcontact",
                submenu: null
            }
        ],
        asset: [
            {
                title: "资产配置",
                menuId: 1,
                menu: "/app/asset/config/configureAsset",
                submenu: null
            },
            {
                title: "资产使用",
                menuId: 2,
                menu: "/app/asset/use",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/asset/use/possessionAsset",
                        title: "资产自用"
                    }, {
                        subId: 2,
                        path: "/app/asset/use/maintainAsset",
                        title: "资产维护"
                    }, {
                        subId: 3,
                        path: "/app/asset/use/rentingAsset",
                        title: "资产出租出借"
                    }, {
                        subId: 4,
                        path: "/app/asset/use/checkAsset",
                        title: "资产清查"
                    }, {
                        subId: 5,
                        path: "/app/asset/use/profitAsset",
                        title: "资产收益管理"
                    }, {
                        subId: 6,
                        path: "/app/asset/use/investor",
                        title: "出资人管理"
                    }
                ]
            },
            {
                title: "资产处置",
                menuId: 3,
                menu: "/app/asset/disposal",
                submenu: [
                    {
                        subId: 1,
                        path: "/app/asset/disposal/appraisalAsset",
                        title: "资产评估"
                    }, {
                        subId: 2,
                        path: "/app/asset/disposal/disposalAsset",
                        title: "资产处置"
                    }, {
                        subId: 3,
                        path: "/app/asset/disposal/incomeDisAsset",
                        title: "处置收入管理"
                    }
                ]
            }
        ],
        supervision: [
            {
                title: "信访举报及问题处理",
                menuId: 1,
                menu: "/app/supervision/Lettersreport",
                icon: "schedule",
                submenu: null
            },
            {
                title: "内部审计监督",
                menuId: 2,
                menu: "/app/supervision/auditsuperv",
                icon: "appstore-o",
                submenu: null
            }
        ]
    };


}

export default DecisionsModel;