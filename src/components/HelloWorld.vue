<template>
  <div class="hello">
    <input v-model="message" type="text" />
    <button @click="send" class="btn">Отправить</button>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

const message = ref("");

const send = () => {
  console.log(message.value);
  socket.emit("message", message.value);
};
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
