<template>
  <div class="hello">
    <input type="number" v-model="room_id" />
    <input v-model="message" type="text" />
    <button @click="send" class="btn">Отправить</button>
    <p>
      {{ incomingMessages }}
    </p>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

socket.on("message", (data) => {
  incomingMessages.value = data;
});

const message = ref("");
const room_id = ref(1);
const incomingMessages = ref("");

const send = () => {
  console.log(message.value);
  socket.emit("message", { message: message.value, room_id: room_id.value });
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
