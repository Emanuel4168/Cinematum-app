<template>
  <div class="about">
    <h1>{{movies}}</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MoviesList",
  data(){
    return{
        searhTerms: "",
    }
  },
  components: {
      
  },
  methods: {
    ...mapActions(["getMovies"]),
  },
  computed: {
    ...mapState(["movies"]),
  },
  mounted() {
  },
  created(){
    this.getMovies();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@700&display=swap');

*{
 font-family: 'Readex Pro', sans-serif;
}

#about{
  margin-top: 10px;
}
</style>