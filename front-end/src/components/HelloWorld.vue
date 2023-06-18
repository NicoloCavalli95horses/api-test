<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ res }}</p>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";

defineProps({
  msg: String,
});

const res = ref(null);

onMounted(() => {
  const xhttp = new XMLHttpRequest();
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
