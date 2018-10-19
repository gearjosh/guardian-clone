import {Story} from '../models/story.model';
import {STORIES} from './stories';

const stories = STORIES;

export const P1STORIES: Story[] = prioritySorter(STORIES)[0];
