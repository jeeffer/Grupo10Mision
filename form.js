function click_boton()
{    
    let telefono = document.getElementById("telefono").value;
        checkTelefono(telefono, "telefono");
}

function checkTelefono(campo, ref_campo) {
    let verificacion = validar_numero(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " solo admite números");
    }
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " debe contener 7 digitos");
    }
    else if (verificacion == 4){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }
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

/*function validar_numero(campo){
    let array_campo = Array.from(campo);
    let verificacion = 1;
    if(array_campo.length <= 7  && array_campo.lenght >=4){
        for(let i=0; i< array_campo.length; i++){
            for(let j=0; j<=9; j++){
                if(array_campo[i] == j){
                    verificacion = 2;
                    break
                }
                else
                {
                    verificacion = 3;
                }

            }
        }
    }
    else
        {
            verificacion = 4;
        }
    return verificacion;
}*/