/* 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const countriesList = document.createElement('ul')

for (const countrie of countries) {
  const li = document.createElement('li')
  li.textContent = countrie
  countriesList.appendChild(li)
}

document.body.append(countriesList)

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const elementosARemover = document.querySelectorAll('.fn-remove-me')
for (const elemento of elementosARemover) {
  elemento.remove()
}

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos  en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const carsList = document.createElement('ul')

for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  carsList.appendChild(li)
}

const divIn = document.querySelector('[data-function="printHere"]')

divIn.append(carsList)

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const countrie2 of countries2) {
  const div = document.createElement('div')
  const img = document.createElement('img')
  const h4 = document.createElement('h4')
  h4.textContent = countrie2.title
  img.src = countrie2.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  document.body.append(div)
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs. */

const destructor = document.createElement('button')
destructor.innerHTML = 'Destruir'

function destruir() {
  const theLastDiv = document.querySelectorAll('div')
  theLastDiv[theLastDiv.length - 1].remove()
}

destructor.addEventListener('click', destruir)
document.body.append(destructor)

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html. */
const forAllDivs = document.querySelectorAll('div')

for (const div of forAllDivs) {
  const button = document.createElement('button')
  button.textContent = '¡Borrame a mi!'
  button.addEventListener('click', (e) => e.target.parentElement.remove())
  div.appendChild(button)
}
