import { Component, OnInit } from '@angular/core';
import Story from '../models/story.model';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  constructor(public story1: Story, public story2: Story, public story3: Story, public story4: Story, public story5: Story, public story6: Story, public story7: Story, public story8: Story, public story9: Story, public story10: Story, public story11: Story, public story12: Story, public story13: Story, public story14: Story, public story15: Story, public story16: Story, public story17: Story) { }

  ngOnInit() {
  }

}
