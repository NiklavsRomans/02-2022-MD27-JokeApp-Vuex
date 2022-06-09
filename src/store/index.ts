import { createStore } from "vuex";
import RandomJokes from "./modules/RandomJokes";
import RandomNames from "./modules/RandomNames";

export default createStore({
  modules: {
    RandomJokes,
    RandomNames,
  },
});
