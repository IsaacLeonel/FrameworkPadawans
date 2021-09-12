// API POSTAGENS
let pagina = 0;
let postagensM = document.getElementById('postagens');
let tela = '';
let cont = 0;
for (i = 0; i < 100; i++) {
    pagina = pagina + 1
    postagensURL = `https://jsonplaceholder.typicode.com/posts/${pagina}`;

    fetch(postagensURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (i = 0; i < 1; i++) {
                cont = cont + 1
                tela = tela + `
               
                <div class="perfil">
                                <div class="cont"> <p> ${cont}</p></div>
                                <div class="Title"><h2>${data.title} </h2></div>
                                <div class="body"><p>${data.body} </p></div>
                            </div>      
                `;
            }
            postagensM.innerHTML = tela;
        })

}


// API PHOTOS
let photosN = 0;
let photosM = document.getElementById('photos');
let contPhotos = 0;
let photoTela = '';
// PAGINAS



// document.getElementById("goy").innerHTML = "";
for (i = 0; i < 300; i++) {

    photosN = photosN + 1
    photosURL = `https://jsonplaceholder.typicode.com/photos/${photosN}`;

    fetch(photosURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (i = 0; i < 1; i++) {
                contPhotos = contPhotos + 1;
                photoTela = photoTela + `<div class="card">
                <div>
                <div class="content">
                <div>
                                           <img class="thumb" src="${data.thumbnailUrl}">
                                           <p> Album: ${data.albumId}</p>
                                    </div class="titlefoto">
                    <h2>${data.title}</h2>
                </div>
            </div>
                
            <div class="imgBox">
                <img src="${data.url}">
            </div>
           
        </div>`
            }
            photosM.innerHTML = photoTela;
        })

}






















//To Do's

let todosM = document.getElementById('todos');
let conttodos = 0;
let todosTela = '';
let todosN = 0;

let todos_checkbox = document.getElementById('all');
let finalizados_checkbox = document.getElementById('finalizados');
let Nfinalizados_checkbox = document.getElementById('NFinalizados');



document.getElementById("filtrar").onclick = function verificarCheckBox() {

    if (todos_checkbox.checked) {

        for (i = 0; i < 200; i++) {
            todosN = todosN + 1
            todosURL = `https://jsonplaceholder.typicode.com/todos/${todosN}`;

            fetch(todosURL)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    for (i = 0; i < 1; i++) {
                        conttodos = conttodos + 1;
                        if (data.completed == true) {
                            todosTela = todosTela + `  <tr>
                    <td> ${conttodos} </td>
                    <td> <input type="checkbox"  checked/> </td>
                    <td> ${data.userId}</td>
                    <td> ${data.title}</td>
                </tr>`
                        }
                        if (data.completed == false) {
                            todosTela = todosTela + `  <tr>
                            <td> ${conttodos} </td>
                            <td> <input type="checkbox"  /> </td>
                            <td> ${data.userId}</td>
                            <td> ${data.title}</td>
                        </tr>`

                        }


                    }
                    todosM.innerHTML = todosTela
                })
        }
    } else if (finalizados_checkbox.checked) {


        // finalizados

        for (i = 0; i < 200; i++) {
            todosN = todosN + 1
            todosURL = `https://jsonplaceholder.typicode.com/todos/${todosN}`;

            fetch(todosURL)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    for (i = 0; i < 1; i++) {
                        conttodos = conttodos + 1;
                        if (data.completed == true) {
                            todosTela = todosTela + `  <tr>
                    <td> ${conttodos} </td>
                    <td> <input type="checkbox"  checked/> </td>
                    <td> ${data.userId}</td>
                    <td> ${data.title}</td>
                </tr>`
                        }
                    }
                    todosM.innerHTML = todosTela
                })
        }


    } else
    if (Nfinalizados_checkbox.checked) {

        // Não Finalizados

        for (i = 0; i < 200; i++) {
            todosN = todosN + 1
            todosURL = `https://jsonplaceholder.typicode.com/todos/${todosN}`;

            fetch(todosURL)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {

                    for (i = 0; i < 1; i++) {
                        conttodos = conttodos + 1;

                        if (data.completed == false) {
                            todosTela = todosTela + `  <tr>
                            <td> ${conttodos} </td>
                            <td> <input type="checkbox"  /> </td>
                            <td> ${data.userId}</td>
                            <td> ${data.title}</td>
                        </tr>`

                        }
                    }
                    todosM.innerHTML = todosTela
                })
        }
    }

}

document.getElementById("Limpar").onclick = function clear() {
    document.location.reload(true);
}