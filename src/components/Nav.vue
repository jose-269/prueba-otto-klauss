<template>
  <b-navbar toggleable type="dark" variant="dark" class="px-5">
    <b-navbar-brand href="#">Otto-Klauss</b-navbar-brand>
    <b-button @click="logOut">Log out</b-button>
  </b-navbar>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    async logOut() {
      try {
        await firebase.auth().signOut();
        localStorage.setItem("login", "noLogueado");
          this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
