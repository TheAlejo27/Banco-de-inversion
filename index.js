//ALEJO DEPAULA
const formularioInversion = document.querySelector("#formInvertir");
const divError = document.querySelector("#error")
const cuentaAhorro = document.querySelector("#cuentaAhorro");
const codigo = document.querySelector("#codigo");
const inversion = document.querySelector("#inversion");
const mesesDeInversion = document.querySelector("#mesesDeInversion");
const enviarDinero = document.querySelector("#enviarDinero");
const mostrarInversion = document.querySelector("#mostrar-inversion")
const mostrarganancia = document.querySelector("#mostrar-ganancia")
const botonHistorial = document.querySelector("#historial")
const reiniciar = document.querySelector("#finalizar")
const divMostrarUsuario = document.querySelector("divUsuario")
const salir = document.querySelector("#cerrar")
const numero = Math.trunc(Math.random() * (826 + 1) - 1);
const cuenta = []
const inversionCompleta = []


let usuario = JSON.parse(localStorage.getItem("usuario"))
    divUsuario.innerHTML = `
    <h1>${usuario.nombre}</h1>
`

formInvertir.onsubmit = (event) => {
    event.preventDefault()
    calcularInversion(inversion.value, mesesDeInversion.value)
    finalizar.style.display = "flex"
    myChart.style.display = "block"
}

mesesDeInversion.onchange = () =>{

if(mesesDeInversion.value > 24){
swal("ERROR", "Usted puede visualizar su inversion con un maximo de dos años (24 meses)","error")
mesesDeInversion.style.border = "5px solid red";
enviarDinero.disabled = true;
}else {
    mesesDeInversion.style.border = "none";
    enviarDinero.disabled = false;
    divError.style.display = "none";
}
}

inversion.onchange = () =>{

    if(inversion.value > 15000){
        swal("ERROR", "La inversion maxima es de 15000$","error")
        inversion.style.border = "5px solid red";
        enviarDinero.disabled = true;
        }else {
            inversion.style.border = "none";
            enviarDinero.disabled = false;
            divError.style.display = "none";
        }

}

cuentaAhorro.onchange = () => {

    if (cuentaAhorro.value.length > 10 || cuentaAhorro.value.length < 10) {
        cuentaAhorro.style.border = "5px solid red";
        enviarDinero.disabled = true;
        swal("ERROR", "Los numeros de cuenta tienen que contener 10 digitos", "error");
    } else {
        cuentaAhorro.style.border = "none";
        enviarDinero.disabled = false;
        divError.style.display = "none";
    }
}

function calcularInversion(dinero, meses) {
    inversionCompleta.push(dinero, meses)
    let ganancia;
    let dineroInversion = dinero
    formInvertir.style.display = "none"
    mostrarInversion.style.display = "flex"
    mostrarganancia.style.display = "flex"
    const ganancias = [];
    const arrayMeses = [];
    const colores = []
    let acc = 0;
    for (let i = 0; i < inversionCompleta[1]; i++) {
        acc = acc + 1
        ganancia = Number(dineroInversion) * 4.33 / 100;
        dineroInversion = Number(dineroInversion) + Number(ganancia);
        ganancias.push(Math.trunc(ganancia))
        arrayMeses.push("mes " + acc)
       colores.push('rgba(255, 99, 132, 0.2)')
    }
     let ctx = document.getElementById('myChart');
     let myChart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: arrayMeses,
             datasets: [{
                 label: 'Ganancia',
                 data: ganancias,
                 backgroundColor: colores,
                 borderWidth: 1
             }]
         },
         options: {
         }
     });

     mostrarInversion.innerHTML = `
     <h1>El total es de ${Math.trunc(dineroInversion)}$ </h1>   
      `
}

finalizar.onclick = (event) => {
   event.preventDefault()
   mostrarInversion.style.display = "none"
   finalizar.style.display="none"
   formInvertir.style.display = "flex"
   myChart.style.display = "none"
}

salir.onclick = () =>{

    window.location = "index.html";

}



