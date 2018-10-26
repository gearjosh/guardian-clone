import { Component, OnInit } from '@angular/core';
// import { Story } from '../models/story.model';
import { StoryService } from '../story.service';
// import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss'],
  providers: [StoryService]
})
export class HeadlinesComponent implements OnInit {
  stories;
  // stories: FirebaseListObservable<any[]>;
  topStory;
  interestingStory;
  p1Stories = [];
  p2Stories = [];
  p3Stories = [];

  constructor(private storyService: StoryService) {}



  ngOnInit() {

    this.storyService.getStories().subscribe(dataNow => {

      this.stories = dataNow;

      this.stories.forEach((story) => {
        if (story.priority == 1) {
          this.p1Stories.unshift(story);
        } else if (story.priority == 2) {
          this.p2Stories.unshift(story);
        } else {
          this.p3Stories.unshift(story);
        }
      });

      this.topStory = this.p1Stories[0];
      this.interestingStory = this.p2Stories[0];

      // console.log(`all stories: ${this.stories}`);
      // console.log(`p1 stories: ${this.p1Stories}`);
      // console.log(`p2 stories: ${this.p2Stories}`);
      // console.log(`p3 stories: ${this.p3Stories}`);
      // console.log(this.topStory);
      // console.log(this.interestingStory);
    })


  }

}
