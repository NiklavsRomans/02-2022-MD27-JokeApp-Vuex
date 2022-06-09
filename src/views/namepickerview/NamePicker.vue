<template>
  <div class="random-name-generator">
    <div class="random-name-buttons">
      <button class="name-generator-btn" @click="setRandomName">
        Generate Random Name
      </button>
    </div>
    <div class="random-name-box">
      <h2>{{ selectedName.name }}</h2>
      <h2>{{ selectedName.lastname }}</h2>
    </div>
    <button
      v-if="Object.keys(selectedName).length > 0"
      class="reset-btn"
      @click="setReset"
    >
      Reset Names
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "NamePickerView",
  computed: {
    ...mapState("RandomNames", ["selectedName"]),
  },
  methods: {
    ...mapActions("RandomNames", ["setRandomName", "setReset"]),
  },
});
</script>

<style scoped lang="scss">
@import "NamePicker.scss";
</style>
