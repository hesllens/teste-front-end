import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    form: [
      {
        name: "",
        surname: "",
        date: "",
        email: "",
        cpf: "",
      },
    ],
  }),
  actions: {
    assign(data) {
      this.form.push(data);
    },
  },
});
