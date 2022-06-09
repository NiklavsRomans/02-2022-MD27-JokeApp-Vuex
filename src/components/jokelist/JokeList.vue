<template>
  <li class="joke-item" @click="clickHandler">
    {{ jokeText }}
    <div class="joke-category-box">
      <span> {{ category }}</span>
    </div>
  </li>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: '"JokeList"',
  data() {
    return {};
  },
  emits: ["onClick"],
  props: ["jokeText", "category"],
  methods: {
    clickHandler() {
      this.$emit("onClick");
    },
  },
});
</script>

<style scoped lang="scss">
@import "JokeList.scss";
</style>
