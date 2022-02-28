import axios from "axios";

const comments_url = "https://jsonplaceholder.typicode.com/comments";

export const fetchComments = async () =>
  await axios({
    method: "GET", //you can set what request you want to be
    url: comments_url,
    data: null,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  }).then((data) => {
    // console.log(data.data);
    return data.data
  });
