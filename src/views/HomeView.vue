<template>
  <div>
 



<div class="fondo about">
  <v-container class="delimitar">
<v-row>
<v-col class="imagen imagesize second-order">
<v-img shaped class="rounded-lg imagen-o"
lazy-src="../assets/home/image1.jpg"
src="../assets/home/image1.jpg"
></v-img>
</v-col>
<v-col>


<div class="container-badge ">
  <v-chip class="badge mb-4"
  close
  color="white"
  link
  outlined
>Destacado</v-chip>
</div>
<div class="subtitulo font-weight-black display-2 text-right">Sobre <span class=" text-right">Nosotros</span></div>
<div class="w-100 content-2">
<div class="division2 mb-6 mt-5"></div></div>
<div class="text-justify d-block descripcion">Somos una empresa especialista en organización de eventos sociales de todo tipo. Contamos con una gran experiencia en el mercado y nos comprometemos al 100% con nuestros clientes. Azuri Producciones además cuenta con una gran variedad de proveedores para las diversas áreas que se cubren al realizar un evento, para que tu evento sea espectacular. 
</div>
</v-col>
</v-row>
</v-container>
</div>


<div class="fondo servicios" id="servicios">
  <v-container class="delimitar">
<div class="subtitulo font-weight-black display-2 text-center mb-10">Servicios</div>

<v-row >

  <v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
  src="../assets/home/fiestas.jpg"
  height="200px"
><v-card-title class="display-block text-center">
  Fiestas Temáticas
<h6> 
    Fiestas Temáticas
</h6>
</v-card-title> 

<v-card-subtitle class="pt-2 text-center">
<router-link  to="/quinceaneros/"><v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle></v-img>


</v-card>
</v-col>




<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
  src="../assets/home/quinceañeros.jpg"
  height="200px"
>
<v-card-title class="display-block text-center">
  Quinceañeros
  <h6> 
    Quinceañeros
</h6>
</v-card-title>

<v-card-subtitle class="text-center"> <router-link to="/quinceaneros/" >
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>
</v-img>



</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
  src="../assets/home/cumpleaños.jpg"
  height="200px"
>
<v-card-title class="display-block text-center">
  Cumpleaños
  <h6> 
    Cumpleaños
</h6>
</v-card-title>

<v-card-subtitle class="text-center"><router-link to="/cumpleanos#inicio">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>


</v-img>

</v-card>
</v-col>

</v-row>
<v-row class="mt-9">

<v-col >

<v-card
class="mx-auto text-center"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
src="../assets/home/fiestas-juveniles.jpg"
height="200px"
>
<v-card-title class="display-block text-center">
Fiestas Juveniles
<h6> 
    Fiestas Juveniles
</h6>
</v-card-title>

<v-card-subtitle><router-link to="/fiestas-juveniles">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>
</v-img>



</v-card>
</v-col>




<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
src="../assets/home/eventos-privados.jpg"
height="200px"
>
<v-card-title class="display-block text-center">
  Evento Privado
  <h6>
    Evento Privado
  </h6>
</v-card-title>

<v-card-subtitle class="text-center"><router-link to="/evento-privado#inicio">
 
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>

</v-img>


</v-card>
</v-col>

<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
src="../assets/home/eventos-privados.jpg"
height="200px"
>
<v-card-title class="display-block text-center">
  Equipos de sonido y DJ
<h6> 
  Equipos de sonido y DJ
</h6>
</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>
</v-img>



</v-card>
</v-col>



<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
src="../assets/home/eventos-privados.jpg"
height="200px"
>
<v-card-title class="display-block text-center">
  Mobiliario
  <h6>
    Mobiliario
  </h6>
</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>
</v-img>



</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
src="../assets/home/eventos-privados.jpg"
height="200px"
>
<v-card-title class="display-block text-center">
  Casas para eventos
<h6>
  Casas para eventos
</h6>
</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>
</v-img>



</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
src="../assets/home/eventos-privados.jpg"
height="200px"
>
<v-card-title class="display-block text-center">
  Animación
