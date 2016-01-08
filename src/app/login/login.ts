import {Component} from 'angular2/core';

interface LoginBindingModel {
  customerName: string;
  email: string;
  password: string;
}

//Import the styles
import './login.scss';

@Component({
    selector: 'login',
    styles: [ ],
    template: require('./login.html')
})

export class Login { 
    
    submitted = false;
        
    public loginBindingModel: LoginBindingModel = {
        customerName: '',
        email: '',
        password: ''
    }
    
    onSubmit(loginBindingModel: LoginBindingModel) { 
        this.submitted = true;
        this.loginBindingModel = loginBindingModel; 
                
    }
}