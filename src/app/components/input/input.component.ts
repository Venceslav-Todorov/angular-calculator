import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() enterPressed = new EventEmitter<void>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // allow only digits, operators and decimal point
    value = value.replace(/[^0-9+\-×÷*/.]/g, '');

    // prevent multiple operators in a row (e.g., +-, ×÷, etc.)
    value = value.replace(/([+\-×÷*/.]){2,}/g, match => match[0]);

    // prevent multiple decimals in a single number
    value = value.replace(/(\.\d*)\./g, '$1');

    input.value = value;
    this.valueChange.emit(value);
  }

  onInputFocus() {
    // only clear if the value is '0'
    if (this.value === '0') {
      this.value = '';
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.enterPressed.emit();
    }
  }
}
