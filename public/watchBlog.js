const table = document.querySelector('table');

fetch('/data', {
  method: 'POST',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach((value) => {
      var createtr = document.createElement('tr');
      var createtdusername = document.createElement('td');
      var createtdname = document.createElement('td');
      var createtdpost = document.createElement('td');
      createtdusername.textContent = value.username;
      createtdname.textContent = value.myname;
      createtdpost.textContent = value.post;
      table.appendChild(createtr);
      createtr.appendChild(createtdusername);
      createtr.appendChild(createtdname);
      createtr.appendChild(createtdpost);
    });
  });
