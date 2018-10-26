export class Story {

  constructor(public headline: string, public lead: string, public body: string, public byline: string, public topics: string[], public priority: number = 3) {};

  // prioritySorter(stories) {
  //   let p1Array: Story[];
  //   let p2Array: Story[];
  //   let p3Array: Story[];
  //   stories.forEach((Story) => {
  //     let outputArray = [p1Array, p2Array, p3Array];
  //     if (Story.priority === 1) {
  //       p1Array.push(Story);
  //     } else if (Story.priority === 2) {
  //       p2Array.push(Story);
  //     } else {
  //       p3Array.push(Story);
  //     }
  //     return outputArray;
  //   });
  // };

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

  // compareTopStories(a, b) {
  //   const topicsA = a.topics.length;
  //   const topicsB = b.topics.length;
  //
  //   let comparison: number = 0;
  //
  //   if (topicsA > topicsB) {
  //     comparison = 1;
  //   } else if (topicsB > topicsA) {
  //     comparison = -1
  //   }
  //   return comparison;
  // };
  //
  // findTopStory(stories: Story[]) {
  //   let topStory: Story;
  //   let topStoryPossibilities: Story[] = [];
  //   // let topicScores: number[];
  //
  //   stories.forEach((story: Story) => {
  //     if (story.priority === 1) {
  //       topStoryPossibilities.push(story);
  //     } else {
  //       return;
  //     }
  //   });
  //
  //   topStoryPossibilities.sort(this.compareTopStories);
  //
  //   return topStory;
  // };

}
