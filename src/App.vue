<template>
  <div class="container mt-3">

    <!-- As a heading -->
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Persones</span>
          <router-link class="navbar-brand" to="/tabla"><a href="#">Tabla</a></router-link>
          <router-link class="navbar-brand" to="/cards"><a href="#">Cards</a></router-link>
          <router-link class="navbar-brand" to="/newPersona"><a href="#">AddPersona</a></router-link>
      </div>
    </nav>




    <router-view />



  </div>
</template>

<script>

export default {
  name: 'App',
};

</script>

<style>

</style>
