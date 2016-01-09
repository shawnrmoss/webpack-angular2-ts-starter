import {Component, OnInit} from 'angular2/core';
import {Unit, UnitService} from './unit.service';
import {Router} from 'angular2/router';


@Component({  
  template: require('./unit-list.html'),  
})
export class UnitList implements OnInit {
  units: Unit[];
  
  constructor(
    private _router: Router,    
    private _service: UnitService) {}
  
  ngOnInit() {
      this._service.getUnits().then(units => this.units = units)
  }
    
  onSelect(unit: Unit) { 
      this._router.navigate( ['UnitDetail', { id: unit.id }] );
  }
}