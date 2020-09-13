function tresArgumentos(x, y, z){
    if( x !== undefined && y === undefined && z === undefined){
        return x;
    }else if( x !== undefined && y !== undefined && z === undefined){
        return x + y;
    }else if( x !== undefined && y !== undefined && z !== undefined){
        return ( x + y ) / z;
    }else if( x === undefined && y === undefined && z === undefined){
        return false;
    }else{
        return null
    }
}

console.log('Apenas x: ',tresArgumentos(10));
console.log('x e y: ',tresArgumentos(10,20));
console.log('x , y e z: ',tresArgumentos(10,20,2));
console.log('sem nenhum argumento: ',tresArgumentos());