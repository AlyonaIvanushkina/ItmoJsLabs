<template>
  <div class="task-manager">
    <ul id="tasks">
      <li v-for="task in tasks" v-bind:key="task">
        <input type="checkbox" class="custom-chbx" v-bind:id="task" v-on:change="changeStatus" />
        <label v-bind:for="task">{{ task }}</label>
      </li>
    </ul>
      <input v-model="value" id="task-input" placeholder="Введите задачу" />
      <button v-on:click="addTask" class="c-button">Добавить задачу</button>
      <br />
      <button v-on:click="removeChecked" class="c-button">Удалить все выполненные задачи</button>
  </div>
</template>

<script>
export default {
  name: 'TaskManager',
  data() {
    fetch('https://kodaktor.ru/j/tasklist')
      .then(res => res.json())
      .then(data => {this.tasks = data.list})

      return {
        tasks: [],
        value: ''
      }
  },
  components: {},
  methods: {
    addTask() {
      if (this.value.length === 0) {
        alert('Невозможно добавить пустую задачу')
        return
      }
      this.tasks.push(this.value)
      this.value = ''
    },
    changeStatus(event) {
      event.target.checked 
        ? event.target.parentNode.classList.add('crossed')
        : event.target.parentNode.classList.remove('crossed')
    },
    removeChecked() {
      let ul = document.getElementById('tasks')
      Array.from(document.querySelectorAll('li.crossed')).forEach((li) => {
        ul.removeChild(li)
      })
    }
  }
}
</script>

<style scoped>

.task-manager {
    font-size: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 15px 0;
}

.custom-chbx {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.custom-chbx+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
}
.custom-chbx+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}
.custom-chbx:checked+label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

#task-input {
    width: -webkit-fill-available;
    margin-bottom: 10px;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    box-shadow: inset 0px 2px 6px 3px rgba(0,0,0,0.06);
}

.c-button {
    min-width: 100px;
    width: 100%;
    margin: 10px 0;
    font-family: inherit;
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: #4676d7;
    color: #fff;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
}

.c-button:hover {
    background: #1d49aa;
}

.c-button:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
}
</style>
