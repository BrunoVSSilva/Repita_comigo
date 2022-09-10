/* Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor. */

/* Resposta 1
var v1 = parseInt(prompt("insira o primeiro valor"));
var v2 = parseInt(prompt("insira o segundo valor, obs: o segundo valor não pode ser igual ou menor que zero"));
while(v2 <= 0){
    
    var v2 = parseInt(prompt("insira o segundo valor, obs: o segundo valor não pode ser igual ou menor que zero"));
}
var div = v1 / v2 
document.write("O valor da divisão é: " + div);
*/

/* Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO". */

/* Resposta 2
var cont = 30;
while(cont > 0){
    var texto = "Restam " + cont + " segundos." + "<br>";
    document.write(texto);
    cont = cont -1;
}
document.write("Kaboom!");
*/

/* Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
*/

/* Resposta 3
var cont = 10;
while(cont > 0){
    var texto = cont + "<br>";
    document.write(texto);
    cont = cont -1;
}
*/

/* Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive). */

/* resposta 4
var num = 15
var acum = 0
while(num <= 100){
    acum += num
    num++ 
}
var média = acum / 85
document.write(média);
*/

/* Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. */

/* Resposta 5
var num1 = parseInt(prompt("Insira o primeiro valor"));
var num2 = parseInt(prompt("Insira o segundo valor"));
var fator = num2 - num1
var acum = 0;
while(num1 < num2){
    acum += num1
    num1++
}
document.write(acum / fator);
*/

/* Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados. */

/* resposta 6 - deu trabalho
var num1 = parseFloat(prompt("Insira o primeiro valor"));
var num2 = parseFloat(prompt("Insira o segundo valor"));
var med = (num1 + num2) / 2;
var acum = 1 /* para somar os alunos*/

/*
if(med < 9.5){
    alert("O aluno FALHOU!!")
}else{
    alert("O aluno foi aprovado!")
}
var sn = prompt("Calcular a média de outro aluno Sim/Não ?")
var s = "s";
var n = "n";
while(sn == s){
    var num1 = parseFloat(prompt("Insira o primeiro valor"));
    var num2 = parseFloat(prompt("Insira o segundo valor"));
    var medi = (num1 + num2) /2
    if(medi < 9.5){
        alert("O aluno FALHOU!!")
    }else{
        alert("O aluno foi aprovado!")
        acum ++
    }
    var sn = prompt("Calcular a média de outro aluno Sim/Não ?")
    var s = "s";
    var n = "n";
    if(sn == n){
        alert(acum + " alunos foram aprovados. Muito obrigado!")
    }
    
}
*/

/* Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. */

/* Resposta 7
/* descobri o "||" depois da TRABALHEIRA, */
/*
var num1 = parseInt(prompt("Insira a primeira nota"));
var num2 = parseInt(prompt("Insira a segunda nota"));
var num3 = parseInt(prompt("Insira a terceira nota"));
var num4 = parseInt(prompt("Insira a quarta nota"));
var num5 = parseInt(prompt("Insira a quinta nota"));
var num6 = parseInt(prompt("Insira a sexta nota"));
while(num1 < 0 ){
    var num1 = parseInt(prompt("Por favor, insira o primeiro número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num1 > 10){
    var num1 = parseInt(prompt("Por favor, insira o primeiro número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num2 < 0){
    var num2 = parseInt(prompt("Por favor, insira o segundo número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num2 > 10){
    var num2 = parseInt(prompt("Por favor, insira o segundo número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num3 < 0){
    var num3 = parseInt(prompt("Por favor, insira o terceiro número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num3 > 10){
    var num3 = parseInt(prompt("Por favor, insira o terceiro número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num4 < 0){
    var num4 = parseInt(prompt("Por favor, insira o quarto número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num4 > 10){
    var num4 = parseInt(prompt("Por favor, insira o quarto número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num5 < 0){
    var num5 = parseInt(prompt("Por favor, insira o quinto número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num5 > 10){
    var num5 = parseInt(prompt("Por favor, insira o quinto número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num6 < 0){
    var num6 = parseInt(prompt("Por favor, insira o sexta número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
while(num6 > 10){
    var num6 = parseInt(prompt("Por favor, insira o sexta número novamente, o número inserido deve ser maior que 0 e menor que 10."));
}
var med = (num1 + num2 + num3 + num4 + num5 + num6) / 6
alert(num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6 + " A média desse aluno é: " + med);
*/

/* Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
N  é um valor informado pelo usuário. */

/* Resposta 8
var N = parseInt(prompt("Insira o valor"))
var v1 = 1 
var fator = N - v1
while(v1 <= N){
    document.write( + v1 + "<br>");
    v1++
}
*/

/* Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. */
/*
var vi = 100
var vf = 110
while(vi <= vf){
vi++
document.write(vi + "<br>")
}
*/

/* 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. */

/* Resposta 10
var n = parseInt(prompt("Insira o valor"));
var ini= 0
while(ini < n){
    ini++
    var final = 0
    while(final < 10){
        final++
        var multi = ini*final
        document.write(ini + " . " + final + " " + " = " + multi + "<br>")
    }
}
*/

/* Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo. */

/*
var d = 0;
var f = 0;
var inicial = 0;
while(inicial < 10){
    var text = parseInt(prompt("Insira o valor"));
    if(text > 24 && text < 42){
        d++
    }
    else{
        f++
    }
    inicial++
}
alert(" De todos os valores inseridos " + d + " estão dentro de 24 a 42. " + f + " estão fora. ");