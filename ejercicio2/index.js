/* 1.1 Inserta dinamicamente en un html un div vacio con javascript. */
const divEmpty = document.createElement('div')
document.body.append(divEmpty)

/* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

const divFull = document.createElement('div')
const p1 = document.createElement('p')
divFull.appendChild(p1)
document.body.append(divFull)

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

const div = document.createElement('div')

for (let i = 0; i < 6; i++) {
  let p = document.createElement('p')
  console.log(p)
  div.appendChild(p)
}
document.body.append(div)

/* 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

const pDinamic = document.createElement('p')
pDinamic.textContent = 'Soy dinámico!'
document.body.append(pDinamic)

/* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

const myH2 = document.querySelector('h2.fn-insert-here')
myH2.textContent = 'Wubba Lubba dub dub'

/* 1.6 Basandote en el siguiente array crea una lista ul > li con  los textos del array. */

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const appsList = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  appsList.appendChild(li)
}

document.body.append(appsList)

/* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const elementosARemover = document.querySelectorAll('.fn-remove-me')
for (const elemento of elementosARemover) {
  elemento.remove()
}

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild. */

const dosDiv = document.querySelectorAll('div')
const pMiddle = document.createElement('p')
pMiddle.textContent = 'Voy en medio!'
document.body.insertBefore(pMiddle, dosDiv[1])

/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
const insertDiv = document.querySelectorAll('div.fn-insert-here')

for (const div of insertDiv) {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
}
