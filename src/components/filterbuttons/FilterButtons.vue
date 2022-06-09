<template>
  <div class="single-filter-button">
    <button class="joke-generate-btn" value="Any" @click="changeFilter">
      Generate Random Jokes
    </button>
  </div>
  <div class="filter-buttons-box">
    <button
      class="filter-btn"
      @click="changeFilter"
      :key="title"
      :value="category"
      v-for="{ title, category } in filterButtons"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "FilterButtons",
  data: () => {
    return {
      filterButtons: [
        {
          title: "Programming jokes",
          category: "Programming",
        },
        {
          title: "Misc jokes",
          category: "Misc",
        },
        {
          title: "Dark jokes",
          category: "Dark",
        },
        {
          title: "Pun jokes",
          category: "Pun",
        },
      ],
    };
  },
  methods: {
    changeFilter(e) {
      this.$store.dispatch("RandomJokes/getData", e.target.value);
    },
  },
});
</script>

<style scoped lang="scss">
@import "FilterButtons.scss";
</style>
