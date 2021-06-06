
import axios from 'axios';



const getStory = async (id) => {
  try {
    const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type) => {
  try {
    var start=0;
    var end=20;
    const { data: storyIds } = await axios.get(`https://hacker-news.firebaseio.com/v0/${type}stories.json`);
    const stories = await Promise.all(storyIds.slice(start, end).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};