/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from '../App';
import Page from '../components/Page';
import BasicForm from '../components/forms/BasicForm';
import BasicTable from '../components/tables/BasicTables';
import AdvancedTable from '../components/tables/AdvancedTables';
import AsynchronousTable from '../components/tables/AsynchronousTable';
import Login from '../components/pages/Login';
import Echarts from '../components/charts/Echarts';
import Recharts from '../components/charts/Recharts';
import Icons from '../components/ui/Icons';
import Buttons from '../components/ui/Buttons';
import Spins from '../components/ui/Spins';
import Modals from '../components/ui/Modals';
import Notifications from '../components/ui/Notifications';
import Tabs from '../components/ui/Tabs';
import Banners from '../components/ui/banners';
import Drags from '../components/ui/Draggable';
import Dashboard from '../components/dashboard/Dashboard';
import Gallery from '../components/ui/Gallery';
import NotFound from '../components/pages/NotFound';
import BasicAnimations from '../components/animation/BasicAnimations';
import ExampleAnimations from '../components/animation/ExampleAnimations';
import AuthBasic from '../components/auth/Basic';
import RouterEnter from '../components/auth/RouterEnter';
import PageIndex from '../components/pages/PageIndex';
import Homepage from '../components/pages/Homepage';

//三重一大
import DecisionreadyIndex from '../components/decision/DecisionreadyIndex';
import DecisionRept from '../components/decision/DecisionRept';
import Decisionour from '../components/decision/Decisionour';
import Decisiondo from '../components/decision/Decisiondo';
//印章
import SealMake from '../components/colligate/SealMake';
import SealUse from '../components/colligate/SealUse';
import SealDes from '../components/colligate/SealDes';

//车辆
import CarCharge from '../components/car/CarCharge';
import CarEquipment from '../components/car/CarEquipment';
import CarDispatch from '../components/car/CarDispatch';
import CarRepair from '../components/car/CarRepair';

import Reception from '../components/com/Reception';
//出国
import PrivateGo from '../components/abroad/PrivateGo';
import PublicGo from '../components/abroad/PublicGo';

//人力资源
import Motion from '../components/humanresources/Motion';
import Selectioncadre from '../components/humanresources/Selectioncadre';
import Investigate from '../components/humanresources/Investigate';
import Discussion from '../components/humanresources/Discussion';
import Office from '../components/humanresources/Office';
import Salarymanager from '../components/humanresources/Salarymanager';
import Recruit from '../components/humanresources/Recruit';
import OtherPersonnel from '../components/humanresources/OtherPersonnel';

//财务管理
import Budgeting from '../components/finance/Budgeting';
import Brevenue from '../components/finance/Brevenue';
import Bexpenditure from '../components/finance/Bexpenditure';

import Cashmag from '../components/finance/Cashmag';
import Bankcount from '../components/finance/Bankcount';
import BillM from '../components/finance/BillM';

import Creditorrights from '../components/finance/Creditorrights';
import DebtM from '../components/finance/DebtM';
//自有资金投资管理
import ProjectCollection from '../components/investment/ProjectCollection';
import Metanalysis from '../components/investment/Metanalysis';
import ConferenceDecision from '../components/investment/ConferenceDecision';
import ProjectImplementation from '../components/investment/ProjectImplementation';
import Planformulation from '../components/investment/Planformulation';

//工程建设管理
import Qualityctrl from '../components/construction/Qualityctrl';
import Progressctrl from '../components/construction/Progressctrl';
import Investmentctrl from '../components/construction/Investmentctrl';
import Securityctrl from '../components/construction/Securityctrl';
import Businessctrl from '../components/construction/Businessctrl';
import Organizationctrl from '../components/construction/Organizationctrl';

//工程运行管理
import Waterquality from '../components/operation/Waterquality';
import Waterdispatch from '../components/operation/Waterdispatch';
import Maintenance from '../components/operation/Maintenance';
import Supervision from '../components/operation/Supervision';
import Accidents from '../components/operation/Accidents';
//招标投标
import TenderManger from '../components/tender/TenderManger';

