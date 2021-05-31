<template>
  <div class="text-start">
    <h2 class="my-5 text-center">Ingresar producto</h2>
    <label>Código</label>
    <b-form-input v-model="nuevoJuguete.codigo" class="my-2"></b-form-input>
    <label>Nombre</label>
    <b-form-input v-model="nuevoJuguete.nombre" class="my-2"></b-form-input>
    <label>Stock</label>
    <b-form-input v-model="nuevoJuguete.stock" class="my-2"></b-form-input>
    <label>Precio</label>
    <b-form-input v-model="nuevoJuguete.precio" class="my-2"></b-form-input>
    <div class="text-center">
      <b-button @click="ingresar(nuevoJuguete)" class="my-2" variant="success"
        >Ingresar</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Crear",
  computed: {
      ...mapState(["nuevoJuguete"])
  },
  methods: {
      ingresar(obj) {
          this.crearDB(obj);
      },
      ...mapActions(["crearDB"]),
  },
};
</script>
