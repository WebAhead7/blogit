const addBlog = document.getElementById("addBlog");
const form = document.querySelector("form");
const username = document.getElementById("myUsername");
const name = document.getElementById("myName");
const textArea = document.getElementById("myTextArea");
const searchBlogs = document.getElementById("searchBlogs");


//send create blog (add blog buttom) to server
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const objData = {
        username: username.value,
        name: name.value,
        textArea: textArea.value
    };
    fetch("localHost:3000/submit", {
        method: "POST",
        body: JSON.stringify(objData),
        headers: { "content-type": "application/json" },
    })
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(error => console.error(error));

})



// //testing the container of the blogs (watchBlog.html)-->(this code must be in ".then" of the get fetch from server )
// const arr = [{ username: "jerry", name: "jiries", blog: "hello world" }];
// arr.forEach(user => {
//     console.log(user);
//     const paraBlog = document.createElement('p');
//     const paraUserName = document.createElement('div');
//     const paraName = document.createElement('div');

//     const paraDiv = document.createElement('div');
//     paraDiv.id = "div2";
//     paraUserName.style.border = "red";
//     paraUserName.textContent = user.username;
//     paraName.textContent = user.name;
//     paraBlog.textContent = user.blog;
//     // const paraContainer = document.createElement('.container');
//     paraDiv.appendChild(paraBlog);
//     paraDiv.appendChild(paraUserName);
//     paraDiv.appendChild(paraName);
//     // paraContainer.appendChild(paraDiv);
//     const container = document.querySelector(".container");
//     container.appendChild(paraDiv);

// });

//receive blogs from the server
// fetch("/getdata")
//     .then(response => {
//         if (!response.ok) throw new Error(response.status);
//         return response.json();

//     })

//     .then(data => {
// arr.forEach(user => {
//     console.log(user);
//     const paraBlog = document.createElement('p');
//     const paraUserName = document.createElement('div');
//     const paraName = document.createElement('div');

//     const paraDiv = document.createElement('div');
//     paraDiv.id = "div2";
//     paraUserName.style.border = "red";
//     paraUserName.textContent = user.username;
//     paraName.textContent = user.name;
//     paraBlog.textContent = user.blog;

//     paraDiv.appendChild(paraBlog);
//     paraDiv.appendChild(paraUserName);
//     paraDiv.appendChild(paraName);

//     const container = document.querySelector(".container");
//     container.appendChild(paraDiv);

// });





//         console.log(data)
//     })
//     .catch(error => console.log(error));


// const form = document.querySelector("form");
// form.addEventListener("submit", event => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
//     fetch("/submit", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { "content-type": "application/json" },
//     })
//         .then(response => {
//             if (!response.ok) throw new Error(response.status);
//             return response.json();
//         })
//         .then(json => console.log(json))
//         .catch(error => console.error(error));
// });
