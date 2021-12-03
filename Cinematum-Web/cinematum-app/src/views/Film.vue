<template>
<div>
    <div class="row">
        <div class="col">
            <card class="w-75 mx-auto" 
            :name="movie.Name" 
            :director="movie.Director" 
            :type="movie.type"
            :genrey="movie.GenreName"
            :year="movie.year"
            @delete-action="deleteMovieAction"
            @favorite-action="addRemoveToFavoritesAction"/>
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
