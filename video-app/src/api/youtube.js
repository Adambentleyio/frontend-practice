import axios from 'axios'

const KEY = 'AIzaSyCbNPFzcFUu4HhJw-HGQIyKOoEuhqmFivg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'Video',
        maxResults: 5,
        key: KEY
    }
});