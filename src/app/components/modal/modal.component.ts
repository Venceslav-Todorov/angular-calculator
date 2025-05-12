import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouteButtonComponent } from "../route-button/route-button.component";

@Component({
  selector: 'app-modal',
  imports: [RouteButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit()
  }
}
