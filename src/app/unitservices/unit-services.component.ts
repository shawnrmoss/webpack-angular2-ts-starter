import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {UnitDashboard} from './unit-dashboard.component';
import {UnitList} from './unit-list.component';
import {UnitDetail} from './unit-detail.component';
import {UnitService} from './unit.service';

//This is a route component can direct child routes
@Component({
  template:  `
    <h2>Unit Services</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [UnitService]
})
@RouteConfig([
  {path:'/', name: 'UnitDashboard', component: UnitDashboard, useAsDefault: true},
  {path:'/units', name: 'Units', component: UnitList},
  {path:'/units/:id', name: 'UnitDetail', component: UnitDetail}
])
export class UnitServices { }