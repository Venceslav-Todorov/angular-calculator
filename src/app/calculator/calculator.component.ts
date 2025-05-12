import { Component } from '@angular/core';
import { CalculateService } from '../services/calculate.service';
import { InputComponent } from '../components/input/input.component';
import { NgFor, NgIf } from '@angular/common';
import { RouteButtonComponent } from "../components/route-button/route-button.component";
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-calculator',
  imports: [InputComponent, NgFor, NgIf, RouteButtonComponent, ModalComponent],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  constructor(private calculateService: CalculateService) { }
  showHistoryModal = false;

  toggleHistoryModal() {
    this.showHistoryModal = !this.showHistoryModal;
  }
  get currentInput(): string {
    return this.calculateService.currentInput;
  }

  get historyLog(): Array<{ input: string, result: string }> {
    return this.calculateService.currentHistory;
  }

  readonly options: Array<string | number> = [
    7, 8, 9, '÷',
    4, 5, 6, '×',
    1, 2, 3, '-',
    0, '.', 'AC', '+', '='
  ];

  isOperator(value: string | number): boolean {
    return this.calculateService.isOperator(value)
  }

  handleOption(option: string | number) {
    this.calculateService.handleOption(option)
  }

  updateInput(value: string) {
    this.calculateService.updateInput(value);
  }

  calculate() {
    this.calculateService.calculate()
  }
}
