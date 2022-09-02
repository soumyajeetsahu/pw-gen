import { Component, OnInit } from '@angular/core';
import { WikipediaService } from 'src/app/wikipedia.service';

@Component({
  selector: 'app-wsearch',
  templateUrl: './wsearch.component.html',
  styleUrls: ['./wsearch.component.scss'],
})
export class WsearchComponent implements OnInit {
  pages: any;
  inputLength = 0;
  constructor(private wikiservice: WikipediaService) {}

  ngOnInit(): void {}

  onUserInput(input: string) {
    this.wikiservice.search(input).subscribe((res) => {
      this.pages = res;
    });
  }

  checkUserInput(inputLength: number) {
    this.inputLength = inputLength;
  }
}
