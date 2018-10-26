export class Story {

  constructor(public headline: string, public lead: string, public body: string, public byline: string, public topics: string[], public priority: number = 3) {};

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
