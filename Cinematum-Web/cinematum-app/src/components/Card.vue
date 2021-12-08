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
    <button type="button" class="btn btn-outline-primary mx-2" @click='$emit("detail-action", $event.target.value, id)'>Detalle</button>
    <button type="button" class="btn btn-outline-primary mx-2" @click='$emit("edit-action", $event.target.value, id)'>Editar</button>
    <button type="button" class="btn btn-outline-danger mx-2" @click='$emit("delete-action", $event.target.value, id)'>Eliminar</button>
    <div class="d-inline mx-2">
      <button type="button" class="btn btn-outline-warning" @click='$emit("favorite-action", $event.target.value, id)'>Agregar/Quitar favorito</button>
      <b-icon v-if="showFavorite" class="text-warning mx-2" icon="star-fill" font-scale="2"></b-icon>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: {
      type: Number,
      required: true,
    },
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
    showFavorite: {
      type: Boolean,
      default: true
    },
  },

};
</script>

<style></style>