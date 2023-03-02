var fibonacci = function (numero){
    var n = parseInt(numero);
    var array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const ultimoN = array[array.length - 1];
    const penultimoN = array[array.length - 2];
    var soma = penultimoN + ultimoN;
    console.log(soma);
    if(soma === n){
        array.push(n)
        return 'numero pertence a sequencia'
    }else{
        return 'numero nao pertence a sequencia ';
    }
}
//informe o numero no espaço entre parenteses dentro da funçaõ que está dentro da console.log;
console.log(fibonacci(55));