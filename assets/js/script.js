let pratoEscolhido;
let bebidaEscolhido;
let sobremesaEscolhido;

let pratoValor;
let bebidaValor;
let sobremesaValor;

let total;

let nome;
let endereco;

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


    pratoValor = prato.querySelector('span');
    pratoValor = pratoValor.innerHTML;

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



    bebidaValor = bebida.querySelector('span');
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


    sobremesaValor = sobremesa.querySelector('span');
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


//-----------------------------------------------------------


function pedido(){

    nome = prompt(`Digite seu nome`);
    endereco = prompt(`Digite seu endereço`);
    
    alert(`Obrigado ${nome}, revise seu pedido antes de pedir`)

    const telaPedido = document.querySelector('.fundo');
    telaPedido.classList.remove('escondido')

    const real = 'R$ '
    total = Number(pratoValor) + Number(bebidaValor) + Number(sobremesaValor);
    total = total.toFixed(2);

    const inserindoTotal = document.querySelector(".total");
    inserindoTotal.innerHTML = real + total;
}


//-----------------------------------------------------------


function cancelar(){
    const telaPedido = document.querySelector('.fundo');
    telaPedido.classList.add('escondido')
}


//-----------------------------------------------------------


function finalizarPedido(){ 

    let texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${pratoEscolhido}
    - Bebida: ${bebidaEscolhido}
    - Sobremesa: ${sobremesaEscolhido}
    Total: R$ ${total}
    
    Nome: ${nome}
    Endereço: ${endereco}`)

    open("https://wa.me/5521979272015?text=" + texto)
}