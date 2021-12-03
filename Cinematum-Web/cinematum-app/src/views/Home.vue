<template>
  <div class="home">
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label class="text-left control-label d-inline" for="genres">Genero</label>
          <select id="genres" class="form-select w-25 mx-auto" required v-model="generoFiltro">
            <option>Select here</option>
            <option v-for="g in genres" v-bind:key='g.ID' :value="g.Name">{{ g.Name }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <Table class="w-75 mx-auto" :items="favoritesFilter" :fields="campos" :busy="loading">
      <template slot="actions" slot-scope="{ item }">
        <b-button
          @click="onEditar(item)"
          variant="primary"
          size="sm"
          class="me-2">
          Editar
        </b-button>
        <b-button 
          @click="onEliminar(item)" 
          variant="danger" 
          size="sm">
          Eliminar
        </b-button>
      </template>
    </Table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import Table from '@/components/Table.vue'
import { notify } from "@kyvg/vue3-notification";

export default {
  name: 'Home',
    data(){
        return{
        campos: [
        {
           key: "ID", 
           label: "ID" 
        },
        {
          key: "Name",
          label: "Nombre",
        },
        {
          key: "Director",
          label: "Director",
        },
        {
          key: "type",
          label: "Type",
        },
        {
          key: "year",
          label: "Year",
        },
        {
          key: "GenreName",
          label: "Genre",
        },
        {
          key: "FavoriteID",
          label: "Favorite ID",
        },
        { key: "actions", label: "Acciones" },
      ], 
      generoFiltro: "",
      favoritesFilter: []
        }
    },
   components: {
        Table
    },
    methods: {
        ...mapActions(["getFavorites","getGenres"]),

    },
    computed: {
        ...mapState(["favorites","genres"]),
    },
    mounted() {
      this.getFavorites()
      this.getGenres()
      this.favoritesFilter = this.favorites;
      alert(JSON.stringify(this.favoritesFilter))
    },
    created(){
        
    },
    watch: {
      generoFiltro: function() {
        this.favoritesFilter = this.favorites.filter(e => e.GenreName === this.generoFiltro);
      }
  }
}
</script>
