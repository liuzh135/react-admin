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
    decision = [
        {
            title: "议题准备",
            menuId: 1,
            menu: "/app/decision/readyIndex",
            submenu: null
        },
        {
            menuId: 2,
            menu: "/app/decision/rept",
            title: "请示报告",
            submenu: null
        }, {
            menuId: 3,
            title: "集体决策",
            menu: "/app/decision/our",
            submenu: null
        }, {
            menuId: 4,
            title: "执行落实",
            menu: "/app/decision/todo",
            submenu: null
        }
    ];

    yinz = [
        {
            title: "印章管理",
            menuId: 1,
            menu: "/app/collogate",
            submenu: [
                {
                    subId: 1,
                    path: "/app/collogate/make",
                    title: "印章刻制"
                }, {
                    subId: 2,
                    path: "/app/collogate/use",
                    title: "印章使用"
                }, {
                    subId: 3,
                    path: "/app/collogate/des",
                    title: "印章销毁"
                }
            ]
        },
        {
            menuId: 2,
            menu: "/app/car",
            title: "公务用车管理",
            submenu: [
                {
                    subId: 1,
                    path: "/app/car/equipment",
                    title: "车辆配备"
                }, {
                    subId: 2,
                    path: "/app/car/dispatch",
                    title: "车辆调度"
                }, {
                    subId: 3,
                    path: "/app/car/repair",
                    title: "维修保养"
                }, {
                    subId: 4,
                    path: "/app/car/charge",
                    title: "车辆加油"
                }
            ]
        },
        {
            menuId: 3,
            menu: "/app/basecom/reception",
            title: "公务接待管理",
            submenu: null
        },
        {
            menuId: 4,
            menu: "/app/abroad",
            title: "出国（境）管理",
            submenu: [
                {
                    subId: 1,
                    path: "/app/abroad/private",
                    title: "因私出国（境）"
                }, {
                    subId: 2,
                    path: "/app/abroad/public",
                    title: "因公出国（境）"
                }
            ]
        }
    ];

}

export default DecisionsModel;