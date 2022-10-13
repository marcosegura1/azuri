<template>
  <v-app>
 
     <v-toolbar app class='toolbar'>
      <v-toolbar-title><v-img shaped class="rounded-lg size-img"
lazy-src="./assets/home/logo.png"
src="./assets/home/logo.png"
></v-img>
</v-toolbar-title>
     <v-spacer></v-spacer>
 
      <div class="supra-container"> 
        <div>     
         <a href="#" class="color-white" >
          Inicio
         </a>
 
         <a href="#servios" class="color-white">
          Servicios
         </a>
 
         <a href="#contacto" class="color-white" >
          Contacto
         </a>
        </div>
        </div>

     </v-toolbar>
      
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









 </v-app>


 
 </template>
 
 <script>
   export default {
     data: () => ({
         drawer: false,
         group: null,
     }),
     methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
     watch: {
         group() {
             this.drawer = false;
         },
     },
    
 }
 </script>
 
 <style scoped>

 .toolbar{
   position: fixed !important;
   width:100%;
   background-color: rgba(0,11,34,0.1) !important;
backdrop-filter: blur( 10px );
   z-index: 1;
 }
 .sidenav{
  background-color:rgba(0,11,34,0.1) !important;
backdrop-filter: blur( 20px );
 }
 
 .sidenav div{
 color:white !important;
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
 .supra-container{
  display: flex;
font-size:14px !important;
padding-right:12px;
 }
 .supra-container .color-white{
  padding-left:28px;
}
.socials{
  position: fixed;
  right:0px;
  top:50%;
  transform: rotate(90deg);
}

.icon-c{
  transform: rotate(-90deg);
  font-size:20px;
}
@media (max-width: 576px) {
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
 }
 </style>