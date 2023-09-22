<template>
  <div class="main">
    <h1>Rest API test</h1>
    <div v.if="response" class="wrapper">
      <code>Status: {{ response?.status }}</code>
      <code>Status text: {{ response?.statusText }}</code>
      <code>Message: {{ response?.message }}</code>
      <code>Data: <br>{{ response?.data }}</code>
    </div>
  </div>
</template>
  
<script setup>
//=====================================
// Import
//=====================================
import {
  ref,
  onMounted
} from "vue";


//=====================================
// Consts
//=====================================
// const URL = "http://localhost:5500/api"; // local server
const URL = "/api";  // to be used in production
const response = ref( null );


//=====================================
// Functions
//=====================================

function requestXML(){
  const xhttp = new XMLHttpRequest();

  // set the request method at the defined URL
  xhttp.open("GET", URL);

  xhttp.onreadystatechange = function () {
    // with this function syntax, 'this' refers to xhttp object  (would have been the same with xhttp.readyState)
    if (this.readyState == XMLHttpRequest.DONE && this.status === 200) {
      response.value = JSON.parse( this.response );
    }
  };
  // initiate the request
  xhttp.send();
}

async function fetchAPI() {
  const data = await fetch( URL );
  response.value = await data.json();
}

//=====================================
// Life cycle
//=====================================
onMounted( () => {
  requestXML();
  // await fetchAPI();
});


</script>
  
<style scoped>

.main {
  display: grid;
  place-content: center;
  height: 100vh;
}
.wrapper {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 22px;
  border-radius: 12px;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  margin: 22px;
}
</style>
  