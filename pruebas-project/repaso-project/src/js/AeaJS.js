// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
const dataJson = readFileSync('/Users/pierosantana/dam_2_upgradehub/desarrollo_interfaces/dam_2_desarrollo_interfaces/pruebas-project/repaso-project/src/js/cherry.json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)

/**
Para este ejercicio, vas a implementar una función arrow que manipule una URL dada
siguiendo estos pasos:
1. Recibirá una URL como parámetro. Esta URL corresponderá a un recurso obtenido
desde el objeto json cuando se llame a la función.

2. Separa la URL en función del carácter “/”, generando un array con cada uno de los
segmentos que la componen.
3. 4. Convierte todos los elementos del array generado anteriormente a mayúsculas.
La función debe devolver el array resultante
Tras realizar la función, llámala utilizando una propiedad del objeto JSON que contenga una
URL
 */



const manipularURL = (url) => {
  const urlArray = url.split('/')
  const urlMayu = []
  for (const elem of urlArray) {
    urlMayu.push(elem.toUpperCase())
  }

  return urlMayu
}

const url = data.firmness.url

// console.log(manipularURL(url))

/*
Ejercicio 2 (2 pts)
Para este ejercicio, tu tarea es crear una función expresiva anónima en JavaScript que siga
estos pasos:
1. Recibe un parámetro que será el objeto general JSON cargado.
2. Convierte todos los valores del objeto en un array.
3. Filtra aquellos valores que sean de tipo objeto y que además la propiedad .url no
sea undefined
4. Devuelve el array con los objetos filtrados.
5. Itera sobre el array filtrado y extraer las URLs, devolviendo un array con las URLs
obtenidas.
*/

const ejercicio = function (data) {
  const arrayData = Object.values(data)
  // console.log(data)
  // console.log(arrayData)

  const objetos = arrayData.filter(elem => typeof elem === 'object')

  // console.log(objetos)
}

ejercicio(data)

/*
Ejercicio 3 (1.5 pts)
Para este ejercicio, tu tarea es crear una función autoejecutable (IIFE) que:
1. Reciba por parámetro el array flavors.
2. Determine si alguno de los elementos del array tiene una potency distinta de 0 y lo
muestre por consola.
3. Calcule la suma total de todas las potencias de los elementos del array y la
muestre por consola.
*/

;(function (flavors) {
  let suma = 0
  flavors.forEach(element => {
    if (element.potency !== 0) {
      // console.log(element)
    }
    suma += element.potency
  })

  // console.log('Potencias sumadas: ' + suma)
})(data.flavors)

/*
Ejercicio 4 (2 pts)
Para este ejercicio, tu tarea es crear una función arrow llamda filtrarNúmeros en JavaScript
que:
1. Reciba el objeto data como parámetro.
2. Convierta el objeto en un array de pares [clave, valor].
3. Filtre solo aquellos elementos cuyo valor sea de tipo Number.
4. Convierta el array filtrado nuevamente a un objeto.
5. Recorra el objeto final y muestre por consola cada clave y su valor.
*/

const filtrarNumeros = (objeto) => {
  const arrayObjeto = Object.entries(objeto)

  const arrayNumbers = []

  arrayObjeto.forEach(elem => {
    for (const clave in elem) {
      if (typeof elem[clave] === 'number') {
        arrayNumbers.push(elem)
      }
    }
  })

  const objetoNumbers = Object.fromEntries(arrayNumbers)

  for (const clave in objetoNumbers) {
    console.log(clave + ': ' + objetoNumbers[clave])
  }
}

// filtrarNumeros(data)

/*
Ejercicio 5 (1.5 pts)
Para este ejercicio, tu tarea es crear una función declarativa llamada procesarFlavors que:
1. Reciba el array flavors como parámetro.
2. Extraiga los nombres de los sabores y los guarde en un nuevo array.
3. Ordene alfabéticamente los nombres.
4. Una los nombres ordenados utilizando "->" como separador.
5. Devuelva la String resultante y la muestre por terminal.
*/

function procesarFlavors (arrayF) {
  const names = arrayF.map((elem) => elem.flavor.name)
  names.sort()
  const union = names.join('->')

  return union
}

// console.log(procesarFlavors(data.flavors))

/*
Para este ejercicio, tu tarea es crear una función arrow llamada contarVocales que:
1. Reciba como parámetro el array con las claves del objeto JSON.
2. Separa cada clave en letras individuales.
3. Aplana el array resultante en una única lista de caracteres.
4. Cuente cuántas vocales (a, e, i, o, u) hay en el array final.
5. Muestre el número total de vocales por terminal.
*/

const contarVocales = (clavesArray) => {
  const arrayLetras = clavesArray.map(elem => elem.split(''))

  const arrayVocales = arrayLetras.flat()
  let contador = 0
  for (const vocal of arrayVocales) {
    if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
      contador++
    }
  }

  console.log(contador)
}

contarVocales(Object.keys(data))
