import { STORIES } from '../mocks/stories';

export default class Story {

  constructor(public headline: string, public lead: string, public body: string, public byline: string, public topics: string[], public priority: number = 3) { };

  stories = STORIES;

  prioritySorter(stories) {
    let p1Array: Story[];
    let p2Array: Story[];
    let p3Array: Story[];
    stories.forEach((Story) => {
      let outputArray = [p1Array, p2Array, p3Array];
      if (Story.priority === 1) {
        p1Array.push(Story);
      } else if (Story.priority === 2) {
        p2Array.push(Story);
      } else {
        p3Array.push(Story);
      }
      return outputArray;
    });
  };

  findRelated(inputStory: Story, stories: Story[]) {
    const topicsToMatch: string[] = inputStory.topics;
    let outputArray: Story[];
    topicsToMatch.forEach((topic) => {
      stories.forEach((currentStory) => {
        if (outputArray.includes(currentStory)) {
          return;
        } else if (currentStory.topics.includes(topic)) {
          outputArray.push(currentStory);
        } else {
          return;
        }
      });
    });
    return outputArray;
  };

}
