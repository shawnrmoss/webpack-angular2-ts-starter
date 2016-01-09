/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

//For Routing
import {Login} from './login/login';
import {Header} from './layout/header/header.component';
import {UnitServices} from './unitservices/unit-services.component';

//Providers
import {DialogService} from './services/dialog.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',    
  styles: [],
  template: require('./app.html'),
  pipes: [],
  providers: [ ...FORM_PROVIDERS , DialogService],
  directives: [ ...ROUTER_DIRECTIVES, Header],
})
@RouteConfig([    
  { path: '/login',   name: 'Login',   component: Login, useAsDefault: true },  
  { // Unit Services child route
    path: '/unitservices/...',
    name: 'UnitServices',
    component: UnitServices
  },
])
export class App {}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
