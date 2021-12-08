

<template>

  <div id="nav">
    <div> <h2>&laquo; CINEMATUM &raquo;</h2>
    <br></div>
     
    <router-link to="/">Inicio</router-link> |
    <router-link to="/NewFilm">Agregar Film</router-link> |
    <router-link to="/films">Lista de Films</router-link> 
  </div>
  <router-view/>
  <notifications />
</template>

<style>


@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#nav {
  padding: 15px;
  background: rgb(45, 45, 45);
  margin-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: rgb(230, 230, 230);
 font-family: 'Readex Pro', sans-serif;
 font-size: 14px;

}

#nav a.router-link-exact-active {
  color: #42b983;
}

#Logo{
  background: rgb(45, 45, 45);
}

h2{
  color: white;
  font-family: 'Readex Pro', sans-serif;
  padding-top: 10PX;
}



</style>
