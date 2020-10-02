(function(win, doc){

    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

    function DOM(elements){
        this.element = this.getDOMElements(elements);
    }

    DOM.prototype.getDOMElements = function getDOMElements(elements){
        return doc.querySelectorAll(elements);
    };

    DOM.prototype.on = function on(eventType, callback){
        Array.prototype.forEach.call(this.element, function(element){
            element.addEventListener(eventType, callback, false);
        });    
    };

    DOM.prototype.off = function off(eventType, callback){
        Array.prototype.forEach.call(this.element, function(element){
            element.removeEventListener(eventType, callback, false);
        });    
    };

    DOM.prototype.get = function get(){
        return this.element;
    };

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    };

    // - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

    /*
    Usando o prototype, é nessário instanciar o objeto, var DOM = new DOM();
    Para ser estático, deve ser criada apenas a função, sem prototype

    DOM.isArray = function isArray (param) {
      // corpo da função...
    }
    */
    DOM.prototype.isArray = function isArray(){
        return Object.prototype.toString.call( param ) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(){
        return Object.prototype.toString.call( param ) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(){
        return Object.prototype.toString.call( param ) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(){
        return Object.prototype.toString.call( param ) === '[object Number]';
    };

    DOM.prototype.isString = function isString(){
        return Object.prototype.toString.call( param ) === '[object String]';
    };
    
    DOM.prototype.isBoolean = function isBoolean(){
        return Object.prototype.toString.call( param ) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(){
        return Object.prototype.toString.call( param ) === '[object Null]'
                || Object.prototype.toString.call( param ) === '[object Undefined]';
    };

    var $a = new DOM('[data-js="link"]');
    console.log( $a );
    $a.forEach(function(item){
        console.log( item );
    });
})(window, document);
