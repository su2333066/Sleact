import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data); // fetcher를 활용하여 서버에서 받아 온 데이터를 가공하여 사용할 수 있다.

export default fetcher;
