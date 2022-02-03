<template>
  <div>
    <NavBar />
    <div class="container">
      <FormPersona @add-persona="postPersona" />
    </div>
  </div>
</template>

  <script>
import FormPersona from "@/components/FormPersona.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    FormPersona,
    NavBar,
  },

  methods: {
    async postPersona(persona) {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/VicentUCF/BD-Persones/persones",
          {
            method: "POST",
            body: JSON.stringify(persona),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        const personaCreada = await response.json();
        console.log(personaCreada);
        //this.personas = [...this.personas, personaCreada];
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
