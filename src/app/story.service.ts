import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  stories: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.stories = this.database.list('stories');
  }

  getStories() {
    return this.stories;
  }

  getTopStory() {
    this.stories.forEach((story) => {

    })
  }
}
