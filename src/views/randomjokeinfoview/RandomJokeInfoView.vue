<template>
  <div class="joke-info">
    <p class="joke-title"><strong>ID: </strong>{{ getSingleJokeData.id }}</p>
    <p class="joke-title">
      <strong>Joke: </strong>{{ getSingleJokeData.joke }}
    </p>
    <p class="joke-title">
      <strong>Safe: </strong>{{ getSingleJokeData.safe }}
    </p>
    <p class="joke-title">
      <strong>Lang: </strong>{{ getSingleJokeData.lang }}
    </p>
    <p class="joke-title">
      <strong>Category: </strong>{{ getSingleJokeData.category }}
    </p>
    <button class="back-btn" @click="this.$router.push('/random-jokes')">
      Back
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "RandomJokeInfoView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    this.$store.dispatch("RandomJokes/getSingleJokeData", this.id);
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters("RandomJokes", ["getSingleJokeData"]),
    // ...mapState("RandomJokes", ["randomJokes"]),
  },
});
</script>

<style scoped lang="scss">
@import "RandomJokeInfoView.scss";
</style>
