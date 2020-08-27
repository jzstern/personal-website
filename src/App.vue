<template>
  <div id="app">
    <div id="nav">
      <router-link class="route" to="/">
        <img src="@/assets/gradient-bubble.png" />
      </router-link>
      <router-link class="route" to="/dev">🏗</router-link>
      <router-link class="route" to="/design">🧩</router-link>
      <router-link class="route" to="/music">🎧</router-link>
      <router-link class="route" to="/misc">💠</router-link>
      <Links />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    Links: () => import("./components/Links")
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  color: white;
  overflow: hidden;
  padding: 30px;

  height: 100vh;
  background: rgb(50, 36, 46);
  background: linear-gradient(
    153deg,
    rgba(40, 46, 66, 1) 0%,
    rgba(30, 46, 46, 1) 50%,
    rgba(44, 51, 30, 1) 100%
  );

  h4 {
    margin-block-start: 1.6em;
    margin-block-end: 0.8em;
  }

  a {
    text-decoration: none;
    color: goldenrod;

    &:hover {
      text-decoration: underline;
    }
  }
}

#nav {
  @extend %non-selectable;
  display: flex;
  align-items: center;
  font-size: 60px;

  .route {
    @extend %quick-ease;
    display: flex;
    align-items: center;
    padding-right: 25px;

    &:hover {
      opacity: 0.75;
      text-decoration: none;
      transform: translateY(-5px);
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    opacity: 0.5;

    &.router-link-exact-active {
      color: #42b983;
      opacity: 1 !important;
    }
  }

  img {
    width: 70px;
    height: 70px;
  }
}
</style>
