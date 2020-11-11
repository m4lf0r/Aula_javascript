function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //Aparecer text na tela
    //console.log(document.getElementById("agradecimento")) //aparecer no console
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/m4lf0r/Aula_javascript/"); //redirecionamento de page(nova aba)
    //window.location.href = "https://github.com/m4lf0r/Aula_javascript/"; //redirecionamento na mesma page
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
 // alert("Trocar texto"); 
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}

function validaidade(idade){  //validar idade
    var validar;
    if(idade >= 18){
        validar = true
    }else(
        validar = false
    )
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));

//alert(soma(5, 10));
*/

/*
var dt = new Date(); //data
alert(dt.getMonth()+1);
alert(dt.getHours());
alert(dt.getMinutes());
*/

/*
var count; //contar no console
for(count=0; count<=5; count++){
    alert(count);
};
*/
/*
var count = 0;  // Contar no console
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade= prompt("Qual sua idade?"); // Caixa de pergunta
//var idade = 17;
    if(idade >= 18){
        alert("Maior de idade!")
    }else{
        alert("Menor de idade!")
    };
*/

/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var lista = ["Maçã", "pera", "laranja"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"));
alert(lista[1]);

var nome = "Ariel Alves";
var idade = 22;
var idade2 = 10;
var frase = "japão é o melhor time do mundo";
alert(nome+" tem "+idade);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("japão", "Brasil"));
console.log(frase.toUpperCase());
alert(frase.replace("japão", "Brasil"));
*/