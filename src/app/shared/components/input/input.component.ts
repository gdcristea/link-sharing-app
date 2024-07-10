import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { TypeOfInput } from '../../types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  /**
   * FormControl for the input. Used to manage the value and validation state.
   */
  @Input() inputFormControl!: UntypedFormControl;

  /**
   * Placeholder text for the input.
   */
  @Input() inputPlaceholder!: string;

  /**
   * ID attribute for the input. Useful for associating with a <label> element.
   */
  @Input() inputId!: string;

  /**
   * Label text displayed above the input.
   */
  @Input()
  inputLabel!: string;

  /**
   * Type of the input (e.g., 'email', 'password').
   */
  @Input()
  inputType!: TypeOfInput;

  /**
   * Event emitted when the input loses focus.
   */
  @Output()
  blurEvent: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

  /**
   * Emits an event when the input loses focus.
   *
   * @param event - The blur event object.
   */
  onBlur(event: FocusEvent): void {
    this.blurEvent.emit(event);
  }

  /**
   * Return the appropriate icon based on the input type
   */
  getIconSrc(): string {
    switch (this.inputType) {
      case 'email':
        return 'assets/images/icon-email.svg';
      case 'password':
        return 'assets/images/icon-password.svg';
    }
  }

  //TODO: Add min length for password
  /**
   * Return the error message base on the validation error type
   */
  getError(): string | null {
    if (this.inputFormControl.errors) {
      if (this.inputFormControl.errors['required']) {
        return 'Can’t be empty';
      } else if (this.inputFormControl.errors['email']) {
        return 'Make sure the email is valid';
      }
    }
    return null;
  }
}
