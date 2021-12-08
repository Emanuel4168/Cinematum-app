<template>
  <div>
    <label :for="id">{{titulo}}</label>
    <input
     class="form-control"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :maxlength="maxlength"
      :id="id"
      :min="min"
      :max="max"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="text-danger">{{mensajeError}}</span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
      id: {
          type: [Number, String],
          required: true
      },
      placeholder: {
          type: String,
          default: 'Ingrese información'
      },
      type: {
          type: String,
          default: 'text'
      },
      maxlength: {
          type: Number,
          default: 100
      }, 
      readonly: {
          type: Boolean,
          default: false
      },
      disabled: {
          type: Boolean,
          default: false
      },
      value: {
          type: [Number, String],
          default: ''
      },
      titulo: {
          type: String,
          default: ''
      },
      error: {
          type: Boolean,
          default: false
      },
      mensajeError: {
          type: String,
          default: 'Campo obligatorio'
      },
      modelValue: {},
      min:{
          type: String,
          default: "0"
      },
      max: {
          type: String,
          default: "10"
      }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@700&display=swap');


*{
 font-family: 'Readex Pro', sans-serif;
}
</style>
