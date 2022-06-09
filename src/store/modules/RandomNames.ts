import { ActionContext } from "vuex";

type Names = {
  id: number;
  name: string;
  lastname: string;
  picked: boolean;
};

export default {
  namespaced: true,
  state: {
    names: [
      {
        id: 1,
        name: "Niklāvs",
        lastname: "Romans",
        picked: false,
      },
      {
        id: 2,
        name: "Alberts",
        lastname: "Īvāns",
        picked: false,
      },
      {
        id: 3,
        name: "Arnis",
        lastname: "Toks",
        picked: false,
      },
      {
        id: 4,
        name: "Artis",
        lastname: "Vansovičs",
        picked: false,
      },
      {
        id: 5,
        name: "Artūrs",
        lastname: "Dancis",
        picked: false,
      },
      {
        id: 6,
        name: "Edgars",
        lastname: "Kapilinskis",
        picked: false,
      },
      {
        id: 7,
        name: "Elvis",
        lastname: "Ketners",
        picked: false,
      },
      {
        id: 8,
        name: "Haralds",
        lastname: "Treilons",
        picked: false,
      },
      {
        id: 9,
        name: "Ieva",
        lastname: "Dīvāne",
        picked: false,
      },
      {
        id: 10,
        name: "Ilona",
        lastname: "Kuzmina",
        picked: false,
      },
      {
        id: 11,
        name: "Inta",
        lastname: "Ozoliņa",
        picked: false,
      },
      {
        id: 12,
        name: "Jānis",
        lastname: "Šijānovs",
        picked: false,
      },
      {
        id: 13,
        name: "Ņikita",
        lastname: "Peškovs",
        picked: false,
      },
      {
        id: 14,
        name: "Regīna",
        lastname: "Scerbakova",
        picked: false,
      },
      {
        id: 15,
        name: "Ričards",
        lastname: "Dzelme",
        picked: false,
      },
      {
        id: 16,
        name: "Rihards",
        lastname: "Karlauskis",
        picked: false,
      },
      {
        id: 17,
        name: "Roberts",
        lastname: "Lode",
        picked: false,
      },
      {
        id: 18,
        name: "Jānis",
        lastname: "Seržants",
        picked: false,
      },
      {
        id: 18,
        name: "Ketija",
        lastname: "Krista",
        picked: false,
      },
    ] as Names[],
    selectedName: {} as Names,
  },
  mutations: {
    getUnpickedName(state: { names: Names[]; selectedName: Names }) {
      const getUnselectedName = state.names.filter((name) => !name.picked);

      const getRandomName =
        getUnselectedName[Math.floor(Math.random() * getUnselectedName.length)];

      getRandomName.picked = true;
      state.selectedName = getRandomName;

      if (state.names.every((name) => name.picked === true)) {
        state.names.map((name) => (name.picked = false));
      }
    },

    resetNames(state: { names: Names[]; selectedName: Names }) {
      state.names.map((name) => (name.picked = false));
      state.selectedName = {} as Names;
    },
  },
  actions: {
    setRandomName(context: ActionContext<unknown, unknown>) {
      context.commit("getUnpickedName");
    },
    setReset(context: ActionContext<unknown, unknown>) {
      context.commit("resetNames");
    },
  },
  getters: {},
};
