<template>

  <div>
      <h2 class="d-flex justify-content-start border-bottom border-dark">Add Person:</h2>

      <form class="row" @submit.prevent="enviarFormulario">
        <div class="col-6 mb-3">
          <label for="name" class="form-label">name</label>
          <input
            v-model="persona.name"
            type="name"
            class="form-control"
            :class="{ 'is-invalid': procesando && nameInvalido }"
            @focus="resetEstado"
            @keypress="resetEstado"
          />
        </div>

        <div class="col-6 mb-3 form-check">
          <label for="email" class="form-label">Email</label>
          <input
          v-model="persona.email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': procesando && emailInvalido }"
          @focus="resetEstado"
          @keypress="resetEstado"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

        <div v-if="correcto" class="alert alert-success mt-3" role="alert">
          La persona ha sido agregada correctamente!
        </div>

        <div v-if="error && procesando" class="alert alert-danger mt-3" role="alert">
            Debes rellenar todos los campos!
        </div>

      </form>



  </div>


</template>

<script>
export default {
  name: "form-persona",
  data() {
      return {
        procesando: false,
        correcto: false,
        error: false,
        persona: {
          name: '',
          email: '',
        },
      }
    },
  methods: {
    enviarFormulario() {

      this.procesando = true;
      this.resetEstado();

      if (this.nameInvalido || this.emailInvalido) {
        this.error = true;
        return;
      }

      this.$emit('add-persona', this.persona);
      this.error = false;
      this.correcto = true;
      this.procesando = false;

      this.persona= {
        name: '',
        email: '',
      }

    },

    resetEstado() {
      this.correcto = false;
      this.error = false;
    },
  },

  computed: {
    nameInvalido() {
      return this.persona.name.length < 1;
    },

    emailInvalido() {
      return this.persona.email.length < 1;
    },
},

}
</script>

<style>

</style>
