import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Insurance-calculator';


  inboundClick = true || false;
  ClickHideButton = true || false;
  

  toShowSumarTotal = '';
  toShowSumar = '';
  toSumar = '';
  toShow = '';
  curVal = '';
  curValSpec = '';
  curValSpecTotal = '';
  
  clear() {
    this. toShowSumarTotal = '';
    this.toShowSumar = '';
    this.toSumar = '';
    this.toShow = '';
    this.curVal = '';
    this.curValSpec = '';
    this.curValSpecTotal = '';
  }

  back(){
    this.curVal = this.curVal.slice(0,-1)
    this.toShow = this.curVal
  }
  back1(){
    this.toShowSumar = '';
  }

  back2(){
    this. toShowSumarTotal = '';
  }

  writeToInput(value?: any) {
    this.curVal = this.curVal + value;
    this.toShow = this.curVal;
  }

  show() {
    this.toShow = eval(this.curVal);
    this.curVal = this.toShow;
  }

  writeToInputSpec(value?: string) {
    this.curValSpec = this.curVal + value;
    this.toShowSumar = this.curValSpec;
  }

  showSumar() {
    this.toShowSumar = eval(this.curValSpec);
    this.curValSpec = this.toShowSumar;
  }

  inputCelkomshow(value?: string) {
    this.curValSpecTotal = this.curValSpec + this.curVal ;
    this.toShowSumarTotal = this.curValSpecTotal;
  }

}
