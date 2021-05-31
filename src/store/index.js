import Vue from "vue";
import Vuex from "vuex";
import { db } from "../../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    titulos: [
      {
        label: "Codigo",
        key: "codigo",
      },
      {
        label: "Producto",
        key: "nombre",
      },
      {
        label: "Stock",
        key: "stock",
      },
      {
        label: "Precio",
        key: "precio",
      },
      { key: "actions", label: "Acciones" },
    ],
    editar: false,
    crear: false,
    juguete: {
      nombre: "",
      precio: "",
      stock: "",
      codigo: "",
      id: "",
    },
    nuevoJuguete: {
      nombre: "",
      precio: "",
      stock: "",
      codigo: "",
    },
  },
  mutations: {
    setProductos(state, payload) {
      const carga = payload;
      if (!carga) return;
      state.productos.push(carga);
    },
    borrarProductos(state, payload) {
      const juguete = payload;
      if (!juguete) return;
      const index = state.productos.indexOf(juguete);
      state.productos.splice(index, 1);
    },
    validarEditar(state) {
      state.editar = true;
    },
    editarjuguete(state, payload) {
      const juguete = payload;
      if (!juguete) return;
      state.juguete = juguete;
    },
    actualizarState(state, payload) {
      const juguete = payload;
      if (!juguete) return;
      state.productos.map((obj) => {
        if (obj.id === juguete.id) {
          obj.id = juguete.id;
          obj.codigo = juguete.codigo;
          obj.nombre = juguete.nombre;
          obj.stock = juguete.stock;
          obj.precio = juguete.precio;
        }
        return obj;
      });
    },
    nuevoState(state, payload) {
      const carga = payload;
      if(!carga) return;
      const finder = state.productos.find((el) => el.codigo === carga.codigo);
      if(!finder) state.productos.push(payload);
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        const req = await db.collection("juguetes").get();
        if (req) {
          req.docs.forEach((el) => {
            const juguetes = el.data();
            const id = el.id;
            juguetes.id = id;
            commit("setProductos", juguetes);
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateDB({ commit }, payload) {
      const obj = payload;
      if (!obj) return;
      console.log(payload);
      const idFB = obj.id;
      commit("actualizarState", obj);
      try {
        const req = await db.collection("juguetes").doc(idFB).update({
          nombre: obj.nombre,
          stock: obj.stock,
          precio: obj.precio,
        });
        if (!req) return;
      } catch (error) {
        console.log(error);
      }
    },
    async borrarDB({ commit }, payload) {
      const obj = payload;
      if (!obj) return;
      const idFB = obj.id;
      //Elimina FB
      try {
        await db.collection("juguetes").doc(idFB).delete();
      } catch (error) {
        console.log(error);
      }

      // Elimina State
      commit("borrarProductos", obj);
    },
    async crearDB({ commit }, payload) {
      const nuevo =  await payload;
      if(!nuevo) return;
      commit("nuevoState", nuevo);
      try {
        const req = await db.collection("juguetes").get();
        const finder = req.docs.find((el) => el.data().codigo === nuevo.codigo);
        if(!finder) db.collection("juguetes").add(nuevo);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
