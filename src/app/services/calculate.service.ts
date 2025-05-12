import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private input: string = '0'
  private history: Array<{ input: string, result: string }> = [];

  get currentInput(): string {
    return this.input;
  }

  get currentHistory(): Array<{ input: string, result: string }> {
    return this.history;
  }

  handleOption(option: string | number) {
    if (option === 'AC') {
      this.input = '';
    } else if (option === '=') {
      this.calculate();
    } else {
      const lastChar = this.input.slice(-1);

      // prevent double operators like +-, */ etc
      if (typeof option === 'string' && this.isOperator(option) && this.isOperator(lastChar)) {
        // we replace the old operator with the new one
        this.input = this.input.slice(0, -1) + option;
        return;
      }

      // prevent adding multiple decimal points
      if (option === '.' && this.input.includes('.')) {
        return;
      }

      this.input += option.toString();
    }
  }

  isOperator(value: string | number): boolean {
    return ['+', '-', '×', '÷'].includes(value.toString());
  }

  updateInput(value: string) {
    if (value.endsWith('=')) {
      // we remove the '=' from the end of the input so it can b calculated
      this.input = value.slice(0, -1);
      this.calculate();
    } else {
      this.input = value;
    }
  }

  addLog(finalInput: string) {
    // if its more or equal than 20 remove the first log
    if (this.history.length >= 20) {
      this.history.shift();
    }
    this.history.push({ input: finalInput, result: this.input })
  }

  calculate() {
    try {
      // replace the display operators (÷, ×) to real operators (/, *)
      const finalInput = this.currentInput
        .replace(/÷/g, '/')
        .replace(/×/g, '*');

      if (finalInput !== '0') {
        this.input = evaluate(finalInput).toString();
      }

      this.addLog(finalInput)
    } catch {
      this.input = '0';
    }
  }

  constructor() { }
}
