(function(){
    'use strict';

    var $div = document.querySelector('[data-js="main"]');
    var $textArea = document.querySelector('[data-js="textarea"]');

    var $form = document.querySelector('[data-js="form"]');
    var $formAdjacente = document.querySelector('[data-js="form-adjacent"]');
    var $inputPosicao = document.querySelector('[data-js="input-posicao"]');

    $form.addEventListener('submit', function(event){
        event.preventDefault();
        if(!$inputPosicao.value){
            $div.innerHTML = $textArea.value;
        }else{
             /* Valores possíveis:
            beforebegin - antes de começar o elemento onde está usando o insertAdjacentHTML
            afterbegin - logo após começar o elemento onde está usando o insertAdjacentHTML
            beforeend - logo antes de terminar o elemento onde está usando o insertAdjacentHTML
            afterend - depois de terminar o elemento onde está usando o insertAdjacentHTML
            */
            $div.insertAdjacentHTML($inputPosicao.value, $textArea.value);
        }
    }, false);

    /*
    $div.innerHTML += '<h2>Título 2</h2>';*/
})();