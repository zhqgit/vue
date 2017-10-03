<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 @click="trans">{{ toUp }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2 v-bind:class="[red,bg]">Ecosystem</h2>
    <global></global>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      red: 'red',
      bg: 'bg'
    }
  },
  computed: {
    toUp: {
      get(){
        return this.msg.toUpperCase()
      },
      set(val){
        this.msg = 'set' + val.toLowerCase()
      }
    }
  },
  methods: {
    trans(){
      this.msg = 'WWWWWW'
      console.log('trans' + this.msg)
    }
  },
  watch: {
    toUp: function(val,oldValue){
      console.log(val,oldValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.red {
  color: red;
}

.bg {
  background-color: black;
}
</style>
