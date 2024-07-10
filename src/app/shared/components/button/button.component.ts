import {Component, Input} from '@angular/core';
import {ButtonType} from "../../types";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /**
   * Button type
   */
  @Input() type!: ButtonType;

  /**
   * Is button disabled? 'False' by default.
   */
  @Input() isDisabled = false;
}
