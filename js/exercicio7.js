/*
Crie um array com 5 items (tipos variados).
*/
// ?
var arrayTipos = [10,'20',{nome: 'Mailson', idade: 32},1,function(){console.log('Olá Enfermeira');}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
function addItem(item){
    arrayTipos.push(item);
    return arrayTipos;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
var novoArray = ['Mailson',{descricao: 'Celular', preco: 1500},function(){console.log('Hello Nurse');}];
addItem(novoArray);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
for(var i = 0;i<arrayTipos.length;i++){
    if(arrayTipos[i] instanceof Array){
        var segundoArray = arrayTipos[i];
        console.log('O segundo elemento do segundo array é ', segundoArray[1]);
    }
}


/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?