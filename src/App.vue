<template>
  <nav>
    <router-link to="/random-jokes">Random Jokes</router-link>
    <router-link to="/random-name">Name Picker</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.39);

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;

    &.router-link-exact-active {
      color: rgb(253, 67, 98);
    }
  }
}

h2 {
  font-family: "Montserrat", sans-serif;
}
</style>
