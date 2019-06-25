<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Karla|Rubik&display=swap');

  $primary: #1FAB89;

  #app {
    font-family: 'Karla', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .btn-primary{
    background-color: $primary;
    border: none;

    &:hover{
      background-color: $primary;
      box-shadow: 0px 10px 15px $primary;
      border: none;
    }
  }

  .btn-purple{
    background-color: #A640F7;
    border: none;
    color: white;
    padding: 0.8rem 2rem;

    &:hover{
      background-color: #A640F7;
      border: none;
      
    }
  }

  .btn-outline-primary{
    border: 1px solid $primary;
    color: $primary;

    &:hover{
      background-color: $primary;
      border: $primary;
    }
  }

  .btn-lg{
    padding: 1rem 2.5rem;
  }

</style>
