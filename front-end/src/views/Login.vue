<template>
  <div class="bg">
    <div class="login-wrapper">
      <div class="fields">
        <InputText
          label="Username"
          placeholder="insert your username"
          v-model="username"
          @reset="username = ''"
        />
        <InputText
          :anonymize="true"
          label="Password"
          placeholder="insert your password"
          v-model="password"
          @reset="username = ''"
        />
      </div>
      <span v-if="error.length" class="error">Auth fail: {{ error }}</span>
      <Btn text="Confirm" :def="true" @click="onConfirm" />
    </div>
  </div>
</template>

<script setup>
//==============================
// Import
//==============================
import Btn from "../components/Btn.vue";
import InputText from "../components/InputText.vue";
import { ref } from "vue";
import { apiLogin } from "../utils/apis";

const emit = defineEmits(["logged"]);

//==============================
// Consts
//==============================
const username = ref("");
const password = ref("");
const error = ref("");

//==============================
// Consts
//==============================
async function onConfirm() {
  const res = await apiLogin({ 
    username: username.value,
    password: password.value
  });
  username.value = '';
  password.value = '';
  error.value = '';

  const is_logged = res.data.logged;
  if ( is_logged ) {
    emit("logged");
  } else {
    error.value = res.message;
  }
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
  background-color: var(--black);
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
}

</style>
