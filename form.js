function click_boton(){




function checkNombre ()
{
let nombre = document.getElementById("nombre").value;
registrar_campo(nombre, "nombre");
}


function checkApellido ()
{
let apellido = document.getElementById("apellido").value;
registrar_campo(apellido, "apellido");
}



function checkTelefono()
{
 let telefono = document.getElementById("telefono").value;
 registrar_telefono(telefono, "telefono");
 }

//cambio    
function checkContrasena() {
    let p1 = document.getElementById("password").value;
    let p2 = document.getElementById("password").value;
    var espacios = false;
    let cont = 0;

while (!espacios && (cont < p1.length)) {
  if (p1.charAt(cont) == " ")
    espacios = true;
  cont++;
}
   
 if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}

else if (p1.length == 0 || p2.length == 0) {
    alert("Los campos de la password no pueden quedar vacios");
    return false;
  }

else if (p1 == /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/){ 
    alert("Los campos de la password no son validos");
    return false;
}    

} 

  function checkCorreo(correo) {
    let correo = document.getElementById("correo").value;
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo)){
     alert("La dirección de email " + correo + " es correcta!.");
    } else {
     alert("La dirección de email es incorrecta!.");
    }
  }

}


function registrar_campo(campo, ref_campo) {
    let verificacion = validar_texto(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " no admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " debe contener entre 4 y 30 caracteres");
    }
    else if (verificacion == 4){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }
}

function registrar_telefono(campo, ref_campo) {
    let verificacion = validar_numero(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " solo admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " debe contener 5 digitos");
    }
    else if (verificacion == 4){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }
}

function validar_correo(campo, ref_campo) {

    let verificacion = validar_numero(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " solo admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " debe contener 5 digitos");
    }
    else if (verificacion == 4){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }


    
}



function validar_texto(campo){
    let array_campo = Array.from(campo);
    let verificacion = 1;
    if (campo != "") {
        if (array_campo.length <= 30 && array_campo.length >= 4) {
            for(let i=0; i<array_campo.length; i++)
            {
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){  
                    verificacion = 2;
                    i = array_campo.length;                  
                }
            }
        }
        else
        {
            verificacion = 3;
        }       
    }
    else
    {
        verificacion = 4;       
    }
    return verificacion;
}

function validar_numero(campo){
    let array_campo = Array.from(campo);
    let verificacion = 1;
    if(campo != ""){
        if(array_campo.length == 7){
            for(let i=0; i<array_campo.length; i++)
            {                
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){ 
                                                        
                }
                else
                {
                    verificacion = 2;
                    i = array_campo.length;  
                }
            }
        }
        else
        {
            verificacion = 3;
        }

    }
    else
    {
        verificacion = 4;
    }
    return verificacion;
}