document.write(`
    <div class="topnav" id="myTopnav">
    <div class="topnavbar" id="myTopnavbar">
    <a href="#index" >Inicio</a>
    <div class="dropdown">
        <button class="dropbtn">Servicios 
            <i class="fa fa-caret-down"></i>
    <div class="dropdownbar">
        <button class="dropbutton">Servicios 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content">
        <div class="dropdown-content-bar">
            <a href="#">Bicipuma</a>
            <a href="#">Pumabus</a>
            <a href="#">Estacionamientos</a>

        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Nosotros 
            <i class="fa fa-caret-down"></i>
    <div class="dropdownbar">
        <button class="dropbutton">Nosotros 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content">
        <div class="dropdown-content-bar">
            <a href="#">Misión y Visión</a>
            <a href="#">Funciones</a>
            <a href="#">Organigrama</a>

    </div> 
    <div class="dropdown">
        <button class="dropbtn">Contacto 
            <i class="fa fa-caret-down"></i>
    <div class="dropdownbar">
        <button class="dropbutton">Contacto 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content">
        <div class="dropdown-content-bar">
            <a href="#">Redes Sociales</a>
            <a href="#">WhatsApp</a>          
        </div>
    </div> 
    <div class="dropdown">
        <button class="dropbtn">Comisiones 
            <i class="fa fa-caret-down"></i>
    <div class="dropdownbar">
        <button class="dropbutton">Comisiones 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content">
        <div class="dropdown-content-bar">
            <a href="#">CInIG</a>
            <a href="#">CLS</a>          
        </div>
    </div> 
    <div class="dropdown">
        <button class="dropbtn">Preguntas frecuentes 
            <i class="fa fa-caret-down"></i>
    <div class="dropdownbar">
        <button class="dropbutton">Preguntas frecuentes 
            <i class="fa-bar fa-caret-down-bar"></i>
        </button>
        <div class="dropdown-content">
        <div class="dropdown-content-bar">
            <a href="#">Generales</a>        
            <a href="#">Bicipuma</a>
            <a href="#">Pumabus</a>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  var x = document.getElementById("myTopnavbar");
  if (x.className === "topnavbar") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
    x.className = "topnavbar";
  }
}
</script>
       `);
