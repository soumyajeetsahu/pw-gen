import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  @Input() pages:any =[];
  @Input() inputLength :any;
  constructor() { }

  ngOnInit(): void {
  }

}
