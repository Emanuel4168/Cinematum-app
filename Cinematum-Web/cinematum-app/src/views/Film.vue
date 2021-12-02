<template>
<div>
    <div class="row">
        <div class="col">
            <card class="w-75 mx-auto" :name="movie.Name" :director="movie.Director" :type="movie.type" :genrey="movie.GenreName" :year="movie.year"/>
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
        ...mapActions(["getMovieById"]),

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
