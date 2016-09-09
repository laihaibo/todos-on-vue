<template>
  <div id="app">
    <h1>{{title}}</h1>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo">
      <ul>
        <li v-for="todo in todos" @click="toggleFin($index)" class="pull-center">
        <button @click.stop="true" @click="importantTodo($index)" :class="{hide:($index==0)}">^</button>
          <span  :class="{finished:todo.isFin}">{{todo.text}}</span>
          <button @click="removeTodo($index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Store from './store';

export default {
  data(){
    return{
      title:'This is a todolist',
      newTodo:'',
      todos:Store.fetch() || [{'text':'Add Some Awesome','isFin':false}],
    }
  },
  watch:{
    todos:{
      handler:function(todos){
        Store.save(todos);
      },
      deep:true
    }
  },
  methods:{
    addTodo:function(){
      var msg = this.newTodo.trim();
      if (msg) {
        this.todos.push({text:msg,isFin:false});
        this.newTodo = '';
      }
    },
    removeTodo:function(index){
      this.todos.splice(index,1);
    },
    toggleFin:function(index){
      this.todos[index].isFin=!this.todos[index].isFin;
    },
    importantTodo:function(index){
      var improve = this.todos[index];
      this.todos.splice(index,1);
      this.todos.unshift(improve);
    }
  }
}
</script>

<style>
html {
  height: 100vh;
}
body {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
#app {
  font-family: Source Sans Pro, Helvetica, sans-serif;
  max-width: 600px;
  margin-top: -100px;
  text-align: center;    /*color: #2c3e50;*/
  color: #42b983;
}
#app a {
  text-decoration: none;
  color: #42b983;
}
.logo {
  width: 100px;
  height: 100px;
}
input {
  box-sizing: border-box;
  width: 100%;
}
ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
li {
  margin: 5px 0;
  list-style: none;
  border-bottom: 1px dotted teal;
}
.hide {
  visibility: hidden;
}
.pull-center {
  display: flex;
  justify-content: space-between;
}
.finished {
  text-decoration: line-through;
  color: #ccc;
}
</style>
