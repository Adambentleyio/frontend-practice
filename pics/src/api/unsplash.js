import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID ocOFePoblgfxQ8iVJYI9ImI-ydGZXNcRMkxs6hn-bv4'
    }
});