//合同管理
import Projectcontract from '../components/contract/Projectcontract';
import Concludecontract from '../components/contract/Concludecontract';
import Performcontact from '../components/contract/Performcontact';

//资产管理
import ConfigureAsset from '../components/asset/ConfigureAsset';
import PossessionAsset from '../components/asset/PossessionAsset';
import AppraisalAsset from '../components/asset/AppraisalAsset';

//内部监督管理
import Lettersreport from '../components/supervision/Lettersreport';
import Auditsuperv from '../components/supervision/Auditsuperv';

const Wysiwyg = (location, cb) => {     // 按需加载富文本配置
    require.ensure([], require => {
        cb(null, require('../components/ui/Wysiwyg').default);
    }, 'Wysiwyg');
};

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { store } = this.props;
        const { auth } = store.getState().httpData;
        if (!auth || !auth.data.permissions.includes(permission)) hashHistory.replace('/404');
        return component;
    };

    render() {
        return (
            <Router history={hashHistory}>
                <Route path={'/'} components={Page}>
                    <IndexRedirect to="/login"/>
                    <Route path={'app'} component={App}>
                        <Route path={'decision'}>
                            <Route path={'readyIndex'} component={DecisionreadyIndex}/>
                            <Route path={'rept'} component={DecisionRept}/>
                            <Route path={'our'} component={Decisionour}/>
                            <Route path={'todo'} component={Decisiondo}/>
                        </Route>

                        <Route path={'comprehensive'}>
                            <Route path={'collogate'}>
                                <Route path={'des'} component={SealDes}/>
                                <Route path={'make'} component={SealMake}/>
                                <Route path={'use'} component={SealUse}/>
                            </Route>

                            <Route path={'car'}>
                                <Route path={'equipment'} component={CarEquipment}/>
                                <Route path={'dispatch'} component={CarDispatch}/>
                                <Route path={'repair'} component={CarRepair}/>
                                <Route path={'charge'} component={CarCharge}/>
                            </Route>
                            <Route path={'basecom/reception'} component={Reception}/>
                            <Route path={'abroad'}>
                                <Route path={'private'} component={PrivateGo}/>
                                <Route path={'public'} component={PublicGo}/>
                            </Route>
                        </Route>


                        <Route path={'persmag'}>
                            <Route path={'selectcadre'} >
                                <Route path={'motion'} component={Motion}/>
                                <Route path={'cadreselection'} component={Selectioncadre}/>
                                <Route path={'investigate'} component={Investigate}/>
                                <Route path={'discussion'} component={Discussion}/>
                                <Route path={'office'} component={Office}/>
                            </Route>>
                            <Route path={'salarymanager'} component={Salarymanager}/>
                            <Route path={'recruit'} component={Recruit}/>
                            <Route path={'otherPersonnel'} component={OtherPersonnel}/>
                        </Route>

                        <Route path={'finance'}>
                            <Route path={'budget'}>
                                <Route path={'budgeting'} component={Budgeting}/>
                                <Route path={'brevenue'} component={Brevenue}/>
                                <Route path={'bexpenditure'} component={Bexpenditure}/>
                            </Route>
                            <Route path={'capital'}>
                                <Route path={'carCharge'} component={Cashmag}/>
                                <Route path={'bankcount'} component={Bankcount}/>
                                <Route path={'billM'} component={BillM}/>
                            </Route>
                            <Route path={'credit'}>
                                <Route path={'creditorrights'} component={Creditorrights}/>
                                <Route path={'debtM'} component={DebtM}/>
                            </Route>
                        </Route>

                        <Route path={'inverstment'}>
                            <Route path={'projectCollection'} component={ProjectCollection}/>
                            <Route path={'metanalysis'} component={Metanalysis}/>
                            <Route path={'conferenceDecision'} component={ConferenceDecision}/>
                            <Route path={'projectImplementation'} component={ProjectImplementation}/>
                            <Route path={'planformulation'} component={Planformulation}/>
                        </Route>

                        <Route path={'construction'}>
                            <Route path={'qualityctrl'} component={Qualityctrl}/>
                            <Route path={'progressctrl'} component={Progressctrl}/>
                            <Route path={'investmentctrl'} component={Investmentctrl}/>
                            <Route path={'securityctrl'} component={Securityctrl}/>
                            <Route path={'businessctrl'} component={Businessctrl}/>
                            <Route path={'organizationctrl'} component={Organizationctrl}/>
                        </Route>

                        <Route path={'operation'}>
                            <Route path={'waterquality'} component={Waterquality}/>
                            <Route path={'waterdispatch'} component={Waterdispatch}/>
                            <Route path={'maintenance'} component={Maintenance}/>
                            <Route path={'supervision'} component={Supervision}/>
                            <Route path={'accidents'} component={Accidents}/>
                        </Route>
                        <Route path={'tender/tendermanger'} component={TenderManger}/>
                        <Route path={'contract'}>
                            <Route path={'projectcontract'} component={Projectcontract}/>
                            <Route path={'concludecontract'} component={Concludecontract}/>
                            <Route path={'performcontact'} component={Performcontact}/>
                        </Route>

                        <Route path={'supervision'}>
                            <Route path={'lettersreport'} component={Lettersreport}/>
                            <Route path={'auditsuperv'} component={Auditsuperv}/>
                        </Route>

                        <Route path={'asset'}>
                            <Route path={'config/configureAsset'} component={ConfigureAsset}/>
                            <Route path={'use'}>
                                <Route path={'possessionAsset'} component={PossessionAsset}/>
                            </Route>
                            <Route path={'disposal'}>
                                <Route path={'appraisalAsset'} component={AppraisalAsset}/>
                            </Route>
                        </Route>

                        <Route path={'form'}>
                            <Route path={'basicForm'} component={BasicForm}/>
                        </Route>
                        <Route path={'table'}>
                            <Route path={'basicTable'} component={BasicTable}/>
                            <Route path={'advancedTable'} components={AdvancedTable}/>
                            <Route path={'asynchronousTable'} components={AsynchronousTable}/>
                        </Route>
                        <Route path={'chart'}>
                            <Route path={'echarts'} component={Echarts}/>
                            <Route path={'recharts'} component={Recharts}/>
                        </Route>
                        <Route path={'ui'}>
                            <Route path={'icons'} component={Icons}/>
                            <Route path={'buttons'} component={Buttons}/>
                            <Route path={'spins'} component={Spins}/>
                            <Route path={'modals'} component={Modals}/>
                            <Route path={'notifications'} component={Notifications}/>
                            <Route path={'tabs'} component={Tabs}/>
                            <Route path={'banners'} component={Banners}/>
                            <Route path={'wysiwyg'} getComponent={Wysiwyg}/>
                            <Route path={'drags'} component={Drags}/>
                            <Route path={'gallery'} component={Gallery}/>
                        </Route>
                        <Route path={'animation'}>
                            <Route path={'basicAnimations'} component={BasicAnimations}/>
                            <Route path={'exampleAnimations'} component={ExampleAnimations}/>
                        </Route>
                        <Route path={'dashboard/index'} component={Dashboard}/>
                        <Route path="auth">
                            <Route path="basic" component={AuthBasic}/>
                            <Route path="routerEnter"
                                   component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)}/>
                        </Route>
                    </Route>
                    <Route path={'pageIndex'} component={PageIndex}>
                        <Route path={'homepage'} component={Homepage}/>
                    </Route>

                    <Route path={'login'} components={Login}/>
                    <Route path={'404'} component={NotFound}/>
                </Route>
            </Router>
        )
    }
}