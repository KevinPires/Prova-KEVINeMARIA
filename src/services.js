export function somar(a,b) {
    return a + b;
}

export function dobro(n) {
    return n * 2;
}

export function media(n1,n2,n3){
    return (n1+n2+n3) /3;
}

export function temperatura(temp){
    let msg = true;
    if(temp >= 38)
    {
        msg = true;
    }
    else{
        msg = false;
    }
    return msg;
}

export function primaria(cor){
    let msg = true;

    if(cor =='amarelo' || cor =='vermelho' || cor =='azul')
    {
        return msg;
    }
    else 
    {
        msg = false;
    }
    return msg;
}

export function IngressoCinema(inteiras,meias,diaSemana, nacionalidade)
{
    let total = 0;
    
    if (nacionalidade == "brasileira")
    {
        return(inteiras + meias) *  5;
    }
    else if (diaSemana == "quarta-feira")
    {
        total = (inteiras + meias) * 14.25;
    }
    else {
        total = (inteiras * 28.50) + (meias * 14.25);
    }
    return total;
}

export function MaiorNumero(numeros)
{
    let maior = -1;

    for (let item of numeros)
    {
        if (item > maior)
        {
            maior = item;
        }
    }
    return maior;

}

export function contarCaracter(texto, caracter){
  let qtd= 0;

  for (let cont = 0; cont < texto.lenght; cont++)
  {
      if (texto [cont].toUpperCase() == caracter.toUpperCase())
      qtd++;
  }
  return qtd;
}

export function tabuada(numero, multiplicacao)
{

let resultado = numero;

for(let contador = 1; contador <= multiplicacao; contador++)
{
resultado = numero * contador;
}
return resultado;
}