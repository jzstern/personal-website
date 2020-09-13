<template>
  <div id="app">
    <div id="nav">
      <router-link class="route" to="/">
        <img src="@/assets/gradient-bubble.png" />
      </router-link>
      <router-link class="route" to="/dev">🏗</router-link>
      <router-link class="route" to="/design">🧩</router-link>
      <router-link class="route" to="/music">🎧</router-link>
      <!-- <router-link class="route" to="/misc">💠</router-link> -->
      <Links v-show="showLinks" :mobile="mobile" />
    </div>
    <!-- <transition name="medium-fade"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  components: {
    Links: () => import("./components/Links")
  },
  computed: {
    showLinks() {
      return (this.$route.name === "Home" && this.mobile) || !this.mobile;
    }
  },
  data: () => ({
    mobile: null
  }),
  beforeMount() {
    this.mobile = window.innerWidth <= 650;
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";
@font-face {
  font-family: "moderat";
  src: url("./assets/Moderat-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "moderat-medium";
  src: url("./assets/Moderat-Medium.ttf");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: Moderat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  color: white;
  // overscroll-behavior: none;
  // overflow: hidden;
  padding: 30px;

  min-height: calc(100vh - 60px);
  // height: 100%;
  background: rgb(50, 36, 46);
  background: linear-gradient(
    153deg,
    rgba(40, 46, 66, 1) 0%,
    rgba(30, 46, 46, 1) 50%,
    rgba(44, 51, 30, 1) 100%
  );

  h1 h2 h3 h4 h5 {
    font-family: "moderat-medium";
  }

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

body {
  overscroll-behavior: none;
  overflow: auto;
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
