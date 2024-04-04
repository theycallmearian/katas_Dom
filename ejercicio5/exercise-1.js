/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. */

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const albumList = document.createElement('ul')

for (const album of albums) {
  const li = document.createElement('li')
  li.textContent = album
  albumList.appendChild(li)
}

document.body.append(albumList)
