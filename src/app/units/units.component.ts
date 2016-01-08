import {Component} from 'angular2/core';

import './units';

interface Unit {
  id: number;
  name: string;
  year: string;
}


var TOP10UNITS: Unit[] = [
  { 'id': 11, 'name': 'GMC Canyon', 'year': '2016' },
  { 'id': 12, 'name': 'Toyota Taconma', 'year': '2016' },
  { 'id': 13, 'name': 'Ford F-150', 'year': '2016' },
  { 'id': 14, 'name': 'Chevrolet Colorado', 'year': '2016' },
  { 'id': 15, 'name': 'Nissan Titan', 'year': '2016' },
  { 'id': 16, 'name': 'Cadillac Escalade', 'year': '2016' },
  { 'id': 17, 'name': 'Dynama', 'year': '2016' },
  { 'id': 18, 'name': 'Toyota Tundra', 'year': '2016' },
  { 'id': 19, 'name': 'GMC Sierra 1500', 'year': '2016' },
  { 'id': 20, 'name': 'Chevrolet Silverado 1500', 'year': '2016' }
];

@Component({
  selector: 'unit_list',
  template: require('./units.html'),
  styles:[]
})
export class Units {
  public title = 'My Units';
  public units = TOP10UNITS;
  public selectedUnit: Unit;
  onSelect(unit: Unit) { this.selectedUnit = unit; }
}