import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-route-button',
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './route-button.component.html',
  styleUrl: './route-button.component.scss'
})
export class RouteButtonComponent {
  @Input() routeTo: string = '';
  @Input() label: string = '';
  @Input() reversed: boolean = false
}
