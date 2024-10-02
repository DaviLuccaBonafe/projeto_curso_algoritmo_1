
var valor01, valor02, resultado, operacao;

function acaoBotao(params){
    valor01 = prompt("digite o valor01")
    operacao = prompt("digite a operacao: Ex: +, -, *, /:")
    valor02 = prompt("digite o valor02")
    switch (operacao) {
        case "+":
            resultado = parseInt (valor01) + parseInt (valor02)    
            break;
        case "-":
            resultado = parseInt (valor01) - parseInt (valor02)   
            break;
        case "*":
            resultado = parseInt (valor01) * parseInt (valor02)   
            break;
            case "/":
                resultado = parseInt (valor01) / parseInt (valor02)   
                break;
    }
    
    
         document.getElementById("paragrafo").innerText = resultado
}



