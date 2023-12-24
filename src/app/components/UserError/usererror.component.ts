import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-error',
  templateUrl: './usererror.component.html',
})
export class UserErrorComponent {
  Display_Message: string = '';
  Error_Field: string = '';
  Error_Message: string = '';
  Hint: string = '';
  @Output() resaveFormData: EventEmitter<any>= new EventEmitter();

  constructor() {
  }

  // Validation display.
  validationLog(errorField: string, errorMessage: string, hint: string): void {
    this.Error_Field = errorField;
    this.Hint = hint;
    this.Error_Message = errorMessage;
    this.Display_Message = this.Error_Field + ': ' + this.Error_Message + '(Hint: ' + this.Hint + ')' + '<br>' + this.Display_Message;
  }

  // Clear validation from form and update parent event.
  clearValidation(): void {
    this.Display_Message = '';
    this.resaveFormData.emit();
  }
}
