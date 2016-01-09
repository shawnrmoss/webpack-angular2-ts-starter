import {Component,  OnInit}  from 'angular2/core';
import {Unit, UnitService}   from './unit.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../services/dialog.service';

@Component({
    selector: 'unit-detail',
    styles: [ ],
    template: require('./unit-detail.html')
})
export class UnitDetail implements OnInit, CanDeactivate  {
    
    unit: Unit;
    editName: string;
    editYear: number;            
  
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service:UnitService,        
        private _dialog: DialogService        
    ){}
        
    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getUnit(id).then(unit => { 
            if(unit){
                
                this.editName = unit.name;
                this.editYear = unit.year;
                
                this.unit = unit;
            }
            else { // id not found;
                this.gotoUnits();
            }
        });            
    }
    
    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.unit || this.unit.name === this.editName
                       || this.unit.year === this.editYear  ) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
    }
    
    cancel() {
        this.editName = this.unit.name;
        this.editYear = this.unit.year;
        this.gotoUnits();
    }
    
    save() {
        this.unit.name = this.editName;
        this.unit.year = this.editYear;
        this.gotoUnits();
    }
    
    gotoUnits() {
        // Like <a [routerLink]="['Heroes']">Heroes</a>
        this._router.navigate(['Units']);
    }
}
