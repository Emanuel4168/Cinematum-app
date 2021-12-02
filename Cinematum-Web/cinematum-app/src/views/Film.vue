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
        ...mapActions(["getMovieById","deleteMovie","postFavorites","deleteFavorite"]),

        deleteMovieAction(event){
            let id = this.$route.params.id;
            this.deleteMovie(id);
        },

        addRemoveToFavoritesAction(event){
            let id = this.$route.params.id;
            alert(this.movie.Favorite)
            if(this.movie.Favorite === "Si"){
                this.deleteFavorite(id)
                this.movie.Favorite = "No"
            }
            else{
                this.postFavorites({IdFilm: id})
                this.movie.Favorite = "Si"
            }
        }
    },
    computed: {
        ...mapState(["movie"]),
    },
    mounted() {
    },
    created(){
        this.getMovieById(this.$route.params.id)
    }
 };
</script>
