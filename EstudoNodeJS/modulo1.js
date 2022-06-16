module.exports ={   // Modulo  interno >> Esta funçao serve para esportar um modulo e
                    //  assim conseguirmos usar em qualquer lugar da minha aplicacao.

    calculo(x, y){
        console.log(x + y);
    },              //caso queira fazer mais de uma função é necessario uso de virgula

    subtracao(a, b){
        console.log(a - b);
    },

    divisao(c, d){
        console.log(c / d);
    }
}


