import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/jokeview/JokeView.vue";
import RandomJokeInfoView from "@/views/randomjokeinfoview/RandomJokeInfoView.vue";
import NamePickerView from "@/views/namepickerview/NamePicker.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/random-jokes",
    name: "RandomJokes",
    component: HomeView,
  },
  {
    path: "/random-name",
    name: "random-name-picker",
    component: NamePickerView,
  },
  {
    path: "/random-jokes/:id",
    name: "random-jokes-info",
    component: RandomJokeInfoView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
