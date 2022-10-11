<template>
  <div>
  <div class="bg-overlay">

 <div class="titulo">

<div>Azuri Producciones</div>
<v-btn
          class="boton btn-custom"
          @click="messages++"
        >
          Contactar
        </v-btn>
      </div>  
  </div>


<div ></div>

<div class="fondo">
  <v-container class="delimitar">
<v-row>
<v-col class="imagen imagesize second-order">
<v-img shaped class="rounded-lg imagen-o"
lazy-src="../assets/home/image1.jpg"
src="../assets/home/image1.jpg"
><v-btn
color="dark"
          white
          v-bind="attrs"
          v-on="on"
        >
          Ver más
        </v-btn></v-img>
</v-col>
<v-col>


<div class="container-badge">
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



<div class="fondo ">
<v-container class="delimitar">
<v-row>
<v-col class="columna1">
  <div class="container-badge-start">
  <v-chip class="badge mb-4" 
  close
  color="white"
  link
  outlined
>Destacado</v-chip>
</div>
<div class="subtitulo font-weight-black display-2 text-left">Fiestas
<span class="text-right"> Temáticas</span></div>
<div class="w-100 content-3">
<div class="division3 mb-6 mt-5"></div></div>
<div class="text-justify d-block descripcion">Organizamos tus eventos de una manera espectacular e inolvidable. Contamos con varias propuestas de acuerdo a tus necesidades y presupuesto para así crear el evento de tus sueños, somos reconocidos por brindar eventos de calidad y económicos, le aseguramos diversión y calidad en su evento. 
<br> 
Azuri Producciones organiza bautizos, cumpleaños, baby shower, despedidas, matrimonios, entre muchos otros eventos. 
</div>
</v-col>
<v-col class="imagen imagesize" >
<v-img shaped class="rounded-lg imagen-o"
lazy-src="../assets/home/image2.jpg"
src="../assets/home/image2.jpg"
>  <v-btn right
          color="dark"
          white
          v-bind="attrs"
          v-on="on"
        >
        Ver más
        </v-btn></v-img>
</v-col>
</v-row>
</v-container>
</div>


<div class="fondo margin-b-0">
<v-container class="delimitar">
<v-row>
<v-col class="imagen imagesize second-order">
<v-img shaped class="rounded-lg imagen-o"
lazy-src="../assets/home/image3.jpg"
src="../assets/home/image3.jpg"
>  <v-btn
color="dark"
          white
          v-bind="attrs"
          v-on="on"
        >
        Ver más
        </v-btn></v-img>
</v-col>
<v-col >
  <div class="container-badge">
  <v-chip class="badge mb-4"
  close
  color="white"
  link
  outlined
>Destacado</v-chip>
</div>
<div class="subtitulo font-weight-black display-2 text-right">Quinceañeros</div>
<div class="w-100 content-2">
<div class="division2 mb-6 mt-5"></div></div>
<div class="text-justify d-block descripcion">Los quince años es una edad importante para todas las mujeres, un quinceañero es una celebración para presentar a la quinceañera ante la sociedad, y demostrar que ha alcanzado madurez, Azuri Producciones se encarga de convertir tus quince en un evento único, daremos nuestro mejor esfuerzo para cumplir con sus expectativas.
<div>

  </div>
</div>
</v-col>
</v-row>
<div class="text-center margin-t">
<v-btn
          class="boton btn-custom"
          @click="messages++"
        >
          Ver más
        </v-btn>
      </div>
</v-container>
</div>

<div class="fondo paral">
  <v-parallax
    dark
    src="../assets/home/parallax.jpg"
   class="paral-o">
      
<v-container  class="delimitar">
<v-row >
        <v-col>
        <div class="text-h4 font-weight-thin mb-4">
          <v-card
    class="mx-auto"
    max-width="350"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/home/parallax.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary mt-5">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</div></v-col>
<v-col>
        <div class="text-h4 font-weight-thin mb-4">
          <v-card
    class="mx-auto"
    max-width="350"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0 ">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary mt-5">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</div></v-col>
<v-col>
        <div class="text-h4 font-weight-thin mb-4">
          <v-card
    class="mx-auto"
    max-width="350"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary mt-5">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</div></v-col>
</v-row>
</v-container>


  </v-parallax>
</div>
 
<v-btn
        fab
        dark
        small
        class="whatsapp"
      >
      <i class="fa-brands fa-whatsapp"></i>
      </v-btn>



    <div>
    <v-footer 
      v-bind="localAttrs"
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
      label="E-mail"
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
            <v-col cols="6">
<div class="enlaces">
<div> 
  <div class="text-white text-center subtitle">
              ¡Contáctanos!</div>
              
  <v-btn
      class="ma-2 width-equal text-white mt-8"
      color="transparent"
      
    >
      Inicios532
    
    </v-btn>
    <v-btn
      class="ma-2 width-equal text-white"
      color="transparent"
    >
      Nosotros
    
    </v-btn>
    <v-btn
      class="ma-2 width-equal text-white"
      color="transparent"
    >
      Servicios
    
    </v-btn>
    <v-btn
      class="ma-2 width-equal text-white"
      color="transparent"
    >
      Galeria
    
    </v-btn> <v-btn
      class="ma-2 width-equal text-white"
      color="transparent"
    >
      Contacto
    
    </v-btn>
  </div>
  </div>

</v-col>
 <v-col class="text-white">
  <div class="subtitle footer-col-3">¿Por qué elegir Azuri Producciones?</div>
<v-row class="mt-6">
  <v-col class="text-center d-flex  align-center">
    <i class="fa-solid fa-star mr-3"></i><div> Flexibilidad de servicio</div>
  </v-col>
  <v-col class="text-center d-flex align-center">
    <i class="fa-solid fa-star mr-3"></i><div>Entrega a tiempo</div>
  </v-col>
  <v-col class="text-center d-flex align-center">
 <i class="fa-solid fa-star mr-3"></i><div>Cobertura Nacional</div>
  </v-col>
</v-row>
<v-row>
  <v-col class="text-center d-flex align-center">
 <i class="fa-solid fa-star mr-3"></i><div> Unidades modernas</div>
  </v-col>
  <v-col class="text-center d-flex align-center">
 <i class="fa-solid fa-star mr-3"></i><div>Calidad de servicio</div>
  </v-col>
  <v-col class="text-center d-flex align-center">
 <i class="fa-solid fa-star mr-3"></i><div> Servicio 24/7
</div>
  </v-col>
</v-row>
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

<div class="botones">
  <div>
<v-btn
      class="ma-2"
      outlined
      color="white"
    >
      Nosotros
    </v-btn></div>

    <div class="mt-1">
<v-btn
      class="ma-2"
      outlined
      color="white"
    >
      Servicios
    </v-btn></div>
    <div class="mt-1">
<v-btn
      class="ma-2"
      outlined
      color="white"
    >
     Contacto
    </v-btn></div>
</div>


</div>
</template>


<script>
export default{
name:'HelloWorld'
}
</script>


<style scoped>
.bg-overlay{
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgb(0, 11, 34)), url("../assets/home/image0.jpg");
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
.paral{
  padding-bottom:0px;
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
  height:330px;
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
</style>