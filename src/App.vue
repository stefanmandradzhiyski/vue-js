<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">CHARACTERS</router-link> |
      <router-link to="/comics">COMICS</router-link> |
      <router-link to="/favourites">FAVOURITES</router-link> |
      <router-link to="/about">ABOUT</router-link>
    </div>

    <router-view/>

  </div>
</template>

<style>
  @font-face {
    font-family: "Marvel Regular";
    src: url("./assets/fonts/Marvel-Regular.ttf") format("ttf");
  }

  body{
    padding: 0px;
    margin: 0px;
    background-image: url('./assets/img/background.jpg');
    background-repeat: no-repeat;
    background-size: auto;
    background-size: 100% auto;
    background-color: black;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 1.6%;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: black;
  text-decoration: none;
  background-color:white;
  padding-left: 0.3%;
  padding-right: 0.3%;
  padding-top:1.7%;
  padding-bottom:1.7%;
  border-bottom: solid 3px red;
}
</style>
