<template>
  <div class=" container mt-3">
    <Tabla :personas="personas"/>
    <FormPersona @add-persona="agregarPersona" @delete-persona="eliminarPersona"/>

  </div>
  <!-- <Card :personas="personas" /> -->
</template>

<script>
import Tabla from './components/Tabla.vue'
//import Card from './components/Card.vue'
import FormPersona from './components/FormPersona.vue'

export default {
  name: 'App',
  components: {
    Tabla,
    //Card,
    FormPersona
  },

  data () {
    return {
      personas: [
        {
          id: 1,
          nombre: 'Vicent',
          apellido: 'Ciscar',
          email: 'vicentciscar@gmail.com',
        },
        {
          id: 2,
          nombre: 'Plamen',
          apellido: 'Lannister',
          email: 'tyrion@email.com',
        },
        {
          id: 3,
          nombre: 'Marius',
          apellido: 'Targaryen',
          email: 'daenerys@email.com',
        },
      ],
    }
  },

  methods:{
    agregarPersona(persona) {
    let id = 0;

      if (this.personas.length > 0) {
        id = this.personas[this.personas.length - 1].id + 1;
      }

      this.personas= [...this.personas, { ...persona, id}];
    },

    eliminarPersona(){
    alert('eliminio persona');
    },


  },
};
</script>

<style>

</style>
