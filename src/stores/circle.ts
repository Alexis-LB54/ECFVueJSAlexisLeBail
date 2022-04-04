import { defineStore } from "pinia";

export const CircleStore = defineStore({
  id: "CircleStore",
  state: () => ({
    list: [],
  }),
  persist: true,
  getters: {
    getList: (state) => state.list
  },
  actions: {
    increment() {
    },
  },
});