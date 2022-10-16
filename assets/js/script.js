let pratoEscolhido;
let bebidaEscolhido;
let sobremesaEscolhido;


function marcaPrato(prato){
    console.log(prato);
    const jaSelecionado = document.querySelector('.pratos .selecionado')
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    prato.classList.add('selecionado');
    pratoEscolhido = prato.innerHTML;
    liberaBotao();
}


function marcaBebida(bebida){
    console.log(bebida);
    const jaSelecionado = document.querySelector('.bebidas .selecionado')
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    bebida.classList.add('selecionado');
    bebidaEscolhido = bebida.innerHTML;
    liberaBotao();
}


function marcaSobremesa(sobremesa){
    console.log(sobremesa);
    const jaSelecionado = document.querySelector('.sobremesa .selecionado')
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    sobremesa.classList.add('selecionado');
    sobremesaEscolhido = sobremesa.innerHTML;
    liberaBotao();
}


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