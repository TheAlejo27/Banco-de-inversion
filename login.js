const formlogin = document.querySelector("#login")
const usuario = document.querySelector("#nombres-login")
const pass = document.querySelector("#documentoPass")
const botonLogin = document.querySelector("#botonLogin")
const botonRegister = document.querySelector("#botonRegister")
const formulario = document.querySelector("#formulario-usuario");
const nombre = document.querySelector("#nombres");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const localidad = document.querySelector("#localidad");
const documento = document.querySelector("#documento");
const enviar = document.querySelector("#submit");

class LoginInversion {

    constructor(nombre, apellido, edad, localidad, documento) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.localidad = localidad
        this.documento = documento
    }
}

formlogin.botonLogin.onclick = () =>{
 
    loguear(usuario.value,pass.value)

}

formlogin.botonRegister.onclick = () =>{

    formlogin.style.display="none"
    formulario.style.display="flex"
    
}

function loguear (usuario,pass) {
  let persona = JSON.parse(localStorage.getItem("usuario"))
  if(usuario == persona.nombre && pass == persona.documento){
    window.location = "principal.html";
    localStorage.usuario = JSON.stringify(persona)
  }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    let persona = new LoginInversion(nombre.value, apellido.value, edad.value, localidad.value, documento.value)
    localStorage.setItem("usuario",JSON.stringify(persona))
    formulario.style.display = "none"
    swal("Finalizado", "El usuario se creo correctamente ", "success");
    formlogin.style.display = "flex"
}



nombre.onchange = () => {

    if (nombre.value == null || nombre.value === "") {
        swal("ERROR", "Complete todos los campos", "error");
        nombre.style.border = "5px solid red";
        submit.disabled = true;
    } else {
        nombre.style.border = "none";
        submit.disabled = false;
    }
}

edad.onchange = () => {

    if (edad.value < 18 || edad.value > 99) {
        swal("ERROR", "Tienes que ser mayor de edad", "error");
        edad.style.border = "5px solid red";
        submit.disabled = true;
    } else {
        edad.style.border = "none";
        submit.disabled = false;
    }
}