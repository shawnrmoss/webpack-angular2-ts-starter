import {Injectable} from 'angular2/core';

export class Unit {
    constructor(
        public id: number, 
        public name: string, 
        public year: number 
     ) { }
}

@Injectable()
export class UnitService {
  getUnits() { return unitsPromise; }
  getUnit(id: number | string) {
    return unitsPromise
      .then(units => units.filter(h => h.id === +id)[0]);
  }
}

var UNITS = [
    new Unit(11, 'GMC Canyon', 2016),
    new Unit(12, 'Toyota Taconma', 2016),
    new Unit(13, 'Ford F-150', 2016),
    new Unit(14, 'Chevrolet Colorado',  2016),
    new Unit(15, 'Nissan Titan',  2016),
    new Unit(16, 'Cadillac Escalade',  2016),
    new Unit(17, 'Dynama', 2016),
    new Unit(18, 'Toyota Tundra',  2016),
    new Unit(19, 'GMC Sierra 1500',  2016),
    new Unit(20, 'Chevrolet Silverado 1500',  2016)
];

var unitsPromise = Promise.resolve(UNITS);