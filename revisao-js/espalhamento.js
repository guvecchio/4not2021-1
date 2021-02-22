console.log(Math.min(14, 7, -3, 23, 34)) // retorna o menor valor passado
console.log(Math.max(14, 7, -3, 23, 34)) // retorna o maior valor passado

let numeros = [14, 7, -3, 23, 34]

// usando espalhamento para "desmontar" o vetor
// uso ... antes do nome do vetor(variável)

console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

// em um subvetor os 3 pontos também servem
// para que não fique um vetor dentro de outro. [4, 0, 11, [14, 7, -3, 23, 34], 8, 19, 26]
let maisNumeros = [4, 0, 11, ...numeros, 8, 19, 26]
console.log(maisNumeros)

// Função com parâmetro (ou argumento) de resto

function somaTudo(...nums) {
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

console.log(somaTudo(12, 45, -5))
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30))

// Argumento convencional + argumento de resto
// passando dois argumentos, com o segundo com o espalhamento
// o primeiro argumento vai pegar o primeiro valor do vetor
// o segundo argumento vai pegar todo o vetor espalhado
function calcular(oper, ...nums) {
    let res
    switch (oper) {
        case '+':
            // res = 0
            // for (let n of nums) soma += n
            res = somaTudo(...nums)
            break

        case '*':
            res = 1 // a operação de multiplicação sempre começa por 1, caso contrário o resultado sempre seria 0
            for (let n of nums) res *= n
    }
    return res
}

console.log(calcular('*', 12, 45, -5))
console.log(calcular('+', 2, 76, -2, 41, 19, 11, 22, 30))

// Como chamar a função somaTudo() para processar o vetor maisNumeros?
console.log(somaTudo(...maisNumeros))
console.log(calcular('+', ...maisNumeros))