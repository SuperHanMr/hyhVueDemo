<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app{
 height: calc(100% - 50px);
 
}

html,body{
  height: 100%;
}

</style>
