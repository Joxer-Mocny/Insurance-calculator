import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Insurance-calculator';

  // change visibility
  inboundClick = true || false;
  ClickHideButton1 = true || false;
  ClickHideButton2 = true || false;

  // for showing in input
  toShowSumarTotal = '';
  toShowSumar = '';
  toSumar = '';
  toShow = '';
  curVal = '';
  curValSpec = '';
  curValSpecTotal = '';
  // for deleting stuff
  clear() {
    this.toShowSumarTotal = '';
    this.toShowSumar = '';
    this.toSumar = '';
    this.toShow = '';
    this.curVal = '';
    this.curValSpec = '';
    this.curValSpecTotal = '';
  }

  back() {
    this.curVal = this.curVal.slice(0, -1);
    this.toShow = this.curVal;
  }
  back1() {
    this.toShowSumar = '';
  }

  back2() {
    this.toShowSumarTotal = '';
  }

  // calculating values
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

  inputCelkomshow(value?: any) {
    this.curValSpecTotal = this.curValSpec + this.curVal;
    this.toShowSumarTotal = this.curValSpecTotal;
  }
 

}
