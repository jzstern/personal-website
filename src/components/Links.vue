<template>
  <div id="links">
    <a href="mailto:jeremy@loft.radio">Email</a>
    <a href="https://github.com/jzstern/">Github</a>
    <a href="https://twitter.com/jzstern">Twitter</a>
    <a href="https://www.linkedin.com/in/jeremy-stern-6a5a2490/">LinkedIn</a>
    <a href="https://instagram.com/jzstern">Instagram</a>
  </div>
</template>

<script>
export default {
  name: "Links"
};
</script>

<style scoped lang="scss">
// @import "../styles/global.scss";

#links {
  position: absolute;
  top: 30px;
  right: 30px;
  // @extend %quick-ease;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  flex-grow: 100;
}

a {
  filter: brightness(2);
  &:hover {
    color: white !important;
  }
}
</style>