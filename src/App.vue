<template>
  <h1>Pizza API test:</h1>  
   <div v-for="p in pizza" :key="p">
     {{ p.name }}, {{ p.price }}
   </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

const pizza = ref("");

onBeforeMount(async () => {
  const response = await fetch("http://localhost:3000/pizza");
  const jsonData = await response.json();
  pizza.value = jsonData;
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
