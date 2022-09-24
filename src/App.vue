<template>
  <Header />
  <div class="container mx-auto px-3 w-full">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
body {
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
}
</style>
