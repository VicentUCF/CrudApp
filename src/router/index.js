import { createWebHistory, createRouter } from "vue-router";
import Tabla from "@/views/TablaPersones.vue";
import Card from "@/views/CardPersones.vue";
import Add from "@/views/AddPersona.vue";
import NotFound from "@/views/404.vue";
import Home from "@/views/Home.vue";


const routes = [
  { path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound
  },
  { path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tabla",
    name: "tablaPersones",
    component: Tabla,
  },

  {
    path: "/cards",
    name: "cardPersones",
    component: Card,
  },

  {
    path: "/newPersona",
    name: "addPersona",
    component: Add,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
