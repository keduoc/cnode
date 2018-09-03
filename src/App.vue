<template>
  <div id="app">
    <Header></Header>
    
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  
   
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
html,body,#app{
  height: 100%;
}
.main{
  width: 90%;
  margin: 15px 67.5px;
}

</style>
