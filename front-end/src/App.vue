<template>
  <Login v-if="!is_logged" @logged="is_logged = true " />
  <RouterView v-if="is_logged" />
</template>

<script setup>
//============================
// Import
//============================
import { ref } from 'vue';
import Login from './views/Login.vue';


//============================
// Consts
//============================
const is_logged = ref( false );

</script>