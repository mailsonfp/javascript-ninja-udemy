(function(wind, doc, DOM){

    'use strict';
    /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.

    http://apps.widenet.com.br/busca-cep/api-de-consulta
    */    
    
    var $formCep = new DOM('[data-js="formCep"]');
    var $inputCep = new DOM('[data-js="inputCep"]');
    var $buttonLimpar = new DOM('[data-js="buttonLimpar"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');
    var ajax = new XMLHttpRequest();

    $formCep.on('submit', handleSubmitFormCEP);
    $buttonLimpar.on('click', limparInformacoes);

    function getUrl(){        
        return 'https://ws.apicep.com/cep/[cepCode].json'.replace(
            '[cepCode]',
            $inputCep.get()[0].value.replace(/\D/g,'')
        );
    }

    function limparInformacoes(){
        setaValoresForm('','','','','');
        $inputCep.get()[0].value = '';
        $status.get()[0].textContent = '';
    }

    function handleSubmitFormCEP(event){
        event.preventDefault();
        
        if(!$inputCep.get()[0].value){
            return alert('Informe o CEP');
        }

        var url = getUrl();
        
        ajax.open('GET', url );
        ajax.send();
        getMessage('loading');
        ajax.addEventListener('readystatechange',handleReadyStateChange);
    }

    function handleReadyStateChange(){
        preencheInformacoesCep();
    }    

    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
    }

    function preencheInformacoesCep(){
        try {            
            setaValoresForm('','','','','');

            var retorno = JSON.parse(ajax.responseText);

            if (retorno.status===200){
                setaValoresForm(retorno.address,retorno.district,retorno.state,retorno.city,retorno.code);    
                getMessage('ok');
            }else if (retorno.status===404){
                getMessage('not_found');
            }else if (retorno.status===400){
                getMessage('bad_request');
            }else{
                getMessage('error');
            }
            
        } catch (error) {
            getMessage('error');
        }
                
    }

    function setaValoresForm(logradouro, bairro, estado, cidade, cep){
        $logradouro.get()[0].textContent = logradouro; 
        $bairro.get()[0].textContent = bairro;
        $estado.get()[0].textContent = estado;
        $cidade.get()[0].textContent = cidade;
        $cep.get()[0].textContent = cep;
    }

    function getMessage(type){
        var mensagens = {
            loading: 'Buscando informações para o CEP [CEP]...',
            ok: 'Endereço referente ao CEP: [CEP]',
            not_found: 'Não encontramos o endereço para o CEP [CEP].',
            bad_request: 'Erro ao enviar a requisição.',
            error: 'Não foi possível concluir a consulta de endereço.'
        };

        $status.get()[0].textContent = mensagens[type].replace('[CEP]', $inputCep.get()[0].value);
    }
})(window, document, window.DOM);