let numeroS = 0;
let intentos = 0;
let NumeSort = [];
let NumMaxim = 10;


function AsignarTextoElementos (elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}




function verificarInt()
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (numeroS);
    if (numeroS===numeroDeUsuario)
    {
    AsignarTextoElementos ("p", `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
    document.getElementById ("reiniciar").removeAttribute("disabled");
    }
    //Aqui es por si el usuario no acerto
    else 
    {
        if (numeroDeUsuario>numeroS)
        {
        AsignarTextoElementos ("p", "El numero es menor");
        }
        else
        {
        AsignarTextoElementos ("p", "El numero es mayor");
        }
    intentos++;
    limpiarCaja ();
    }
    return;
}


function limpiarCaja ()
{
document.querySelector ("#valorUsuario").value = "";
}


function GenerarNumS () 
{   
    let numeroGenerado = Math.floor (Math.random()*NumMaxim)+1;

    console.log (numeroGenerado);
    console.log (NumeSort);

    if (NumeSort.length == NumMaxim)
    {
        AsignarTextoElementos ("p", "Se han sorteado todos los numeros");
    }
    else
    {
        // Si el numero generado esta en la lista 
        if (NumeSort.includes (numeroGenerado))
        {
            return GenerarNumS ();
        }
        else
        {
            NumeSort.push (numeroGenerado);
            return numeroGenerado;
        }
    }   
}


function CondicionesIni ()
{
    AsignarTextoElementos ("h1", "Juego del número secreto");
    AsignarTextoElementos ("p", `Indica un numero del 1 al ${NumMaxim}`);
    numeroS=GenerarNumS ();
    intentos = 1;
}




function reiniciarJuego ()
{
    limpiarCaja ();
    CondicionesIni ();
    document.querySelector("#reiniciar").setAttribute("disabled","true"); 
}

CondicionesIni();