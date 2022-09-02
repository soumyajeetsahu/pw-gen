import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  term = '';
  @Output() submitted = new EventEmitter<string>();
  @Output() inputLength = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onInput(value: string) {
    this.term = value;
    this.inputLength.emit(this.term.length)
  }

  OnFormSubmit(event: Event) {
    event.preventDefault();
    if (this.term) this.submitted.emit(this.term);
  }
}
