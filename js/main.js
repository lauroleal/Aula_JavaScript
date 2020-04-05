//comentario
var nome="Lauro Leal"
var a = 20;
var b = 40;
alert(b+a);
var frase = "uma frase";
var lista =["maça","pêra","laranja"];
//dicionario
var dicio_frutas = {nom:"maça", cor:"vermelha"}
//lista de dicionario
var lista_DeDicionarios_frutas = [{nom:"maça", cor:"vermelha"},{nom:"uva", cor:"verde"},
{nom:"laranja", cor:"laranja"},{nom:"pêra", cor:"amarela"},{nom:"goiaba", cor:"vermelha"}];

function load(){
    alert("Pagina carregada...");
}

var d = new Date();
alert("Olá "+nome +" esse e o seu java script, hoje é: "+d);

// função com innerHtml


function clique(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
}

function redirecionar(){
     //abrir em outra janela
    window.open("https://github.com/lauroleal/Aula_JavaScript");
    //abrir na mesma janela
    //window.location.href = "https://github.com/lauroleal/Aula_JavaScript";
}

function trocar(element){
    //document.getElementById("mausemove").innerHTML = "Você passou o mause";
    //alert("trocar texto");
    element.innerHTML = "Você passou o mause";
}

function voltar(element){
    //document.getElementById("mausemove").innerHTML = "passe o mause aqui";
    //alert("trocar texto");
    element.innerHTML = "passe o mause";
}

function change(element){
    console.log(element.value)

}

/*
function trocar(){
    document.getElementById("mausemove").innerHTML = "Você passou o mause";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mausemove").innerHTML = "passe o mause aqui";
    //alert("trocar texto");
}
*/

/*
function clique(){
    alert("Você clicou!");
}
*/
//funções
/*
function soma(n1,n2){
    return n1 + n2;
}
function multi(n1,n2){
    return n1 * n2;
}
function div(n1,n2){
    return n1 / n2;
}
function sub(n1,n2){
    return n1 - n2;
}
alert(soma(4,5));
alert(multi(4,5));
alert(div(4,5));
alert(sub(4,5));
*/
/* 
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//condicional
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

// laço de repetição
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
    
};
*/

/*
// repetição for
var count;
for (count=0; count <=5; count++){
    alert(count);
    console.log(count);
};

*/

var lista =["maça","pêra","laranja"];
console.log(lista);
//alert("lista de frutas criadas: "+lista);
lista.push("uva");
lista.push("goiaba");
//alert("adicionando um outros itens na lista ficou: "+lista);
//alert("acessando pelo indice: "+lista[0])
lista.pop();
//alert("Removemos um item da lista, ficou: "+lista)
console.log(lista);


console.log(nome);
console.log(a+b);
console.log(frase.toLowerCase());
console.log(lista.toString());
//console.log(lista.join(" - "));
console.log(lista.join(" | "));
console.log(dicio_frutas.nom);
//lista de dicionarios
console.log(lista_DeDicionarios_frutas[4].nom);
