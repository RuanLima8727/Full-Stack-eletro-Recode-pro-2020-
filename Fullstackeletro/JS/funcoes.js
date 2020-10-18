// Função para selecionar os produtos de interesse através de categoria
function exibirCat(categoria){
    let elemento = document.getElementsByClassName("produto")
        for (var i = 0; i<elemento.length; i++ ){
            console.log(elemento[i].id)
            
            if(categoria == elemento[i].id){
                    elemento[i].style = "display:inline-block" }   

                else elemento[i].style = "display:none"}
}
// Função para selecionar os produtos de interesse através de categoria

// Função para exibir todos os produtos na tela
let todos = () => { 
    let elemento = document.getElementsByClassName("produto")
    for (var i = 0; i<elemento.length; i++ ){
            elemento[i].style = "display:inline-block" } 
    }  
// Função para exibir todos os produtos na tela

// Função para destacar a imagem dos produtos
let destaque = (imagem) => {
    if(imagem.style.height == "200px" ){
            imagem.style.height = "300px"; imagem.style.width = "300px";}
        else{
            imagem.style.height = "200px"; imagem.style.width = "200px";}
   
}
// Função para destacar a imagem dos produtos

//Função para mudar o fundo dos itens de Categorias
function menuCategorias (categ) {
    
    

    var menu = document.getElementsByClassName("item")
    switch (categ){
        case "1" : menu[0].classList.add("onMouse"); break;
        case "2" : menu[1].classList.add("onMouse"); break;
        case "3" :menu[2].classList.add("onMouse"); break;
        case "4" :menu[3].classList.add("onMouse"); break;
        case "5" :menu[4].classList.add("onMouse"); break;
        case "6":menu[5].classList.add("onMouse"); break;
    }
       
}        
//Função para mudar o fundo dos itens de Categorias


//Função para retornar a cor do fundo dos itens de categoria
function mouseOut(mouseFora) {
    var menu = document.getElementsByClassName("item")
   
    switch(mouseFora){
        case "1" : menu[0].classList.remove("onMouse"); break;
        case "2" : menu[1].classList.remove("onMouse"); break;
        case "3" :menu[2].classList.remove("onMouse"); break;
        case "4" :menu[3].classList.remove("onMouse"); break;
        case "5" :menu[4].classList.remove("onMouse"); break;
        case "6":menu[5].classList.remove("onMouse"); break;
    }
    
    
}
//Função para retornar a cor do fundo dos itens de categoria


