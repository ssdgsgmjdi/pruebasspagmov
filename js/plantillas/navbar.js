document.write(`

    <div class="topnav" id="myTopnav">
    <a href="#index" >Inicio</a>

    <div class="dropdown">
        <button class="dropbtn">Servicios 
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Bicipuma</a>
            <a href="#">Pumabus</a>
            <a href="#">Estacionamientos</a>
            <a href="#">Archivo General</a>      
            <a href="#">Área Coordinadora de Archivo</a>        
            <a href="#">Servicios Generales</a>
            <a href="#">Brigada Vial</a>      
        </div>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Nosotros 
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Misión y Visión</a>
            <a href="#">Funciones</a>
            <a href="#">Organigrama</a>
            <a href="#">Directorio</a>          
        </div>
    </div> 


    <div class="dropdown">
        <button class="dropbtn">Contacto 
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Redes Sociales</a>
            <a href="#">WhatsApp</a>          
        </div>
    </div> 

    <div class="dropdown">
        <button class="dropbtn">Comisiones 
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">CInIG</a>
            <a href="#">CLS</a>          
        </div>
    </div> 

    <div class="dropdown">
        <button class="dropbtn">Preguntas frecuentes 
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Generales</a>        
            <a href="#">Bicipuma</a>
            <a href="#">Pumabus</a>
            <a href="#">Estacionamientos</a>
            <a href="#">Archivo General</a>    
            <a href="#">Área Coordinadora de Archivo</a>            
            <a href="#">Servicios Generales</a>
            <a href="#">Brigada Vial</a>      
        </div>
    </div>

  <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div>


<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
       `);