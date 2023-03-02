function rString (palavra){
    var invertido = ' ';
    for(let i of palavra){
        invertido = i + invertido;
    }
    return invertido
}
console.log(rString('sofia'));