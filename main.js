/*///////////////// EJERCICIO 1 - CONTAR VOCALES EN UNA CADENA //////////////////*/
// Función:
function contarVocales(cadena) {

    const vocales = "aeiouáéíóú";
    let contador = 0;

    for (let letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

// Resultados por consola:
console.log("EJERCICIO 1: CONTAR VOCALES EN UNA CADENA");
console.log("=======================================================================");
console.log("Solución 1: Cantidad de vocales: " + contarVocales("Felices vacaciones")); //Resultado: 8
console.log("Solución 2: Cantidad de vocales: " + contarVocales("Muerciélago")); //Resultado: 6
console.log("Solución 3: Cantidad de vocales: " + contarVocales("Domingo")); //Resultado: 3
console.log("///////////////////////////////////////////////////////////////////////");
console.log("");

// Comentarios de resolución:
/*Para resolver este ejercicio lo primero que pensamos fue identificar las vocales, es decir, además de 
"aeiou" qué otras variaciones debíamos considerar (mayúsculas, minúsculas, acentuadas, etc.).
Luego para simplificar las comparaciones pensamos que sería mejor trabajar con todas las letras en minúsculas
Una vez determinados los primeros pasos, lo siguiente sería recorrer el array para comparar las vocales con 
las de la lista de vocales identificada al principio.

Para abordar la solución creamos una lista de vocales "aeiouáéíóú" y la almacenamos en la variable "vocales"
luego inicializamos el contador en 0 e iteramos cada carácter de la cadena (pasados a minúsculas) y usamos la
función "includes"  para determinar si era una vocal.
Si es vocal, incrementa el contador.  Y finalmente nuestra función devuelve el valor final del contador.*/

/*///////////////// EJERCICIO 2 - MUESTRA EL MAYOR NÚMERO EN UN ARRAY //////////////////*/
// Función:
function maxNum(array) {
    return Math.max(...array);
}

// Resultados por consola:
console.log("EJERCICIO 2: MUESTRA EL MAYOR NÚMERO EN UN ARRAY");
console.log("=======================================================================");
console.log("Solución 1: Número mayor: " + maxNum([1, 2, 3, 4, 5, 6])); //Resultado: 6
console.log("Solución 2: Número mayor: " + maxNum([0, -10, 1, -4])); //Resultado: 1
console.log("Solución 3: Número mayor: " + maxNum([10, 15, 8])); //Resultado: 15
console.log("///////////////////////////////////////////////////////////////////////");
console.log("");

//Comentarios de resolución:
/*Este ejercicio nos pedía crear una función que iterara un array en JavaScript y devolviera
el número más alto, pensamos distintas maneras de resolverlo, como por ejemplo recorrer el array
manualmente o utilizar funciones existentes. 
Nos resultó más sencillo utilizar la función Math.max devuelve el valor mayor de un conjunto de
números, pero para aplicarlo a un array, primero necesitábamos expandirlo, y esto lo resolvimos
usando el operador spread (...).

Probamos con casos de números negativos y arrays más chicos para comprobar que funcionara bien.*/

/*///////////////// EJERCICIO 3 - CALCULAR LA MEDIA DE UN ARRAY DE NÚMEROS //////////////////*/
// Función
function calcularMedia(array) { 
    if (array.length === 0) return 0;
    const suma = array.reduce((acumulado, numero) => acumulado + numero, 0);
    return suma / array.length; 
}

// Resultados por consola:
console.log("EJERCICIO 3: CALCULAR LA MEDIA DE UN ARRAY DE NÚMEROS");
console.log("=======================================================================");
console.log("Solución 1: Media del array: " + calcularMedia([1, 2, 3, 4, 5])); //Resultado: 3
console.log("Solución 2: Media del array: " + calcularMedia([0, -10, 1, -4])); //Resultado: -3.25
console.log("Solución 3: Media del array: " + calcularMedia([])); //Resultado: 0
console.log("///////////////////////////////////////////////////////////////////////");
console.log("");

//Comentarios de resolución:
/*En este caso debíamos calcular la media, o sea, el promedio de un array de números.  Primero pensamos
cómo se calcula un promedio: se suman todos los elementos y se divide el resultado de la suma por la
cantidad de elementos.
Buscamos entre los métodos para arrays que se encotraban en el cheatsheet y encontramos que "reduce"
sería una posible forma de sumar los valores del array. Además, también consideramos el caso de que el
array estuviera vacío para evitar de división por cero.

De esta forma lo que hicimos fue primero poner la validación donde si el array se encuentra vacío,
simplemente devuelva 0.
Sino, con "reduce" calcula la suma total de los elementos del array y los almacena en la variable "suma"
que luego la dividimos por el tamaño del array, usando length.*/

/*///////////////// EJERCICIO 4 - INVERTIR LOS ELEMENTOS DE UN ARRAY //////////////////*/
// Función:
function invertirArray(array) {
    return array.reverse()
}

// Resultados por consola:
console.log("EJERCICIO 4: INVERTIR LOS ELEMENTOS DE UN ARRAY");
console.log("=======================================================================");
console.log("Solución 1: Array invertido: " + invertirArray([1, 2, 3, 4, 5, 6])); //Resultado: [6, 5, 4, 3, 2, 1]
console.log("Solución 2: Array invertido: " + invertirArray([0, -10, 1, -4])); //Resultado: [-4, 1, -10, 0]
console.log("Solución 3: Array invertido: " + invertirArray([10, 15, 8])); //Resultado: [8, 15, 10]
console.log("///////////////////////////////////////////////////////////////////////");
console.log("");

//Comentarios de resolución:
/* En este ejercicio teníamos que invertir el orden de los elementos de un array, la manera más sencilla
y que casi todas teníamos fresca en la mente fue el método reverse de JavaScript, ya que varias de nosotras
lo habíamos utilizado en el trabajo individual anterior. Así que en lugar de implementar un bucle manual,
preferimos esta solución ya existente que es más simple y más eficiente a nuestro parecer.

/*///////////////// EJERCICIO 5 - ELIMINAR ELEMENTOS DUPLICADOS DE UN ARRAY //////////////////*/
// Función:
function eliminarDuplicados(array) {
    const arraySinRepetidos = [];
    for (let elemento of array) {
        if (!arraySinRepetidos.includes(elemento)) {
            arraySinRepetidos.push(elemento);
        }
    }
    return arraySinRepetidos
}

// Resultados por consola:
console.log("EJERCICIO 5: ELIMINAR ELEMENTOS DUPLICADOS DE UN ARRAY");
console.log("=======================================================================");
console.log("Solución 1: Array sin duplicados: " + eliminarDuplicados([1, 2, 2, 4, 5, 4])); //Resultado: [1, 2, 4, 5]
console.log("Solución 2: Array sin duplicados: " + eliminarDuplicados([-10, -10, 1, 1])); //Resultado: [-10, 1]
console.log("Solución 3: Array sin duplicados: " + eliminarDuplicados(["a", "b", "a", "c"])); //Resultado: [a, b, c]
console.log("///////////////////////////////////////////////////////////////////////");
console.log("");

//Comentarios de resolución:
/*Para este ejercicio nos pedían que eliminemos los duplicados de un array, lo que primero pensamos fue en usar Set
para eliminarlos, ya que esta estructura elimina automáticamente valores repetidos. Pero si bien, tanto los arrays
como los sets son colecciones, tienen sus diferencias y en la consigna pedían que se devuelva un array, por lo tanto
en lugar de usar Set new, como teníamos pensado inicialmente, fuimos por otro camino y pensamos en crear un nuevo
array donde se fueran almacenando los elementos no duplicados y se ignoraran los otros al recorer el array original.

Así que para resolverlo usamos un array auxiliar "arraySinRepetidos" que inicializamos vacío, luego con un bucle
iteramos sobre los elementos del array original  y con el método "includes" verificamos si un elemento ya estaba
presente en el array auxiliar antes de agregarlo.
*/

/*///////////////// EJERCICIO 6 - CONVERTIR LA PRIMERA LETRA DE CADA PALABRA EN MAYÚSCULA //////////////////*/
// Función:
function capitalizarPalabras(cadena) {
    return cadena
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}

// Resultados por consola:
console.log("EJERCICIO 6: CONVERTIR LA PRIMERA LETRA DE CADA PALABRA EN MAYÚSCULA");
console.log("=======================================================================");
console.log("Solución 1: Primeras letras mayúsculas: " + capitalizarPalabras("probando si funciona")); //Resultado: Probando Si Funciona
console.log("Solución 2: Primeras letras mayúsculas: " + capitalizarPalabras("felices fiestas")); //Resultado: Felices Fiestas
console.log("Solución 3: Primeras letras mayúsculas: " + capitalizarPalabras("mi gato es naranja")); //Resultado: Mi Gato Es Naranja
console.log("///////////////////////////////////////////////////////////////////////");
console.log("");

//Comentarios de resolución:
/*Ahora se solicitaba convertir la primera letra de cada palabra de una cadena a mayúsculas. Este ejercicio nos
hizo pensar un poco más cómo hacer ya que el método "toUpperCase" convierte toda la cadena a mayúsculas y no solo
la primera letra.  Entonces lo que pensamos que debíamos hacer era dividir la cadena en palabras, modificarlas y
por último, volver a unirlas.
La modificación consistía en capitalizar solo la primera letra de cada palabra y conservar el resto de los caracteres
iguales. Para dividir y unir, usamos "split" y "join", respectivamente y el método "map" nos permitió aplicar una
transformación a cada una.

Nuestra función toma la cadena que se pasa como parámetro, la divide en palabras con "split" usando los espacios
como separadores, luego con la función "map" itera sobre cada palabra del array y transforma su contenido utilizando
una función de flecha para cada elemento.  Esta función en nuestro caso realiza dos operaciones: primero transforma la
primera letra de cada palabra a mayúscula con "charAt(0).toUpperCase()" y lo concatena con el resto de la palabra
que obtiene con "slice(1)", esta última función comienza desde el índice 1 omitiendo el primer caracter. 
Y por último juntamos las palabras con "join" para devolver una cadena.*/

/*///////////////// EJERCICIO 7 - GENERAR LOS PRIMEROS N NÚMEROS DE LA SUCESIÓN DE FIBONACCI //////////////////*/
// Función:
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const resultado = [0, 1];
    for (let i = 2; i < n; i++) {
        resultado.push(resultado[i - 1] + resultado [i - 2]);
    }
    return resultado;
}

// Resultados por consola:
console.log("EJERCICIO 7: GENERAR LOS PRIMEROS N NÚMEROS DE LA SUCESIÓN DE FIBONACCI");
console.log("=======================================================================");
console.log("Solución 1: Primeros 5 números: " + fibonacci(5)); //Resultado: [0, 1, 1, 2, 3]
console.log("Solución 2: Primeros 7 números: " + fibonacci(7)); //Resultado: [0, 1, 1, 2, 3, 5, 8]
console.log("Solución 3: Primeros 3 números: " + fibonacci(3)); //Resultado: [0, 1, 1]
console.log("///////////////////////////////////////////////////////////////////////");
console.log("");

//Comentarios de resolución:

/*Este último ejercicio nos pedía que generemos los primeros n números de la sucesión de Fibonacci, siendo n el valor
que se le pasa por parámetro a la función.
Primero que nada, buscamos cómo se definía la sucesión de Fibonacci para entender mejor qué debíamos hacer. Trabajamos
con la siguiente definición "Se trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van 
sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores. Por ejemplo: 0, 1, 1, 2, 3, 5, 8,
13, 21, 34, 55…"
Ahora, sabiendo que la sucesión comienza con 0 y 1, y cada número siguiente se calcula como la suma de los dos anteriores.
Pensamos primero cómo tratar los casos especiales, es decir, el 0 y el 1, y decidimos tratarlos con condicionales, siendo
que si el número es menor igual que 0 devuelva un array vacío y, si es igual a 1 devuelva un array con un solo elemento,
el 0 que es el primer elemento en la sucesión. Una vez decidido qué hacer con los 2 casos especiales, dedicimos que usar
un bucle sería la mejor manera de encarar el problema.
Para los valores mayores a 1, nuestra función inicializa un array con los dos primeros números de Fibonacci y con un 
bucle "for" calcula los siguientes números basándose en los dos últimos elementos del array.
El bucle comienza en i = 2 porque los primeros dos números (0 y 1) ya están definidos en "resultado" y se ejecuta mientras
i sea menor que n para generar los n números. Luego calcula el siguiente número de Fibonacci sumando los dos últimos 
números del array (resultado[i - 1] + resultado [i - 2]) y lo agrega al final del array con push.
Finalmente, devuelve el array resultado que contiene los primeros n números de Fibonacci.*/