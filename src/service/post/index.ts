import axios from 'axios';
import consoleDebug from '../../util/debugMode';

const URL = 'https://api.reddit.com/r/pics/hot.json';

export const fetchPosts = () => {
  return axios({
    method: 'get',
    url: URL,
  }).then(response => {
    consoleDebug('fetchPosts', response.data.data);
    return response.data.data;
  });
};
