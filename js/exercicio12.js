(function(){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    // ?
    var person = {
        name: 'Mailson',
        lastName: 'Pereira',
        age: 32
    };
    console.log( 'Propriedades de "person":', person);
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    // ?
    console.log( 'Propriedades de "person":', Object.keys( person ));

    /*
    Crie um array vazio chamado `books`.
    */
    // ?
    var books = [];
    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    // ?
    books.push( {name: 'Sherlock Holmes e o Cão dos Baskervilles', pages: 850} );
    books.push( {name: 'A mulher na janela', pages: 1000} );
    books.push( {name: 'O dilema do porco espinho', pages: 750} );
    console.log( '\nLista de livros:', books );

    /*
    Mostre no console todos os livros.
    */
    // ?
    var livroRemovido = books.pop();
    console.log( '\nLivro que está sendo removido:\n', livroRemovido );
    /*
    Remova o último livro, e mostre-o no console.
    */
    // ?

    console.log( '\nAgora sobraram somente os livros:\n', books );
    /*
    Mostre no console os livros restantes.
    */
    // ?

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    books = JSON.stringify( books );
    /*
    Mostre os livros nesse formato no console:
    */
    // ?
    console.log( '\nLivros em formato string:\n', books  );

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    books = JSON.parse( books );
    console.log( '\nAgora os livros são objetos novamente:', books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    // ?
    for( var i = 0; i < Object.keys( books ).length; i++){
        for (var prop in books[i]) {
            console.log( prop + ': ' + books[i][prop]);
        };
    }
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    var myName = ['M','a','i','l','s','o','n'];
    console.log( '\nMeu nome é:', myName );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // 
    console.log( '\nMeu nome invertido é:', myName.join('') );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?

    console.log( '\nAgora em ordem alfabética:', myName.reverse().join('') );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    // ?
    // para strings, a função sort considera que as maiúsculas vem primeiro
    console.log( '\nAgora em ordem alfabética:', myName.sort().join('') );
})()