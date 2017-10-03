<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-bind:class="btn" v-on:click="cli">{{ hr }}</button>
    <ul>
      <template v-for="item in items">
        <li>{{ item.name }}</li>
        <li>学习</li>
      </template>
    </ul>
    <ul>
      <template v-for="(value,key,index) in object">
        <li>{{ index }}.{{ key }}:{{ value }}</li>
      </template>
    </ul>
    <div v-bind:class="tog"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hr: '按下我',
      btn: {
        btn: true,
        green: true,
        pos: true
      },
      tog: {
        all: true
      },
      items: [
        { name: 'web1' },
        { name: 'web2' },
        { name: 'web3' },
        { name: 'web4' }
      ],
      object: {
        first: '1',
        first2: '2',
        first3: '3',
        first4: '4'
      }
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

.btn{
  padding: .3em .8em;
  border: 1px solid #446d88;
  /*linear-gradient:线性渐变*/
  background: #58a linear-gradient(hsla(0,0%,100%,.2),transparent);
  border-radius: .2em;
  /*box-shadow：盒子阴影*/
  box-shadow: 0 .05em .25em rgba(0,0,0,0.5);
  color: white;
  text-shadow: 0 -.05em .05em rgba(0,0,0,0.5);
  /*某些值相互依赖时，要将它们之间的相互关系用代码表现出来*/

  /*如行高是字号的1.5倍*/
  font-size: 125%;
  line-height: 1.5;
}

.green{
  background-color: #6b0;
}

.pos{
  position: absolute;
  top: 20px;
  right: 20px;
}

.all{
  width: 100px;
  height: 500px;
  background-color: #000;
  position: fixed;
  top: 0;
  right: -100px;
}
</style>
