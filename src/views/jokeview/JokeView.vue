<template>
  <div class="app">
    <FilterButtons />
    <div class="flag-checkboxes">
      <label :key="flag" v-for="flag in getFlagsName">
        <input type="checkbox" /> {{ flag }}
      </label>
    </div>
    <div class="joke-list">
      <JokeList
        :key="id"
        v-for="{ joke, category, id } in getJokesOnly"
        :jokeText="joke"
        :category="category"
        @onClick="$router.push(`/random-jokes/${id}`)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import JokeList from "@/components/jokelist/JokeList.vue";
import FilterButtons from "@/components/filterbuttons/FilterButtons.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    JokeList,
    FilterButtons,
  },

  mounted() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    this.$store.dispatch("RandomJokes/getData", "Any");
    this.getFlagsData();
  },

  methods: {
    ...mapActions("RandomJokes", ["getFlagsData"]),
  },

  computed: {
    ...mapGetters("RandomJokes", ["getJokesOnly", "getFlagsName"]),
  },
});
</script>

<style scoped lang="scss">
@import "JokeView.scss";
</style>
