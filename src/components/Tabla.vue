<template>
  <div>
    <h1>Personas</h1>
    <table class="row table table-hover">
      <thead>
        <tr class="table-primary row">
          <th class="col-3">Nombre</th>
          <th class="col-3">Apellido</th>
          <th class="col-4">Email</th>
          <th class="col-1"></th>
          <th class="col-1"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="row" v-for="persona in personas" :key="persona.id">

          <!-- Persona properties -->
          <td class="col-3">{{ persona.nombre }}</td>
          <td class="col-3">{{ persona.apellido }}</td>
          <td class="col-4">{{ persona.email }}</td>

          <!-- Edit button -->
          <td class="col-1">
            <button class="btn btn-primary w-100">
              Edit
            </button>
          </td>

          <!-- Remove Button -->
          <td class="col-1">
            <button class="btn btn-danger" @click="$emit('delete-persona')">🗑️ Eliminar</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'tabla',
    props:{
      personas: Array,
    },

  };

</script>

<style scoped></style>
