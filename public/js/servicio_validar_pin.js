'use strict';

function validar_pin(ppinValidacion){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/validar_pin',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
           pinValidacion : ppinValidacion,
        }
      });
    
      peticion.done(function(response){
        respuesta = response;
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipo_usuario', response.usuario.tipo);
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });
 
     return respuesta; 
};