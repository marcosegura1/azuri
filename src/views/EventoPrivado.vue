<template>
  <div>
  <div class="bg-overlay">

 <div class="titulo">

<div>Azuri Producciones</div>
<div class="sub-title">Todo para tu evento en un solo lugar</div><a href="#contactar">
<v-btn
          class="boton btn-custom"
          @click="messages++"
        >
          Contactar
        </v-btn></a>
      </div>  
  </div>
  <v-btn
        fab
        dark
        mdall
        class="whatsapp"
      >
      <i class="fa-brands fa-whatsapp"></i>
      </v-btn>





      <div class="fondo about">
  <v-container class="delimitar">





<div class="container-badge ">

</div>
<div class="subtitulo font-weight-black display-2 text-center">Evento Privado
</div>
<div class="w-100 content-2">
<div class="division2 mb-6 mt-5"></div></div>
<div class="text-justify d-block descripcion">
  ¿No encuentras una descripción que encaje con el tipo de evento que buscas celebrar? No te preocupes, gracias a nuestra gran variedad y cantidad de proveedores podemos hacer el evento que deseas una realidad, no dudes en contactarnos!
</div>
<v-img shaped class="rounded-lg imagen-o mt-7"
lazy-src="../assets/home/eventos-privados.jpg"
src="../assets/home/eventos-privados.jpg"
></v-img>

</v-container>
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






</div>
</template>










<script>
export default {
  data() {
    return {
      titleClass: 'EventoPrivado'
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



