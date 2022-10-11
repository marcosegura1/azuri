


  
<script>
export default{
name:'HelloWorld'
}
</script>
  
<style scoped>
.bg-overlay{
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgb(0, 0, 0)), url("https://eco-andes.com/wp-content/uploads/2021/03/peru.jpg");
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
.bg-overlay{
padding-top:40%;
    padding-bottom:40%;

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
  background-color: black;
  padding-top:60px;
  padding-bottom:60px;
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
.badge{
  justify-content: center !important;

}
.paral{
  margin-top:-110px;
}
}
.text-white{
  color:white !important;
}
.whatsapp{
  position:fixed;
  bottom:25px;
  padding:28px;
  left:25px;
  z-index:99;
  background-color: #25d366	 !important;
}
.footer{padding:0px}

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
</style>