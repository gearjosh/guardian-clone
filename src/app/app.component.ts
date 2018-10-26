import { Component } from '@angular/core';
import { Story } from './models/story.model';
import { STORIES } from './mocks/stories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guardian-clone';
  storiesArray = STORIES;

}
