<template>
  <div>
    <NavBar />
    <div class="container">
      <Card :personas="personas" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "card",
  components: {
    Card,
    NavBar,
  },
  data() {
    return {
      personas: [],
    };
  },

  methods: {
    async getPersonas() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/VicentUCF/BD-Persones/persones"
        );
        this.personas = await response.json();
        console.log(this.personas);
      } catch (error) {
        console.error(error);
      }
    },

    async putPersona(persona) {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/VicentUCF/BD-Persones/persones${persona.id}`,
          {
            method: "PUT",
            body: JSON.stringify(persona),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        const personaActualizada = await response.json();
        this.personas = this.personas.map((u) =>
          u.id === persona.id ? personaActualizada : u
        );
      } catch (error) {
        console.error(error);
      }
    },

    async deletePersona(persona) {
      try {
        await fetch(
          `https://my-json-server.typicode.com/VicentUCF/BD-Persones/persones${persona.id}`,
          {
            method: "DELETE",
          }
        );

        this.personas = this.personas.filter((u) => u.id !== persona.id);
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    this.getPersonas();
  },
};
</script>

<style></style>
