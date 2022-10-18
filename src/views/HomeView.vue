<template>
  <div>
  <div class="bg-overlay">

 <div class="titulo">

<div>Azuri Producciones</div>
<div class="sub-title">Todo para tu evento en un solo lugar</div>
<v-btn
          class="boton btn-custom"
          @click="messages++"
        >
          Saber más
        </v-btn>
      </div>  
  </div>


<div ></div>

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
<v-img 
  src="../assets/home/fiestas.jpg"
  height="200px"
></v-img>

<v-card-title>
  Fiestas Temáticas
</v-card-title>

<v-card-subtitle class="pt-2 text-center">
  <router-link to="/fiestas-tematicas" >
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>
</v-card>
</v-col>




<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
  src="../assets/home/quinceañeros.jpg"
  height="200px"
></v-img>

<v-card-title>
  Quinceañeros
</v-card-title>

<v-card-subtitle class="text-center"> <router-link to="/quinceaneros" >
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>



</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
  src="../assets/home/cumpleaños.jpg"
  height="200px"
></v-img>

<v-card-title>
  Cumpleaños
</v-card-title>

<v-card-subtitle class="text-center"><router-link to="/cumpleanos">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>



</v-card>
</v-col>

</v-row>
<v-row class="mt-9">

<v-col >

<v-card
class="mx-auto text-center"
max-width="344"
>
<v-img
src="../assets/home/fiestas-juveniles.jpg"
height="200px"
></v-img>

<v-card-title class="text-center">
  <div class="text-center">Fiestas Juveniles</div>
</v-card-title>

<v-card-subtitle><router-link to="/fiestas-juveniles">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>



</v-card>
</v-col>




<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
src="../assets/home/eventos-privados.jpg"
height="200px"
></v-img>

<v-card-title>
  Evento Privado

</v-card-title>

<v-card-subtitle class="text-center"><router-link to="/evento-privado">
 
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn></router-link>
</v-card-subtitle>



</v-card>
</v-col>

<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
src="../assets/home/eventos-privados.jpg"
height="200px"
></v-img>

<v-card-title>
  Equipos de sonido y DJ

</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>



</v-card>
</v-col>



<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
src="../assets/home/eventos-privados.jpg"
height="200px"
></v-img>

<v-card-title>
  Mobiliario

</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>



</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
src="../assets/home/eventos-privados.jpg"
height="200px"
></v-img>

<v-card-title>
  Casas para eventos

</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>



</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
src="../assets/home/eventos-privados.jpg"
height="200px"
></v-img>

<v-card-title>
  Animación

</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>



</v-card>
</v-col>


<v-col>

<v-card
class="mx-auto"
max-width="344"
>
<v-img
src="../assets/home/eventos-privados.jpg"
height="200px"
></v-img>

<v-card-title>
  Personal A1

</v-card-title>

<v-card-subtitle class="text-center">
  <v-btn
          class="boton btn-custom my-4"
          @click="messages++"
        >
          Saber más
        </v-btn>
</v-card-subtitle>



</v-card>
</v-col>




</v-row>

</v-container>
</div>

 
<v-btn
        fab
        dark
        mdall
        class="whatsapp"
      >
      <i class="fa-brands fa-whatsapp"></i>
      </v-btn>



    <div>
    <v-footer 
      v-bind="localAttrs" id="contactar"
      :padless="padless" class="footer"
    >
      <v-card
        flat
        tile
        class="fondo-footer"
        width="100%"
        
      >
        <v-card-text>
         <v-container class="delimitar">
          <v-row>
            <v-col class="text-white subtitle">
              ¡Contáctanos!
              <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
      color="white"
      class="custom-label-color mt-6"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      color="white"
      class="custom-placeholer-color"
    ></v-text-field>


    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Message"
      required  
      color="white"
      class="custom-label-color"
    ></v-text-field>
  

    <v-btn
      color="white"
      class="mr-4 mt-5"
      @click="reset"
    >
      Enviar
    </v-btn>
  </v-form>
            </v-col>
           
 <v-col cols="6" class="text-white text-center sub346" >
  <v-img class="rounded-lg imagen-footer" gradient="rgba(0,0,0,.33), rgba(0,0,0,.7)"
  src="../assets/home/image4.jpg"
  height="300px"
> <div class="size-font-footer text-white">Somos los mejores en lo que hacemos</div></v-img>

 

            </v-col>
          </v-row>
         </v-container>
        </v-card-text>

        <v-divider class="mt-5 white-divider"></v-divider>
        <v-card-text class="white--text text-center mt-3 mb-3">
          <div>Desarrollado por Marco Segura</div>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
<div>



  
</div>



</div>



</template>


<script>
export default {
  data() {
    return {
      titleClass: 'home'
    }
  }
}
</script>


<style scoped>
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
@media (min-width: 576px) { 
.bg-overlay{
padding-top:20%;
padding-bottom:20%;
  }
}

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
  .bg-overlay{
padding-top:40%;
padding-bottom:40%;
  }
  .footer-col-3{
    padding-top:30px;
  }
  
}
.titulo{
  margin:auto;
  font-family: 'Merriweather Sans', sans-serif;
  font-size:50px;
  color:white;
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
  .size-font-footer{
 font-size:18px !important; 
}
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
.text-white{
  color:white !important;
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
.footer{padding:0px;}

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
.delimitar{
  max-width:1200px;
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
.fondo-footer{
  background-color:rgb(0, 11, 34);
  padding-top:30px !important;
}
.subtitle{
  font-size:20px;
  font-weight: 600;
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
.sub-title{
  font-size:18px;
  margin-top:5px;
  margin-bottom:5px;
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
.imagen-footer{
  display: flex;
  justify-items: center;
  align-items: center;
}
.size-font-footer{
  font-size:28px;
  font-weight: 500;
}
.v-card__title{
  justify-content: center;
}

</style>