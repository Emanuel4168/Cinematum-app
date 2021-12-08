<template>
<div id="cont">
    <div class="row">
        <div class="col">
            <h1>{{movie.Name}}</h1>
            <p>Director: {{movie.Director}}</p>
            <p>Tipo: {{movie.type}}</p>
            <p>Género: {{movie.GenreName}}</p>
            <p>Año: {{movie.year}}</p>
            <p>Favorito: {{movie.Favorite}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card w-75 mx-auto">
                <div class="card-body">
                    <h4 class="card-title">Reseña:</h4>
                    <h5>{{movie.Review}}</h5>
                    <h5>{{movie.Score}}</h5>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import card from '../components/Card.vue'
import { notify } from "@kyvg/vue3-notification";

export default {
    name: "MoviesList",
    data(){
        return{
            
        }
    },
    components: {
        card
    },
    methods: {
        ...mapActions(["getMovieById","getRandomMovie","deleteMovie","postFavorites","deleteFavorite"]),

        deleteMovieAction(event){
            let id = this.movie.ID;
            this.deleteMovie(id);
        },

        addRemoveToFavoritesAction(event){
            let id = this.movie.ID;
            let message = "";
            if(this.movie.Favorite === "Si"){
                this.deleteFavorite(id)
                this.movie.Favorite = "No"
                message = "El film se ha eliminado de favoritos"
            }
            else{
                this.postFavorites({IdFilm: id})
                this.movie.Favorite = "Si"
                message = "El film se ha agregado a favoritos"
            }
            notify({
                title: "Exito",
                text: message,
                type: "success"
            });
        }
    },
    computed: {
        ...mapState(["movie"]),
    },
    mounted() {
    },
    created(){
        if(this.$route.params.id === "random"){
            this.getRandomMovie()
            return;
        }
        this.getMovieById(this.$route.params.id)
    }
 };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@700&display=swap');


*{
 font-family: 'Readex Pro', sans-serif;
}

#cont{
    margin-top: 25px;
}
</style>