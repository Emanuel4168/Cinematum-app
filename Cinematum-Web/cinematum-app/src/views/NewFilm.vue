<template>
  <div>
     <h1> AGREGAR FILM</h1>
    <form>
      <div
        class="card align-items-center text-center w-25 mx-auto"
        style="width: 18rem; padding: 10px"
      >
        <Input
          v-model="movie.Name"
          class="w-75 md-2"
          titulo="Nombre"
          type="text"
          placeholder="Name"
          :maxlength="80"
          id="name"
          :error="erroresValidacionName && !validacionNombre"
          mensajeError="Campo Obligatorio!"
        />
        <br />
        <Input
          v-model="movie.Director"
          class="w-75"
          titulo="Director"
          type="text"
          placeholder="Director"
          maxlength="60"
          id="director"
          :error="erroresValidacionDirector && !validacionDirector"
          mensajeError="Campo Obligatorio!"
        />
        <br />
        <Input
          v-model="movie.Description"
          class="w-75"
          titulo="Descripcion"
          type="text"
          placeholder="Descripcion"
          :maxlength="200"
          id="description"
        />
        <br />
        <label>Genero</label>
        <select
          class="form-select form-select w-75"
          required
          id="dropDown"
          v-model="movie.IdGenre"
        >
          <option
            v-for="g in genres"
            v-bind:key="g.ID"
            :value="g.ID"
            :changed="!validaconIdGenre"
          >
            {{ g.Name }}
          </option>
        </select>
        <span class="text-danger">{{ MessageErrorGenre }}</span>
        <br />
        <label>Tipo</label>
        <select
          class="form-select form-select w-75"
          required
          id="dropDownTypes"
          v-model="movie.Type"
        >
          <option value="2">Serie</option>
          <option value="4">Pelicula</option>
          <option value="6">Documental</option>
          <option value="8">Anime</option>
        </select>
        <span class="text-danger">{{ MessageErrorType }}</span>
        <br />
        <Input
          v-model="movie.Year"
          class="w-75"
          titulo="Año"
          type="number"
          placeholder="Año"
          :maxlength="4"
          min="1900"
          max="2050"
          id="year"
          :error="erroresValidacionYear && !validacionYear"
          mensajeError="Campo Obligatorio!"
        />
        <br />
        <Input
          v-model="movie.Review"
          class="w-75"
          titulo="Review"
          type="text"
          placeholder="Review"
          :maxlength="800"
          id="review"
        />
        <br />
        <Input
          v-model="movie.Score"
          class="w-75"
          titulo="Score"
          type="number"
          min="0"
          max="5"
          placeholder="Score"
          id="score"

        />
        <br />
        <div>
          <button type="submit" class="btn btn-outline-danger mx-4">
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-outline-success mx-4"
            @click="saveFilm()"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
        Score: "",
      },
      test: "",
      erroresValidacion: false,
      erroresValidacionName: false,
      erroresValidacionDirector: false,
      erroresValidacionGenre: false,
      erroresValidacionType: false,
      erroresValidacionYear: false,
      MessageErrorGenre: "",
      MessageErrorType: "",
    };
  },
  components: {
    Input,
  },
  methods: {
    ...mapActions(["getGenres", "postFilm"]),
    saveFilm() {
      if (!this.validacionNombre) {
        this.erroresValidacionName = true;
      } else if (!this.validacionDirector) {
        this.erroresValidacionDirector = true;
      } else if (!this.validacionGenre && this.movie.IdGenre === 0) {
        (this.erroresValidacionGenre = true),
          (this.MessageErrorGenre = "Campo Obligatorio!");
      }
      //  else if(this.validacionGenre && this.movie.IdGenre !== 0){this.erroresValidacionGenre = false, this.MessageErrorGenre= ''}
      else if (!this.validacionType) {
        (this.erroresValidacionType = true),
          (this.MessageErrorType = "Campo Obligatorio!");
      } else if (!this.validacionYear) {
        this.erroresValidacionYear = true;
      } else {
        this.erroresValidacion = false;
        this.postFilm(this.movie);

        this.$router
          .push({ path: "/films" })
          .then(() => {
            notify({
              title: "Exito",
              text: "Se ha agregado el film",
              type: "success",
            });
          })
          .catch((e) => {
            notify({
              title: "Error",
              text: "Error al agregar film",
              type: "error",
            });
          });
      }
    },
  },
  computed: {
    ...mapState(["genres"]),
    validacionNombre() {
      return this.movie.Name !== undefined && this.movie.Name.trim() !== "";
    },
    validacionDirector() {
      return (
        this.movie.Director !== undefined && this.movie.Director.trim() !== ""
      );
    },
    validacionGenre() {
      return this.movie.IdGenre !== undefined && this.movie.IdGenre !== 0;
    },
    validacionType() {
      return this.movie.Type !== undefined && this.movie.Type !== "";
    },
    validacionYear() {
      return this.movie.Year !== undefined && this.movie.Year.trim() !== "";
    },
  },
  mounted() {},
  created() {
    this.getGenres();
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@700&display=swap');

*{

 font-family: 'Readex Pro', sans-serif;

}

H1{
  margin-bottom: 15PX;
}
</style>
