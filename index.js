// o que eu tenho?
// const numeros = [0,4,2,4,7]

//o que espero? a soma dos numeros = 17

// const total = numeros.reduce((total, currentValue) => {
//   return total + currentValue
// }, 0);
// console.log(total)

//--------------------------------------------//

//// o que eu tenho?

// const itens = [
//   { desc: "pen", qtd: 1, price: 3 },
//   { desc: "rule", qtd: 2, price: 5 },
//   { desc: "erase", qtd: 2, price: 6 }
// ]

// //o que espero? 25

// const total = itens.reduce((total, currentValue) => {
//   return total + currentValue.qtd * currentValue.price
// }, 0)

// console.log(total)

//----------------------------------------------------//

// o que eu tenho?

// const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"]

//o que espero?

// namesCount = {d: 1, m: 2, j: 3}

// const namesCount = names.reduce((count, currentName) => {
//   let firstLetter = currentName[0].toLocaleLowerCase()
//   if(count[firstLetter]){
//     count[firstLetter]++
//   }else {
//     count[firstLetter] = 1
//   }
//   return count
// }, {})

// console.log(namesCount)

// o que eu tenho?
const pessoas = [
  { nome: 'Daniel', idade: 28 },
  { nome: 'Maria', idade: 29 },
  { nome: 'Marta', idade: 29 }
]

//o que espero?

//{'28': ['Daniel'], '29': ['Maria', 'Marta']}

const porIdade = pessoas.reduce((pessoasIdade, pessoaAtual) => {
  //assim

  // console.log(pessoasIdade[pessoaAtual.idade])

  if (pessoasIdade[pessoaAtual.idade]) {
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    console.log('if[pessoasIdade[pessoaAtual.idade]]',pessoasIdade[pessoaAtual.idade])
   } 
  else {
    pessoasIdade[pessoaAtual.idade] = []
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    console.log('else[pessoasIdade[pessoaAtual.idade]]',pessoasIdade[pessoaAtual.idade])
  }

  //ou

  // pessoasIdade[pessoaAtual.idade] = pessoasIdade[pessoaAtual.idade] || []
  // pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)

  return pessoasIdade
}, {})

console.log(porIdade)