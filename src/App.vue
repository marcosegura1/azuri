<template>
  <v-app>
     <v-toolbar app class='toolbar'>
      <v-toolbar-title><router-link to="/" ><v-img shaped class="rounded-lg size-img"
lazy-src="./assets/home/logo.png"
src="./assets/home/logo.png"
></v-img></router-link>
</v-toolbar-title>
     <v-spacer></v-spacer>
 
      <div class="supra-container"> 
        <div>     
          <router-link to="/" class="color-white">
          Inicio
        </router-link>
 
        <a href="/#servicios" class="color-white" >
          Servicios
        </a>
 
         <a href="#contactar" class="color-white" >
          Contacto
         </a>
        </div>
        </div>

     </v-toolbar>

     <div class="bg-overlay">

<div class="titulo"   id="features">

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


     <router-view/>

    
     <div class="socials">

      <v-btn
  class="mx-2"
  fab
  dark
  small
  color="pink"
>

<i class="fa-brands fa-facebook-f icon-c"></i>

</v-btn>
<v-btn
  class="mx-2"
  fab
  dark
  small
  color="pink"
>
<i class="fa-brands fa-instagram icon-c"></i>
</v-btn>





</div>



<v-btn href="https://api.whatsapp.com/send?phone=948995499&text=Hola,%20deseo%20saber%20m%C3%A1s%20informaci%C3%B3n%20de%20los%20servicios%20que%20ofrecen"
        fab
        dark
        mdall
        class="whatsapp"
      >
      <i class="fa-brands fa-whatsapp"></i>
      </v-btn>




      <div
      
      class="message"
    >
    ¡Mándanos un mensaje!
    </div>




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
  src="./assets/home/image4.jpg"
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







 </v-app>


 
 </template>
 
 <script>
 import $ from 'jquery'

   export default {
    data() {
    return {
      titleClass: 'home'
      
    }
   
    },
async mounted() {
$("#features").fadeIn()
.css({top:1600,position:'relative'})
.animate({top:0}, 800, function() {
});
}
}

 </script>
 
 <style scoped>
 .bg-overlay{
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgb(0, 11, 34)), url("./assets/home/fondo.jpg");
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
 a{
text-decoration:none !important;
}
 .toolbar{
   position: fixed !important;
   width:100%;
   background-color: rgba(0,11,34,0.1) !important;
backdrop-filter: blur( 10px );
   z-index: 1;
 }


 @media (min-width: 576px) { 
  .bg-overlay{
padding-top:20%;
padding-bottom:20%;
  }
}
.titulo{
  margin:auto;
  font-family: 'Merriweather Sans', sans-serif;
  font-size:50px;
  color:white;
}
.footer{padding:0px;}
 .sidenav{
  background-color:rgba(0,11,34,0.1) !important;
backdrop-filter: blur( 20px );
 }
 .fondo-footer{
  background-color:rgb(0, 11, 34);
  padding-top:30px !important;
}
 
 .sidenav div{
 color:white !important;
 }
 .delimitar{
  max-width:1200px;
}
 .sub-title{
  font-size:18px;
  margin-top:5px;
  margin-bottom:5px;
}
 .color-white{
  color:white !important;
  text-decoration:none;
 }
 .social{
  color:white;
  font-size:15px;
 }
 .nav-items{
  color:White !important; 
 }
 .imagen-footer{
  display: flex;
  justify-items: center;
  align-items: center;
}
 .whatsapp{
  position:fixed;
  left:25px !important;
  bottom:25px;
  padding:28px;
  font-size:27px;
  z-index:99;
  background-color: #25d366	 !important;
}
.fondo{
  background-color: rgb(0, 11, 34);
  padding-top:65px;
  color:white;
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
 .supra-container{
  display: flex;
font-size:20px !important;
padding-right:12px;
 }
 .supra-container .color-white{
  padding-left:28px;
}
.message{
  position: fixed;
  bottom:25px;
  left:90px;
  font-size:14.5px;
  width:200px !important;
  border-radius:25px;
  background-color: rgba(0,0,0,0.4);
  padding:18px;
color:white;
z-index:9999;
}
.socials{
  position: fixed;
  z-index:999;
  right:0px;
  top:50%;
  transform: rotate(90deg);
}
.subtitle{
  font-size:20px;
  font-weight: 600;
}
.icon-c{
  transform: rotate(-90deg);
  font-size:20px;
}
@media (max-width: 576px) {
  .size-font-footer{
 font-size:18px !important; 
}
  .fondo{
  background-color: rgb(0, 11, 34);
  padding-top:20px !important;
  color:white;
}
  .footer-col-3{
    padding-top:30px;
  }
.socials{
  display: none;
}
.bg-overlay{
padding-top:40%;
padding-bottom:40%;
  }
.supra-container div{
  display:flex !important;
 width: 100% !important;
  justify-content: center !important;
}
.supra-container {
 width: 100% !important;
}
 }
 .size-img{
  width:135px;
 }.text-white{
  color:white !important;
}
.size-font-footer{
  font-size:28px;
  font-weight: 500;
}

 </style>
