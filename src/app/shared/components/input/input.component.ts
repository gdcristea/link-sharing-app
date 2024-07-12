import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { TypeOfInput } from '../../types';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage, CommonModule],
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
  @Input() inputId?: string;

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
   * Error message shown to the right of the input
   */
  @Input() errorMessage?: string | null;

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
  };

  /**
   * Mark input as touched on blur event
   */
  onBlur(): void {
    this.inputFormControl.markAsTouched();
    this.inputFormControl.updateValueAndValidity();
  }
}
