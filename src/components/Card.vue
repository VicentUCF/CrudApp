<template>
  <div class="container">
    <div class="card-group">
        <div class="card me-3" v-for="persona in personas" :key="persona.id">
          <div class="card-header">
            Persona {{persona.id}}
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {{ persona.nombre }}
              {{ persona.apellido }}
            </h5>
            <p class="card-text">{{ persona.email }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'card',
    props:{
      personas: Array,
    },
  };

</script>

<style scoped>

</style>
