import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../models/story.model';
import { STORIES } from '../mocks/stories';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  storiesArray = STORIES;

  constructor() {

  }

  ngOnInit() {
    console.log(this.storiesArray);
  }

}
