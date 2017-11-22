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
                    <IndexRedirect to="/pageIndex/homepage"/>
                    <Route path={'app'} component={App}>
                        <Route path={'decision'}>
                            <Route path={'readyIndex'} component={DecisionreadyIndex}/>
                            <Route path={'rept'} component={DecisionRept}/>
                            <Route path={'our'} component={Decisionour}/>
                            <Route path={'todo'} component={Decisiondo}/>
                        </Route>

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