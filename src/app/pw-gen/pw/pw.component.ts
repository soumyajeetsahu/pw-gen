import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw',
  templateUrl: './pw.component.html',
  styleUrls: ['./pw.component.scss'],
})
export class PwComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClick() {
    const numbers = '123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumber() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  OnChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
