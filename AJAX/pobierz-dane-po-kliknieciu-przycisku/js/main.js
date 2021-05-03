let button = document.querySelector('button');


const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            let userId = document.getElementById("userId");
            userId.innerText = `User id: ${data.userId}`;

            let id = document.getElementById("id");
            id.innerText = `Id: ${data.id}`;

            let title = document.getElementById("title");
            title.innerText = `Title: ${data.title}`;

            let body = document.getElementById("body");
            body.innerText = `Body: ${data.body}`;
            
        })
        .catch(error => {
            console.error(error);
        })
}



button.addEventListener('click', getData);


