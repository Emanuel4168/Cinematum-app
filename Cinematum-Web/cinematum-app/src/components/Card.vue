<template>
  <div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text">
          Director: {{ director }}
          <br />
          Type: {{ type }}
          <br />
          Genrey: {{ genrey }}
          <br />
          Year: {{ year }}
          <br />
    </p>
    <button type="button" class="btn btn-outline-primary">Detalle</button>
    <button type="button" class="btn btn-outline-primary">Editar</button>
    <button type="button" class="btn btn-outline-danger" @click='$emit("delete-action", $event.target.value)'>Eliminar</button>
    <button type="button" class="btn btn-outline-warning" @click='$emit("favorite-action", $event.target.value)'>Agregar/Quitar favorito</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: {
   name: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    genrey: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
  },

};
</script>

<style></style>