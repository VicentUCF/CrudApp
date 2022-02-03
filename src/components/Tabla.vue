<template>
  <div>
    <h1>Personas</h1>
    <table class="row table table-hover">
      <thead>
        <tr class="table-primary row">
          <th class="col-5">name</th>
          <th class="col-5">Email</th>
          <th class="col-1"></th>
          <th class="col-1"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="row table-secondary" v-for="persona in personas" :key="persona.id">

          <!-- Persona properties -->
          <td class="col-5" v-if="editando === persona.id">
            <input type="text" class="form-control" v-model="persona.name" />
          </td>
          <td v-else class="col-5">{{ persona.name }}</td>
          <td class="col-5" v-if="editando === persona.id">
            <input type="email" class="form-control" v-model="persona.email" />
          </td>
          <td v-else class="col-5">{{ persona.email }}</td>



          <td class="col-2">
            <div class="btn-group" v-if="editando == persona.id">
               <button class="m-1 btn btn-success" @click="guardarPersona(persona)">💾 Guardar</button>
              <button class="m-1 btn btn-secondary" @click="cancelarEdicion(persona)">❌ Cancelar</button>
            </div>

            <div class="btn-group" v-else>
              <button class="m-1 btn btn-primary" @click="editPersona(persona)">✏️ Editar</button>
              <button class="m-1 btn btn-danger" @click="deletePersona(persona)">🗑️ Eliminar</button>
            </div>
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
    data(){
      return{
        editando: null,
      }

    },
    methods:{
      deletePersona(persona){
        this.$emit('delete-persona',persona);
      },

      editPersona(persona){
        this.personaEditada = Object.assign({}, persona);
        this.editando = persona.id;
      },

      guardarPersona(persona) {
        if (!persona.name.length || !persona.email.length) {
          return;
        }
        this.$emit('actualizar-persona', persona.id, persona);
        this.editando = null;
      },
      cancelarEdicion(persona) {
        Object.assign(persona, this.personaEditada);
        this.editando = null;
      }
    }

  };

</script>

<style scoped></style>
