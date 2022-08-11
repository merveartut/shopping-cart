import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Card from './Card.vue'
import Bag from './Bag.vue'
import Detail from './Detail.vue'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"


const routes=[
    {path:'/', name: 'Card',component: Card},
   
    {path:'/bag/:products/:totalPrice',name:'Bag', component: Bag},
    {path:'/detail/:id',name: "ShowDetails", component: Detail},
    {path:'/', redirect:'/'},

]
const router=createRouter({
    history:createWebHistory(),
    routes: routes,
  
})

export default router
const app = createApp(App)
app.use(router);
app.mount('#app');

