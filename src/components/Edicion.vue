<template>
  <div v-if="editar" class="text-start">
    <h2 class="my-5 text-center">Editar producto</h2>
    <label>Nombre</label>
    <b-form-input class="my-2" v-model="juguete.nombre"></b-form-input>
    <label>Stock</label>
    <b-form-input class="my-2" v-model="juguete.stock"></b-form-input>
    <label>Precio</label>
    <b-form-input class="my-2" v-model="juguete.precio"></b-form-input>
    <div class="text-center">
      <b-button @click="actualizar(juguete)" class="my-2" variant="success"
        >Actualizar</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Edicion",
  data() {
    return {
      nombre: "",
      stock: 0,
      precio: 0,
    };
  },
  computed: {
    ...mapState(["editar", "juguete"]),
  },
  methods: {
    actualizar(obj) {
      this.updateDB(obj);
    },
    ...mapActions(["updateDB"]),
  },
};
</script>

<style></style>
