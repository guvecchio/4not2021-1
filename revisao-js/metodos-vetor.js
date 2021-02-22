const pets = [
    { nome: 'Mel', especie: 'cão', idade: 2, sexo: 'F', peso: 5.2 },
    { nome: 'Paçoca', especie: 'gato', idade: 8, sexo: 'F', peso: 3.2 },
    { nome: 'Cerberus', especie: 'cão', idade: 6, sexo: 'M', peso: 22 },
    { nome: 'Thor', especie: 'tartaruga', idade: 102, sexo: 'M', peso: 30 },
    { nome: 'Paco', especie: 'papagaio', idade: 56, sexo: 'M', peso: 1 },
    { nome: 'Mingau', especie: 'gato', idade: 4, sexo: 'M', peso: 2.5 }
]

let numeros = [2, 0, -7, 11, 4, 9, 13, -8]

// find() -> entra o primeiro elemento que coincide com o critério
// passo uma função (arrow) que contém uma variável (elemento)
// caso não encontre, retorna undefined
// retorna o objeto
console.log(pets.find(elemento => elemento.nome === 'Thor'))
console.log(pets.find(x => x.especie === 'gato' && x.sexo === 'M'))
console.log(pets.find(x => x.idade >= 4))

console.log('----------------------------------')

// some() -> verifica de há ALGUM elemento que coindice com o critério
// retorna true ou false
console.log(pets.some(x => x.nome === 'Mingau'))
console.log(pets.some(x => x.idade >= 4))

console.log('----------------------------------')

// every() -> verifica se TODOS os elementos passam no critério
console.log(pets.every(x => x.peso >= 1))
console.log(pets.every(x => x.especie === "ave"))

console.log('----------------------------------')

// filter() -> cria um novo vetor com TODOS os elemntos que passarem no critério
// retorna um vetor vazio caso não haja NENHUM elemento que coincida com o critério
console.log(pets.filter(x => x.especie === "gato"))

console.log('----------------------------------')

console.log(pets.filter(x => x.idade >= 50))

console.log('----------------------------------')

/* map() -> cria um NOVO vetor, do mesmo tamanho do original, contendo alguma
    transformação dos elementos deste último
    separar apenas o nome dos pets (pode retornar true ou false numa comparação ou
    trocar o valor de TODOS numa atribuição)
*/
console.log(pets.map(x => x.nome = 'animal'))

console.log('----------------------------------')

// Novo vetor contendo os números do vetor original elevados ao quadrado
console.log(numeros.map(x => x ** 2))

console.log('----------------------------------')

// reduce() -> reduz o vetor a apenas um valor, de acordo com a função passada
// somando o peso de todos os pets
console.log(numeros.reduce((acumulador, valor) => acumulador + valor))
console.log([2, 5, 4, 7].reduce((acumulador, valor) => acumulador * valor))
console.log(['Bom ', 'dia ', 'galera!'].reduce((acumulador, valor) => acumulador + valor))

console.log('******************')

//para utilizar o reduce para um parâmetro específico, temos que criar um novo vetor com o MAP para então utilizar o reduce
let pesos = pets.map(x => x.peso) // criando um vetor SOMENTE com os pesos (utilizando o map)
console.log(pesos)
console.log(pesos.reduce((acumulador, valor) => acumulador + valor))

console.log('******************')

// fazendo tudo em um linha só
console.log(pets.map(x => x.peso).reduce((acumulador, valor) => acumulador + valor))

// calculando o peso médio
console.log(pets.map(x => x.peso).reduce((acumulador, valor) => acumulador + valor) / pets.length)

console.log('----------------------------------')

// includes() -> retorna TRUE caso exista um elemento IGUAL ao parâmetor passado
console.log(numeros.includes(4))
console.log(pets.includes(10))

// Diferença entre includes() e some()
// includes() -> procura um valor dentro de um vetor de valores simples
// some() -> procura por um critério, passando via arrow function, em um vetor de objetos