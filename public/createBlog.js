const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  fetch("/submit", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  })
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.error(error));
});