(function(win,doc, DOM){
    'use strict';

    /*
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um 
    Separe o nformulário para cadastro do carro, com os seguintes campos:
        - Imagem do carro (deverá aceitar uma URL)
        - Marca / Modelo
        - Ano
        - Placa
        - Cor
        - e um botão "Cadastrar"

    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.

    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.

    Essas informações devem ser adicionadas no HTML via Ajax.

    Parte técnica:osso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.

    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */

    function app(){

        var $imagem = new DOM('[data-js="image"]');
        var $brand = new DOM('[data-js="brand-model"]');
        var $year = new DOM('[data-js="year"]');
        var $plate = new DOM('[data-js="plate"]');
        var $color = new DOM('[data-js="color"]');

        return {
            init: function(){
               this.companyInfo();
               this.initEvents();
            },

            initEvents: function initEvents(){
                var $formRegister = new DOM('[data-js="form-register"]');
                $formRegister.on('submit',this.handleSubmit);
            },

            handleSubmit: function handleSubmit(event){
                event.preventDefault();
                var $tableCar = new DOM('[data-js="table-car"]');
                $tableCar.get().appendChild(app().createNewCar());
            },

            createNewCar: function createNewCar(){
                var $fragment = doc.createDocumentFragment();
                var $tr = doc.createElement('tr');
                var $tdImagem = doc.createElement('td');
                var $img = doc.createElement('img');
                var $tdBrand = doc.createElement('td');
                var $tdYear = doc.createElement('td');
                var $tdPlate = doc.createElement('td');
                var $tdColor = doc.createElement('td');
                
                $img.setAttribute('src', $imagem.get().value);
                $tdImagem.appendChild($img);

                $tdBrand.textContent = $brand.get().value;
                $tdYear.textContent = $year.get().value;
                $tdPlate.textContent = $plate.get().value;
                $tdColor.textContent = $color.get().value;
                
                $tr.appendChild($tdImagem);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);
                
                $fragment.appendChild($tr);

                return $fragment;
            },

            companyInfo: function companyInfo(){
                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/js/company.json', true);
                ajax.send();
                ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
            },

            getCompanyInfo: function getCompanyInfo(){
                if(this.readyState === 4 && this.status === 200){
                    var data = JSON.parse(this.responseText);
                    var $companyName = new DOM('[data-js="company-name"]');
                    var $companyFone = new DOM('[data-js="company-fone"]');

                    $companyName.get().textContent = data.name;
                    $companyFone.get().textContent = data.phone;
                }
            }
        };
    }

    app().init();
})(window, document, window.DOM);