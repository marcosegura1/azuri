<template>
  <div>
 





      <div class="fondo about">
  <v-container class="delimitar">





<div class="container-badge ">

</div>
<div class="subtitulo font-weight-black display-2 text-center" >Fiestas Temáticas</div>
<div class="w-100 content-2">
<div class="division2 mb-6 mt-5"></div></div>
<div class="text-justify d-block descripcion">
  Organizamos tus eventos de una manera espectacular e inolvidable. Contamos con varias propuestas de acuerdo a tus necesidades y presupuesto para así crear el evento de tus sueños, somos reconocidos por brindar eventos de calidad y económicos, le aseguramos diversión y calidad en su evento. 
  Azuri Producciones organiza bautizos, cumpleaños, baby shower, despedidas, matrimonios, entre muchos otros eventos. 
</div>
<v-img shaped class="rounded-lg imagen-o mt-7"
lazy-src="../assets/home/fiestas.jpg"
src="../assets/home/fiestas.jpg"
></v-img>

</v-container>
</div>









</div>
</template>










<script>
export default {
  data() {
    return {
      titleClass: 'FiestasTematicas'
    }
  }
}
</script>


<style scoped>
.descripcion{
  font-family: 'Montserrat', sans-serif;
  font-size:12px;
  line-height: 22px;
}
.content-2{
  display: flex;
justify-content: center;
width: 100%;
}

.division2{
  width:15%;
  height:4px;
  background-color:rgba(255, 255, 255, 0.5);
display: flex;
justify-content: center;
}
.whatsapp{
  position:fixed;
  bottom:25px;
  padding:28px;
  font-size:27px;
  left:25px;
  z-index:99;
  background-color: #25d366	 !important;
}
a{
text-decoration:none !important;
}
.bg-overlay{
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgb(0, 11, 34)), url("../assets/home/fiestas.jpg");
  background-position: center center;
  background-size: cover;
    display:flex;
  justify-content:center;
    width:100%;
    align-content:center;
    align-items:center;
    text-align:center;
    position: relative;
}
.btn-custom{
  padding-left:60px !important;
  padding-right:60px !important;
  padding-top:20px !important;
  padding-bottom:20px !important;
  border-radius:100px;
  color:white;
  background-color: #FF8F00 !important;
}
.titulo{
  margin:auto;
  font-family: 'Merriweather Sans', sans-serif;
  font-size:50px;
  color:white;
}
.imagen-o{
  height:280px;
}
.sub-title{
  font-size:18px;
  margin-top:5px;
  margin-bottom:5px;
}
.fondo-footer{
  background-color:rgb(0, 11, 34);
  padding-top:30px !important;
}
.imagen-footer{
  display: flex;
  justify-items: center;
  align-items: center;
}
.size-font-footer{
  font-size:28px;
  font-weight: 500;
  color:white;
}
.sub346{
  line-height: 25px !important;
}
.white-divider{
  background-color:rgba(255,255,255, 0.15) !important;
}
@media (min-width: 576px) { 
.bg-overlay{
padding-top:20%;
padding-bottom:20%;
  }
  .division2{
    display: flex;
justify-content: center !important;
  }
}
@media (max-width: 576px) { 
  .size-font-footer{
 font-size:18px !important; 
}
.bg-overlay{
padding-top:40%;
padding-bottom:40%;
  }
  .container-badge{
  display: flex;
  justify-content: center !important;
}
.fondo{
  background-color: rgb(0, 11, 34);
  padding-top:20px !important;
  color:white;
}
.content-2{
  display: flex;
justify-content: center;
}
.second-order{
    order:2;
 }
 .footer-col-3{
    padding-top:30px;
  }
  
}
.imagesize{
  width:400px;
}
.imagen{
  display: flex;
  align-items: center;
}
.footer{padding:0px;}
.fondo{
  background-color: rgb(0, 11, 34);
  padding-top:65px;
  color:white;
  padding-bottom:65px;
}
.delimitar{
  max-width:1200px;
}
</style>



