<template>
  <div>
    <form >
  <div class="card align-items-center  text-center w-25 mx-auto" style="width: 18rem; padding: 10px;">
        <Input
          v-model="movie.Name"
          class='w-75 md-2'
          titulo='Nombre'
          type="text"
          placeholder="Name"
          :maxlength="80"
          id="name"
        />
        <br/>
        <Input
          v-model="movie.Director"
         class='w-75'
         titulo='Director'
          type="text"
          placeholder="Director"
          maxlength="60"
          id="director"
        />
        <br/>
        <Input
        v-model="movie.Description"
        class='w-75'
         titulo='Descripcion'
          type="text"
          placeholder="Descripcion"
          :maxlength="200"
          id="description"
        />
        <br/>
        <label>Genero</label>
        <select  class="form-select form-select w-75" required id="dropDown" v-model="movie.IdGenre">
        <option v-for="g in genres" v-bind:key='g.ID' :value="g.ID">{{ g.Name }}</option>
        </select>
        <br/>
        <label>Tipo</label>
        <select  class="form-select form-select w-75" required id="dropDownTypes" v-model="movie.Type">
          <option value="2">Serie</option>
          <option value="4">Pelicula</option>
          <option value="6">Documental</option>
          <option value="8">Anime</option>
        </select>
        <br/>
        <Input
        v-model="movie.Year"
        class='w-75'
         titulo='Año'
          type="number"
          placeholder="Año"
          :maxlength="4"
          id="year"
        />
        <br/>
        <Input
        v-model="movie.Review"
        class='w-75'
          titulo='Review'
          type="text"
          placeholder="Review"
          :maxlength="500"
          id="review"
        />
        <br/>
        <Input
        v-model="movie.Score"
        class='w-75'
         titulo='Score'
          type="number"
          placeholder="Score"
          :maxlength="4"
          id="score"
        />
        <br/>
        <div >
        <button type="submit" class="btn btn-outline-danger mx-4" >Cancelar</button>
        <button type="button" class="btn btn-outline-success mx-4" @click='saveFilm()'>Guardar</button>
        </div>
  </div>

  </form>
  </div>
</template>

<script>
import {mapState,mapActions } from "vuex";
import Input from "../components/Input.vue";
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "NewFilm",
  data() {
    return {
      movie: {
        Name: "",
        Director: "",
        IdGenre: 0,
        Description: "",
        Type: "",
        Year: "",
        Review: "",
        Score: ""
      },
      test: ""
    };
  },
  components: {
    Input,
  },
  methods: {
    ...mapActions(["getGenres", "postFilm"]),
    saveFilm(){
      this.postFilm(this.movie);

      this.$router.push({ path: '/films'}).then(() => {
        notify({
          title: "Exito",
          text: "Se ha agregado el film",
          type: "success"});
      })
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
