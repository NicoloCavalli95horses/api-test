<template>
  <div class="bg">
    <div class="login-wrapper">
      <div class="fields">
        <p>Username</p>
        <input type="text" v-model="username" />
        <p>Password</p>
        <input type="text" v-model="password" />
      </div>
      <button @click="onConfirm">Confirm</button>
    </div>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import { ref } from 'vue';

const emit = defineEmits(['logged']);

//==============================
// Consts
//==============================
const username = ref('');
const password = ref('');
// const URL = 'http://localhost:5500/login';
const URL = '/login';



//==============================
// Consts
//==============================
async function onConfirm() {
  const res = await apiLogin( username.value, password.value );
  const is_logged = res.data.logged;
  console.log( is_logged );
  if (is_logged) {
    emit('logged');
  }
}

async function apiLogin( username, password ) {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({ username, password })
  }

  const res = await fetch( URL, config );
  return res.json();
}


</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  position: relative;
}

.login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  border-radius: 12px;
  height: 400px;
  background-color: #111;
  .fields {
    width: 100%;
    input {
      width: 100%;
      height: 32px;
      border-radius: 6px;
      border: none;
      padding: 0 8px;
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  
  button {
    height: 32px;
    border-radius: 8px;
    border: none;
    text-transform: uppercase;
    background-color: orangered;
    color: white;
    cursor: pointer;
  }
}

</style>