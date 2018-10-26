import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {


  constructor() {

  }

  prioritySorter(arrayOfStories) {
    let p1Array: any[];
    let p2Array: any[];
    let p3Array: any[];
    arrayOfStories.forEach((story) => {
      let outputArray = [p1Array, p2Array, p3Array];
      if (story.priority === 1) {
        p1Array.push(story);
      } else if (story.priority === 2) {
        p2Array.push(story);
      } else {
        p3Array.push(story);
      }
      return outputArray;
    });
  };

  ngOnInit() {

  }

}
