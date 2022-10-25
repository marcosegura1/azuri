import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FiestasTematicas from '../views/FiestasTematicas.vue'
import FiestasJuveniles from '../views/FiestasJuveniles.vue'
import QuinCeaneros from '../views/QuinCeaneros.vue'
import CumPleanos from '../views/CumPleanos.vue'
import EventoPrivado from '../views/EventoPrivado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cumpleanos',
    name: 'CumPleanos',
    component: CumPleanos
  },
  {
    path: '/evento-privado',
    name: 'EventoPrivado',
    component: EventoPrivado
  },
  {
    path: '/fiestas-juveniles',
    name: 'FiestasJuveniles',
    component: FiestasJuveniles
  },
  {
    path: '/fiestas-tematicas',
    name: 'FiestasTematicas',
    component: FiestasTematicas
  },
  {
    path: '/quinceaneros',
    name: 'QuinCeaneros',
    component: QuinCeaneros
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
