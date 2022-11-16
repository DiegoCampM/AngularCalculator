import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  screen = '0';
  firstValue: number | any = null;
  action: string | null = null;

  onNumberPress(val: { toString: () => string; }) {
    if (this.screen === '0') {
      this.screen = val.toString();
    } else {
      this.screen = `${this.screen}${val}`;
    }
  }

  onOperatorPress(action: string | null) {
    this.firstValue = parseFloat(this.screen);
    this.action = action;
    this.screen = ' ';
  }

  onIgualPress() {
    const a = parseInt(this.firstValue);
    const b = parseFloat(this.screen);

    let result = 0;
    if (this.action === 'multiplicar') {
      result = a * b;
    }
    else if (this.action === 'dividir') {
      result = a / b;
    }
    else if (this.action === 'sumar') {
      result = a + b;
    }
    else if (this.action === 'restar') {
      result = a - b;
    }

    this.firstValue = result;
    this.screen = result.toString();
  }
}
