document.write(`

<ul>
  <li><a href="#home">Inicio</a></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Servicios</a>
    <div class="dropdown-content">
      <a href="#">Bicipuma</a>
      <a href="#">Pumabus</a>
      <a href="#">Estacionamientos</a>
      <a href="#">Archivo General</a>
      <a href="#">Área Coordinadora de Archivo</a>
      <a href="#">Servicios Generales</a>    
      <a href="#">Brigada Vial</a>       
    </div>
  </li>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Nosotros</a>
    <div class="dropdown-content">
      <a href="#">Misión y Visión</a>
      <a href="#">Funciones</a>
      <a href="#">Organigrama</a>
      <a href="#">Directorio</a>
      <a href="#">Ubicación</a>
    </div>
  </li>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Contacto</a>
    <div class="dropdown-content">
      <a href="#">Redes Sociales </a>
      <a href="#">WhatsApp</a>
    </div>
  </li>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Comisiones</a>
    <div class="dropdown-content">
      <a href="#">CInIG</a>
      <a href="#">CLS</a>
    </div>
  </li>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Preguntas frecuentes</a>
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
  </li>
</ul>


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
