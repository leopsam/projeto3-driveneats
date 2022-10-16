let pratoEscolhido;
let bebidaEscolhido;
let sobremesaEscolhido;

let pratoValor;
let bebidaValor;
let sobremesaValor;


function marcaPrato(prato){
   
    console.log(prato);
    const jaSelecionado = document.querySelector('.pratos .selecionado')
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    prato.classList.add('selecionado');
    
    pratoEscolhido = prato.querySelector('h2');
    pratoEscolhido = pratoEscolhido.innerHTML;

    const inserindoPedido = document.querySelector(".itens-pedido .prato");
    inserindoPedido.innerHTML = pratoEscolhido;


    pratoValor = prato.querySelector('.valor');
    pratoValor = Number(pratoValor.innerHTML);

    const inserindoValor = document.querySelector(".itens-pedido .valor-prato");
    inserindoValor.innerHTML = pratoValor;

    liberaBotao();
}

//-----------------------------------------------------------



function marcaBebida(bebida){
    console.log(bebida);
    const jaSelecionado = document.querySelector('.bebidas .selecionado')
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    bebida.classList.add('selecionado');

    bebidaEscolhido = bebida.querySelector('h2');
    bebidaEscolhido = bebidaEscolhido.innerHTML;

    const inserindoPedido = document.querySelector(".itens-pedido .bebida");
    inserindoPedido.innerHTML = bebidaEscolhido;



    bebidaValor = bebida.querySelector('h3');
    bebidaValor = bebidaValor.innerHTML;

    const inserindoValor = document.querySelector(".itens-pedido .valor-bebida");
    inserindoValor.innerHTML = bebidaValor;

    liberaBotao();
}


//-----------------------------------------------------------



function marcaSobremesa(sobremesa){
    console.log(sobremesa);
    const jaSelecionado = document.querySelector('.sobremesa .selecionado')
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    sobremesa.classList.add('selecionado');
    sobremesaEscolhido = sobremesa.querySelector('h2');
    sobremesaEscolhido = sobremesaEscolhido.innerHTML;

    const inserindoPedido = document.querySelector(".itens-pedido .sobremesa");
    inserindoPedido.innerHTML = sobremesaEscolhido;


    sobremesaValor = sobremesa.querySelector('h3');
    sobremesaValor = sobremesaValor.innerHTML;

    const inserindoValor = document.querySelector(".itens-pedido .valor-sobremesa");
    inserindoValor.innerHTML = sobremesaValor;

    liberaBotao();
}


//-----------------------------------------------------------


function liberaBotao(){
    if(pratoEscolhido !== undefined){
        if(bebidaEscolhido !== undefined){
            if(sobremesaEscolhido !== undefined){
                const botaoPedido = document.querySelector('.btn-selecionado');
                const botaoNormal = document.querySelector('.btn-normal');
                botaoPedido.classList.remove('escondido')
                botaoNormal.classList.add('escondido')
            }
        }
    }
}





function pedido(){
    const telaPedido = document.querySelector('.fundo');
    telaPedido.classList.remove('escondido')
}

function cancelar(){
    const telaPedido = document.querySelector('.fundo');
    telaPedido.classList.add('escondido')
}


alert(encodeURIComponent('ola meu nome é leonarodo'))