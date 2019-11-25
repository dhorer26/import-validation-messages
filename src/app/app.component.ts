import { Component } from '@angular/core';
import { maxLength, registrationValidationMessages } from './validation-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  maxLength = maxLength;
  registrationValidationMessages = registrationValidationMessages;
}
