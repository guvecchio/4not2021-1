let nota = 7.2
let situacao

if (nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}
console.log(situacao)

// quando uma estrutura de repetição de controle tem uma linha só (um comando)
// é possível omitir as chaves
if (nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'
console.log(situacao)

// neste caso, posso também substituir assim:
// ***** OPERADOR TERNÁRIO - característica:
// - o if tem apenas uma linha, e
// o else também tem apenas uma linha
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'
// as 3 partes do operador ternário
// 1ª parte: condição (que iria depois do if
// entre a 1ª e 2ª partes -> ?
// 2ª parte: o resultado, caso a condição seja VERDADEIRA
// entre a 2ª e 3ª partes -> :
// 3ª parte: o resultado, caso a condição seja FALSAS

console.log(situacao)

let user = 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)