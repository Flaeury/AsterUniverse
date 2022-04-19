

//1 ADICIONAR IDS NOS BOTÕES **
//1...5 ***
//2 SELECIONAR OS BOTÕES
//3 INTERCEPTAR O EVENTO DE CLIQUE 
//4 RECUPERAR O ID ADIONADO 


//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", indentificarOpcoes)

//EXECUTANDO AÇÃO DEPOIS DO CLIQUE 
function indentificarOpcoes(event){
    
    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const elemento  = event.target

    //VERIFICANDO SE É UM LI 
    if(elemento.tagName == "LI"){

        //RECUPERANDO O ID
        const id = elemento.id
        
        //SELECIONANDO UMA SEÇÃO UTILIZANDO O ID(ESCOLHA DO USUÁRIO)
        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`)

        //REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar()
        
        //ADICIONAR UMA CLASSE 
        secaoEscolha.classList.add("mostrar")
    }
}

//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS  
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")

    }
}

/*
 * typingEffect()
 * It types an array of texts in a random order. I like random stuff🙃
 */
function typingEffect() {
    const contactTexts = shuffleArray(["Venda sua arte NFT na Aster Community!"]);
    const typedtext = document.getElementsByClassName("typedtext")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => { // We define the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        // 15*150ms = time before starting to remove characters
        if (char == contactTexts[idx].length + 15) removing = true;

        // Removing characters, the last one always
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; // Next character

        // When there is nothing else to remove
        if (typedtext.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; // Start the next text by the first character
            removing = false; // No more removing characters
        }

    }, 150); // Typing speed, 150 ms

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const FRUITS = ['🥝', '🥥', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓'];
document.querySelector('.initial').innerHTML = FRUITS[Math.floor(Math.random() * FRUITS.length)];

