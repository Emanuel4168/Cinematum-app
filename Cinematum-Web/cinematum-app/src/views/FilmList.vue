<template>
<div>
    <div class="row">
        <div class="col">
            <div  v-for="m in movies" :key="m.id" class="mx-auto w-50">
                <card class="w-100 mx-auto my-4"
                :id="m.ID" 
                :name="m.Name" 
                :director="m.Director" 
                :type="m.type"
                :genrey="m.GenreName"
                :year="m.year"
                :showFavorite="m.Favorite == 'Si'"
                @delete-action="deleteMovieAction"
                @edit-action="editAction"
                @favorite-action="addRemoveToFavoritesAction"
                @detail-action="detailAction" />
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
        ...mapActions(["getMovies","getRandomMovie","deleteMovie","postFavorites","deleteFavorite"]),

        deleteMovieAction(event,idMovie){
            let id = idMovie;
            this.deleteMovie(id).then(() => {this.getMovies()});

            notify({
                title: "Exito",
                text: "Se ha eliminado el film",
                type: "success"
            });

            
        },

        addRemoveToFavoritesAction(event,idMovie){
            let id = idMovie;
            let message = "";
            let movie = this.movies.find(x => x.ID === idMovie)
            
            if(movie.Favorite === "Si"){
                this.deleteFavorite(id)
                movie.Favorite = "No"
                message = "El film se ha eliminado de favoritos"
            }
            else{
                this.postFavorites({IdFilm: id})
                movie.Favorite = "Si"
                message = "El film se ha agregado a favoritos"
            }
            notify({
                title: "Exito",
                text: message,
                type: "success"
            });
        },

        detailAction(event,idMovie){
            let id = idMovie;
            this.$router.push(`/film/${id}`);
        },

        editAction(event,idMovie){
            let id = idMovie;
            this.$router.push(`/editFilms/${id}`);
        },

    },
    computed: {
        ...mapState(["movies"]),
    },
    mounted() {
    },
    created(){
        this.getMovies()
    }
 };
</script>