<h6>
  Animación
</h6>
</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle></v-img>




</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img  class="contenedor-imagen" gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.4)"
src="../assets/home/eventos-privados.jpg"
height="200px"
>
<v-card-title class="display-block text-center">
  Personal A1
<h6>
  Personal A1   
</h6>

</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle></v-img>




</v-card>
</v-col>




</v-row>

</v-container>
</div>

 

      



   




</div>



</template>


<script>
export default {
  data() {
    return {
      titleClass: 'home'
    }
    },
}
</script>


<style scoped>


@media (max-width: 576px) { 
 
  .fondo{
  background-color: rgb(0, 11, 34);
  padding-top:20px !important;
  color:white;
}

  .badge{
    display:none;
  }
 .second-order{
    order:2;
 }
 
 
  
}

.division{
  width:45%;
  height:4px;
  background-color:rgba(255, 255, 255, 0.5);
  margin:auto;
}
.fondo{
  background-color: rgb(0, 11, 34);
  padding-top:65px;
  color:white;
}
.subtitulo{
  line-height: 70px;
}
.division2{
  width:45%;
  height:4px;
  background-color:rgba(255, 255, 255, 0.5);
display: flex;
justify-content: flex-end;
}
.content-2{
  display: flex;
justify-content: flex-end;
width: 100%;
}
.division3{
  width:45%;
  height:4px;
  background-color:rgba(255, 255, 255, 0.5);
display: flex;
justify-content: flex-start;
}
.content-3{
  display: flex;
justify-content: flex-start;
width: 100%;
}
.descripcion{
  font-family: 'Montserrat', sans-serif;
  font-size:12px;
  line-height: 22px;
}
.imagen{
  display: flex;
  align-items: center;
}
@media (max-width: 576px) { 

  .paral-o{
  height: 1300px !important;
}
.subtitulo{
  font-size:35px !important;
}
  .subtitulo{
text-align: center !important;
  }
  .division2{
    display: flex;
justify-content: center !important;
  }
  .content-2{
  display: flex;
justify-content: center;
}
.division3{
  width:45%;
  height:4px;
  background-color:rgba(255, 255, 255, 0.5);
display: flex;
justify-content: center;
}
.content-3{
  display: flex;
justify-content: center;
width: 100%;
}
.botones, .socials{
  display:none;
}
.container-badge{
  display: flex;
  justify-content: center !important;
}
.container-badge-start{
  display: flex;
  justify-content: center !important;
}

.paral{
  margin-top:-40px !important;
}

}



.container-badge{
  display: flex;
  justify-content: flex-end;
}
.container-badge-start{
  display: flex;
  justify-content: flex-start;
}

.socials{
  transform: rotate(90deg);
  position: fixed;
top:50%;
  right:-20px;
}
.botones{
  position: fixed;
bottom:40px;
  right:40px;
}
.enlaces button{
  display: block !important;
}
.enlaces{
display: flex;
justify-content: center;;
}

.margin-b-0{
padding-bottom:0px !important;
}
.margin-t{
  padding-top:55px;
}
a{
text-decoration:none !important;
}
.imagesize{
  width:400px;
}
.sect {
  width: 100%;
  min-height: 500px;
}

video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}


.width-equal{
  width:140px;
}
.white-divider{
  background-color:rgba(255,255,255, 0.15) !important;
}
.imagen-o{
  height:280px;
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
.fondo{
  margin-top:-1px;
}
.sub346{
  line-height: 25px !important;
}


.font-size{
  font-size:40px;
  padding-bottom:40px;
  padding-top:90px;
}
.paral-o{
  height: 1100px !important;
}

.paral{
  height: 1100px !important;
}
@media (min-width: 576px) { 
.v-application .mx-auto{
  margin-right:0px !important;
  margin-left:0px !important;
}
}
.servicios{
  padding-bottom:40px;
}


.v-card__title{
  justify-content: center;
}
.contenedor-imagen{
  display: flex;
  justify-content: center;
  align-items: center;
  color:white
}
.display-block{
  display:block !important;
}

</style>