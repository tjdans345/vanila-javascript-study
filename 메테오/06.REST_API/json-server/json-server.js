
const getFunction = () => {

    fetch("http://localhost:3000/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
      

          fetch("http://localhost:3000/comments/1")
            .then((response) => response.json())
            .then((json) => console.log(json));

                fetch("http://localhost:3000/comments?postId=1")
                  .then((response) => response.json())
                  .then((json) => console.log(json));

}

const postFuction = () => {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "The Great",
      author: "Jeremy",
    }),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    // .then((json) => console.log(json));
  return false;
}

const putFunction = () => {
  fetch("http://localhost:3000/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "The Great Jeremy222",
      author: "Jeremy",
    }),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json())
  .then((json) => console.log(json));
  return false;
};

// postFuction()
// putFunction()
getFunction()