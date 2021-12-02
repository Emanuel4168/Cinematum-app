<template>
  <form>
  <div class="card align-items-center  text-center w-25 mx-auto" style="width: 18rem; padding: 10px;">
        <Input
          class='w-75 md-2'
          titulo='Nombre'
          :type="text"
          :value="movie.Name"
          :placeholder="Name"
          :maxlength="80"
          :id="id"
        />
        <br/>
        <Input
        class='w-75'
         titulo='Director'
          :type="text"
          :value="movie.Director"
          :placeholder="Director"
          :maxlength="60"
          :id="id"
        />
        <br/>
        <Input
        class='w-75'
         titulo='Descripcion'
          :type="text"
          :value="movie.Director"
          :placeholder="Director"
          :maxlength="200"
          :id="id"
        />
        <br/>
        <label>Genero</label>
        <select  class="form-select form-select w-75" required id="dropDown">
        <option>Select here</option>
        <option v-for="g in genres" v-bind:key='g.ID' :value="g.ID">{{ g.Name }}</option>
        </select>
        <br/>
        <Input
        class='w-75'
         titulo='Tipo'
          :type="text"
          :value="movie.Type"
          :maxlength="20"
          :id="id"
        />
        <br/>
        <Input
        class='w-75'
         titulo='Año'
          :type="text"
          :value="movie.Year"
          :placeholder="Año"
          :maxlength="4"
          :id="id"
        />
        <br/>
        <div >
        <button type="submit" class="btn btn-outline-danger mx-4" >Cancelar</button>
        <button type="button" class="btn btn-outline-success mx-4" @click='saveFilm()'>Guardar</button>
        </div>
  </div>
  </form>
</template>

<script>
import {mapState,mapActions } from "vuex";
import Input from "../components/Input.vue";

export default {
  name: "NewFilm",
  data() {
    return {
      movie: {
        Name: '',
        Director: "",
        IdGenre: 0,
        Description: "",
        Type: "",
        Year: "",
      },
    };
  },
  components: {
    Input,
  },
  methods: {
    ...mapActions(["getGenres", "postFilm"]),
    saveFilm(){
    alert("si entra", this.movie)
      this.postFilm(this.movie);
    }
  },
  computed: {
  ...mapState(["genres"]),
  },
  mounted() {},
  created() {
    this.getGenres();
  },
};
</script>
