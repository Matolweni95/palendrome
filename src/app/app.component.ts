import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { BlankComponent } from './blank/blank.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm!: FormGroup;
  testValue: any;
  splitValue:any;
  reverse: any;
  test:any;

  constructor (private fb: FormBuilder, public dialog: MatDialog){
    this.myForm = this.fb.group({
      value: [''], 
      
    });
  }

  check(){
    let type = (<HTMLInputElement>document.getElementById('value')).value;
    this.testValue = type.toLocaleLowerCase();
    this.splitValue = this.testValue.split('').reverse().join("");

    if(this.splitValue == this.testValue){
      this.dialog.open(SuccessComponent);
    }else if(this.splitValue != this.testValue){
      this.dialog.open(FailComponent);
    }else {
      this.dialog.open(BlankComponent);
    }
    console.log(this.testValue);
    console.log(this.splitValue);
  }
}
