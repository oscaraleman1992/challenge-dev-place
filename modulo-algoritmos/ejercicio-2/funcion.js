
    function confirmacion(){
         let intentos=1
        if (document.form.pass.value != document.form.pass2.value){
                intentos++
              if (intentos < 4) {
                   console.log("intento 1")
            }
         }
            else
            {
                document.write ("usuario ingresado")
            }
            
         
        }
        
     