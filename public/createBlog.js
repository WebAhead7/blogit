const form = document.querySelector('form');
const username = document.querySelector('.username');
const myname = document.querySelector('.myname');
const post = document.querySelector('.post');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const myObj = {
    username: username.value,
    myname: myname.value,
    post: post.value,
  };
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(myObj),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => {
      if (response === 'batata') {
        location.replace('/');
      }
    })
    .catch((err) => {
      console.error('Something went wrong during new post submission: ' + err);
    });
});
