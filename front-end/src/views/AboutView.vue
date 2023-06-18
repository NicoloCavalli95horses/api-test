<template>
  <div class="about">
    <div>
      <h1>This is the API response</h1>
      <p>{{ res }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";


const res = ref(null);

onMounted(() => {
  const xhttp = new XMLHttpRequest();
  // const URL = "http://localhost:5500/api";
  const URL = "/api";

  xhttp.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status === 200) {
      res.value = JSON.parse(this.response);
    }
  };

  xhttp.open("GET", URL);
  xhttp.send();
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
