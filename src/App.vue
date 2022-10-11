<template>
  <v-app >
 
     <v-toolbar app class='toolbar'>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>
       <v-spacer></v-spacer>
 
       <v-btn icon>
        <i class="fa-brands fa-facebook-f social"></i>
       </v-btn>
 
       <v-btn icon >
        <i class="fa-brands fa-instagram social"></i>
       </v-btn>
 
       <v-btn icon >
        <i class="fa-brands fa-twitter social"></i>
       </v-btn>
     </v-toolbar>
 
     <v-navigation-drawer 
       v-model="drawer" app
       temporary class="sidenav"
       
     >
     <v-list
         nav
         dense
       >
         <v-list-item-group
           v-model="group"
           active-class="deep-white--text text--accent-4"
         >
         <router-link class="color-white" to="/"><v-list-item>
            <v-list-item-title>Inicio</v-list-item-title>
           </v-list-item></router-link>
 
           <router-link class="color-white" to="/about"><v-list-item>
              <v-list-item-title>Nosotros</v-list-item-title>
           </v-list-item></router-link>
 

           <router-link class="color-white" to="/"><v-list-item>
            <v-list-item-title>Go to About</v-list-item-title>
           </v-list-item></router-link>
 
           <router-link class="color-white" to="/"><v-list-item>
             <v-list-item-title>Go to About</v-list-item-title>
           </v-list-item></router-link>


         </v-list-item-group>
       </v-list>
     </v-navigation-drawer>
  
      
     <router-view/>
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
 </style>