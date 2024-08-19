document.write(`

    <div class="topnavbar" id="myTopnavbar">
    <a href="#index" >Inicio</a>

    <div class="dropdownbar">
        <button class="dropbutton">Servicios 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content-bar">
            <a href="#">Bicipuma</a>
            <a href="#">Pumabus</a>
            <a href="#">Estacionamientos</a>
            <a href="#">Archivo General</a>      
            <a href="#">Área Coordinadora de Archivo</a>        
            <a href="#">Servicios Generales</a>
            <a href="#">Brigada Vial</a>      
        </div>
    </div>

    <div class="dropdownbar">
        <button class="dropbutton">Nosotros 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content-bar">
            <a href="#">Misión y Visión</a>
            <a href="#">Funciones</a>
            <a href="#">Organigrama</a>
            <a href="#">Directorio</a>          
        </div>
    </div> 


    <div class="dropdownbar">
        <button class="dropbutton">Contacto 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content-bar">
            <a href="#">Redes Sociales</a>
            <a href="#">WhatsApp</a>          
        </div>
    </div> 

    <div class="dropdownbar">
        <button class="dropbutton">Comisiones 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content-bar">
            <a href="#">CInIG</a>
            <a href="#">CLS</a>          
        </div>
    </div> 

    <div class="dropdownbar">
        <button class="dropbutton">Preguntas frecuentes 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content-bar">
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
  var x = document.getElementById("myTopnavbar");
  if (x.className === "topnavbar") {
    x.className += " responsive";
  } else {
    x.className = "topnavbar";
  }
}
</script>
       `);
