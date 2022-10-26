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
  NonClickButton = true || false;
  NonCLickButton2 = true || false;

  // for showing in input
  toShowSumarTotal = '';
  toShowSumar = '';
  toSumar = '';
  toShow = '';
  curVal = '';
  curValSpec = '';
  curValSpecTotal = '';
  // for deleting stuff

  refresh(): void {
    window.location.reload();
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

  back3(){
    this.toShow = '';
    this.curVal = '';
  }
  back4(){
    
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
