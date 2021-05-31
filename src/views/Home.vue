<template>
  <div>
    <Nav />
    <b-container>
      <b-row style="height: 100vh">
        <b-col class="mx-auto" cols="12" md-6>
          <h1 class="my-5">Juguetería Otto Klauss</h1>
          <Tabla :filas="productos" :encabezados="titulos" />
        </b-col>
        <Edicion />
        <Crear />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "@/components/Nav.vue"
import Tabla from "@/components/Tabla.vue";
import Edicion from "@/components/Edicion.vue";
import Crear from "@/components/Crear.vue";

export default {
  name: "Home",
  components: {
    Tabla,
    Edicion,
    Crear,
    Nav
  },
  computed: {
    ...mapState(["productos", "titulos"]),
  },
};
</script>
