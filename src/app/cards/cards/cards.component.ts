import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  posts = [
    {
      title: 'John Smith',
      imageUrl: 'https://bulma.io/images/placeholders/1280x960.png',
      username: '@johnsmith',
      content: '',
    },
    {
      title :'Tom Holland',
      imageUrl:'https://bulma.io/images/placeholders/1280x960.png',
      username:'@tomholland',
      content:''
    },
    {
      title :'Dan Egan',
      imageUrl:'https://bulma.io/images/placeholders/1280x960.png',
      username:'@danegan',
      content:''
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
