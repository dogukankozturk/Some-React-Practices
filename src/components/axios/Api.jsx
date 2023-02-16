import axios from "axios";

const ACCESS_KEY = "Client-ID DaLrHcIoVz3Dj_TKXgWTGOAMhbq-IDkrsANsajLQWAE";
//const SECREY_KEY = "zxhxJeetAdEUoHrYUuhbgAOZ6mTmqerp32ySMGwf12U";

const searchImages = async (search) => {
  const result = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: ACCESS_KEY,
    },
    params: {
      query: search,
    },
  });
  return result.data.results;
};

export default searchImages;
