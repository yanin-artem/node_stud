<template>
  <div class="home">
    <div class="wrapper">
      <div class="chat">
        <p>Чат</p>
        <div class="chat-history">
          <div class="chat-history-item" v-for="message in messages">
            <h3>{{ message.name }}</h3>
            <p>{{ message.message }}</p>
          </div>
        </div>
        <p>Сообщение</p>
        <div style="text-align: left">
          <input type="text" placeholder="Ваше имя" style="margin-left: 5px;" v-model="author">
        </div>
        <div>
          <input type="text" style="width: 250px;" v-model="message">
          <button @click="sendMessage">Отправить</button>
        </div>
      </div>
      <div class="rooms">
        <p>Комнаты</p>
        <div class="rooms-list">
          <div class="rooms-list-item" v-for="room in rooms">
            <p @click="joinRoom(room.id)" :style="room.id === room_id ? 'text-decoration: underline' : ''">{{ room.name }}</p>
          </div>
        </div>
        <p>Создать комнату</p>
        <div>
          <input type="text" style="width: 250px;" v-model="creating_room" />
          <button @click="createRoom">Создать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
}

.chat-history,
.rooms-list {
  width: 350px;
  height: 300px;
  background-color: #f5f5f5;
  overflow-y: scroll;
}

.rooms-list-item>p {
  cursor: pointer;
}

.chat-history-item {
  padding: 10px;
  border: 1px solid #bebebe;
  text-align: left;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");


const messages = ref([])
const author = ref(null)
const message = ref(null)
const rooms = ref([])
const room_id = ref(null)
const creating_room = ref(null)

const createRoom = () => {
  socket.emit('create_room', {
    name: creating_room.value
  });
  creating_room.value = null;
}
const joinRoom = (id) => {
  socket.emit('leave_room', { room_id: room_id.value });

  room_id.value = id;
  socket.emit('join_room', { room_id: room_id.value });
}
const sendMessage = () => {
  message.value = {
    name: author.value,
    message: message.value,
    room_id: room_id.value
  }

  socket.emit('message', message.value);
  message.value = null;
}

onMounted(() => {
  socket.on('connect_error', error => {
    console.error(error);
  });

  socket.on('history', data => {
    messages.value = data;
  });

  socket.on('get-rooms', data => {
    rooms.value = data;
  })

  socket.on('rooms_list_changed', data => {
    rooms.value.push(data);
  });

  socket.on('message', data => {
    messages.value.unshift(data);
  });
})

</script>
