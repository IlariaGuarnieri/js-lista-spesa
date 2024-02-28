const list = ["pane", "latte", "pasta", "verdura", "frutta", "noci"];

let counter = 0;

// const output = " ";

// while  ( contatore < listaSpesa.lenght){
//   listaSpesa.innerHTML += ``
// }

const listCourses = document.querySelector ('.list');
console.log(listCourses);


  while( counter < list.length){
    listCourses.innerHTML += ` <li>${list[counter]}<li>`;

    counter++;
  }

  counter++;