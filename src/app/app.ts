/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {Home} from './home/home';
import {Login} from './login/login';
import {Units} from './units/units.component';

import '../assets/styles/main';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES ],
  pipes: [],
  styles: [],
  template: require('./app.html')
})
@RouteConfig([    
  { path: '/', name: 'Index', component: Home },
  { path: '/login',   name: 'Login',   component: Login },
  { path: '/units',   name: 'Units',   component: Units }  
])
export class App {
  name = 'Shawns mother fucking header';  
  constructor() {
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
