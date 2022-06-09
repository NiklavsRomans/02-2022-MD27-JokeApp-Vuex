import axios from "axios";
import { Commit } from "vuex";

type RandomJokes = {
  jokes: [
    {
      category: string;
      type: string;
      joke: string;
      flags: {
        nsfw: boolean;
        religious: boolean;
        political: boolean;
        racist: boolean;
        sexist: boolean;
        explicit: boolean;
      };
      id: number;
      safe: boolean;
      lang: string;
    }
  ];
};

type SingleJoke = {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

type Flags = {
  flags: ["nsfw", "religious", "political", "racist", "sexist", "explicit"];
};

export default {
  namespaced: true,
  state: {
    randomJokes: {} as RandomJokes,
    singleJokeInfo: {} as SingleJoke,
    flags: {} as Flags,
  },

  mutations: {
    setData(state: { randomJokes: RandomJokes }, payload: RandomJokes) {
      state.randomJokes = payload;
    },

    setSingleJokeData(
      state: { singleJokeInfo: SingleJoke },
      payload: SingleJoke
    ) {
      state.singleJokeInfo = payload;
    },

    setFlagsData(state: { flags: Flags }, payload: Flags) {
      state.flags = payload;
    },
  },

  actions: {
    getData({ commit }: { commit: Commit }, filter: string) {
      axios
        .get(`https://v2.jokeapi.dev/joke/${filter}?type=single&amount=10`)
        .then((response) => {
          commit("setData", response.data);
        });
    },

    getSingleJokeData({ commit }: { commit: Commit }, id: number) {
      axios
        .get(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`)
        .then((response) => {
          commit("setSingleJokeData", response.data);
        });
    },

    getFlagsData({ commit }: { commit: Commit }) {
      axios.get("https://v2.jokeapi.dev/flags").then((response) => {
        commit("setFlagsData", response.data);
      });
    },
  },

  getters: {
    getJokesOnly(state: { randomJokes: RandomJokes }) {
      return state.randomJokes.jokes;
    },

    getSingleJokeData(state: { singleJokeInfo: SingleJoke }) {
      return state.singleJokeInfo;
    },

    // getJokesByFlags:
    //   (state: { randomJokes: RandomJokes }) => (flag: string) => {
    //     return state.randomJokes.jokes.filter((joke) => joke.flags[flag]);
    //   },

    getFlagsName(state: { flags: Flags }) {
      return state.flags.flags;
    },
  },
};
