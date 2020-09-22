/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var array = [10,20,30,40,50,60,70];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
var funcao = function(parametro){
    return parametro;
};
console.log(funcao(array));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log('segundo índice: ', funcao(array)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
var funcaoDois = function(parametro,indice){
    return parametro[indice];
};
console.log('função com dois parâmetros: ', funcaoDois(array,4));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arrayTipos = [10,'20',true,{nome: 'Mailson', idade: 32},function(){console.log('Olá Enfermeira');}];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(funcao(arrayTipos));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function books(nomeLivro){
    var livros = {
        'sherlock_h_cao_baskervilles': {
            quantidadePaginas: 500,
            autor: 'Sir Arthur Conan Doyle',
            editora: 'Amazon'
        },
        'Programação Java Pra Web': {
            quantidadePaginas: 1010,
            autor: 'Mr Java',
            editora: 'Novatec'
        },
        'Kotlin': {
            quantidadePaginas: 1200,
            autor: 'Mr Google',
            editora: 'Novatec'
        }
    }
   return !nomeLivro ? livros : livros[nomeLivro]; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(books());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log('Livro sherlock_h_cao_baskervilles com ' + books('sherlock_h_cao_baskervilles').quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
