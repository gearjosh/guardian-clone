import { Component, OnInit } from '@angular/core';
// import { Story } from '../models/story.model';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss'],
  providers: [StoryService]
})
export class HeadlinesComponent implements OnInit {
  stories;
  prioritizedStories;
  topStory;
  p1Stories;
  // p2Stories;
  // p3Stories;

  constructor(private storyService: StoryService) {

  }

  ngOnInit() {
    this.stories = this.storyService.getStories();
    // this.prioritizedStories = this.prioritySorter(this.stories);
    // this.p1Stories = this.prioritizedStories[0];
    // this.topStory = this.p1Stories[0];
  }

  prioritySorter(arrayOfStories) {
    let p1Array;
    let p2Array;
    let p3Array;
    let outputArray = [p1Array, p2Array, p3Array];
    arrayOfStories.forEach((story) => {
      if (story.priority === 1) {
        p1Array.unshift(story);
      } else if (story.priority === 2) {
        p2Array.unshift(story);
      } else {
        p3Array.unshift(story);
      }
    });
    return outputArray;
  };

}
