<template>
  <b-table
    v-if="filas && encabezados"
    striped
    hover
    :fields="encabezados"
    :items="filas"
  >
    <template #cell(actions)="row">
        <b-button
        size="sm"
        @click="editar(row.item)"
        variant="warning"
        class="my-1 me-3"
      >
        Editar
      </b-button>
      <b-button
        size="sm"
        @click="borrar(row.item)"
        variant="danger"
        class="my-1"
      >
        Eliminar
      </b-button>
    </template>
  </b-table>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Tabla",
  props: {
    filas: {
      type: Array,
    },
    encabezados: {
      type: Array,
    },
  },
  methods: {
      ...mapActions(["borrarDB"]),
      ...mapMutations(["validarEditar", "editarjuguete"]),
      editar(obj) {
          this.validarEditar();
          this.editarjuguete(obj)
      },
    borrar(obj) {
        this.borrarDB(obj)
    },
  },
};
</script>

<style></style>
