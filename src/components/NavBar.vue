<template>
  <div class="mb-3">
    <nav class="navbar navbar-expand-lg navbar-dark rounded-bottom bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Persones</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/tabla">Tabla Personas </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/cards">Cartas Personas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " aria-current="page" to="/newPersona">Anyadir Personas</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  background: pink;
}
</style>
