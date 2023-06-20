import axios from 'axios';

const URL = 'https://api.reddit.com/r/pics/hot.json';

export const fetchPosts = () => {
  return axios({
    method: 'get',
    url: URL,
  }).then(response => {
    return response.data.data;
  });
};
