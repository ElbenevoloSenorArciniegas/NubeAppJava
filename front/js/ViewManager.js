/*
              -------Creado por-------
             \(x.x )/ Anarchy \( x.x)/
              ------------------------
 */

//    Ella no te quiere </3 mejor ponte a programar  \\
/** Valida los campos requeridos en un formulario
 * Returns flag Devuelve true si el form cuenta con los datos mÃ­nimos requeridos
 */
function validarForm(idForm){
	var form=$('#'+idForm)[0];
	for (var i = 0; i < form.length; i++) {
		var input = form[i];
		if(input.required && input.value==""){
			return false;
		}
	}
	return true;
}

////////// JUEGO \\\\\\\\\\
function preJuegoInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="JuegoInsert";
 	enviar(formData,,postJuegoInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postJuegoInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Juego registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preJuegoList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'front/JuegoList.html'); 
     var formData = {};
     formData["ruta"]="JuegoList";
 	enviar("",,postJuegoList); 
}

 function postJuegoList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Juego = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("JuegoList").appendChild(createTR(Juego));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// JUEGOJUGADOR \\\\\\\\\\
function preJuegojugadorInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="JuegojugadorInsert";
 	enviar(formData,,postJuegojugadorInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postJuegojugadorInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Juegojugador registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preJuegojugadorList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'front/JuegojugadorList.html'); 
     var formData = {};
     formData["ruta"]="JuegojugadorList";
 	enviar("",,postJuegojugadorList); 
}

 function postJuegojugadorList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Juegojugador = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("JuegojugadorList").appendChild(createTR(Juegojugador));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// JUGADOR \\\\\\\\\\
function preJugadorInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="JugadorInsert";
 	enviar(formData,,postJugadorInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postJugadorInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Jugador registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preJugadorList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'front/JugadorList.html'); 
     var formData = {};
     formData["ruta"]="JugadorList";
 	enviar("",,postJugadorList); 
}

 function postJugadorList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Jugador = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("JugadorList").appendChild(createTR(Jugador));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

////////// TIPO \\\\\\\\\\
function preTipoInsert(idForm){
     //Haga aquÃ­ las validaciones necesarias antes de enviar el formulario.
	if(validarForm(idForm)){
 	var formData=$('#'+idForm).serialize();
     formData["ruta"]="TipoInsert";
 	enviar(formData,,postTipoInsert);
 	}else{
 		alert("Debe llenar los campos requeridos");
 	}
}

 function postTipoInsert(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     //Consideramos buena prÃ¡ctica no manejar cÃ³digo HTML antes de este punto.
 		if(state=="success"){
                     if(result=="true"){            
 			alert("Tipo registrado con Ã©xito");
                     }else{
                        alert("Hubo un errror en la inserciÃ³n ( u.u)\n"+result);
                     } 		}else{
 			alert("Hubo un errror interno ( u.u)\n"+result);
 		}
}

function preTipoList(container){
     //Solicite informaciÃ³n del servidor
     cargaContenido(container,'front/TipoList.html'); 
     var formData = {};
     formData["ruta"]="TipoList";
 	enviar("",,postTipoList); 
}

 function postTipoList(result,state){
     //Maneje aquÃ­ la respuesta del servidor.
     if(state=="success"){
         var json=JSON.parse(result);
         if(json[0].msg=="exito"){

            for(var i=1; i < Object.keys(json).length; i++) {   
                var Tipo = json[i];
                //----------------- Para una tabla -----------------------
                document.getElementById("TipoList").appendChild(createTR(Tipo));
                //-------- Para otras opciones ver htmlBuilder.js ---------
            }
         }else{
            alert(json[0].msg);
         }
     }else{
         alert("Hubo un errror interno ( u.u)\n"+result);
     }
}

//That`s all folks!