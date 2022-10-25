# Objetos en javascript

Hemos visto los objetos primitivos en javascript como: 

-  Numbers
-  Booleans
-  Strings
-  Symbols
-  Null
-  Undefined

Otros elemntos javascript muy utilizados pero que no son primitivos, ya que tienen "superpoderes" (metodos) son:

-  Arreglos
-  Objetos

Ejemplos

```javascript
var arr = []
var obj = {}
```

Los arreglos se declaran utilizando `[]` y los objetos se declaran con laves `{}`.

Los arreglos tienen sus elementos ordenados por indice, en cambio los objetos no tienen indice, sus elemtos se rescatan u obtienen mediante **llaves**, Ejemplo

```javascript
var hero = {
    name: "thor",
    weapon: "martillo",
    hair: "rubio"
}

console.log(hero["name"])
console.log(hero["weapon"])
console.log(hero["hair"])
```

